<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{

    public function paginate(Request $request)
    {
        $perPage = $request->input('perPage', 5);
        $products = Product::paginate($perPage);
        $currentPage = $products->currentPage();
        $formattedProducts = $products->map(function ($product) {
            $categoryName = DB::table('categories')->where('id', $product->category_id)->value('name');
            $userName = DB::table('users')->where('id', $product->user_id)->value('name');
            return [
                'id' => $product->id,
                'preview' => $product->preview,
                'name' => $product->name,
                'description' => $product->description,
                'created_at' => $product->created_at,
                'retail_price' => $product->getRetailPriceFormattedAttribute(),
                'market_price' => $product->getMarketPriceFormattedAttribute(),
                'category' => $categoryName,
                'user' => $userName,
            ];
        });
        return response()->json([
            'products' => $formattedProducts,
            'current_page' => $currentPage,
            'total' => $products->total(),
            'per_page' => $products->perPage(),
            'last_page' => $products->lastPage(),
        ]);
    }

    /**
     * Create a new product.
     *
     * @param  \App\Http\Requests\ProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function create(ProductRequest $request)
    {
        $data = $request->validated();

        if (isset($data['preview'])) {
            $relativePath = $this->saveImage($data['preview']);
            $data['preview'] = $relativePath;
        }

        $category = Category::where('name', $data['category_id'])->first();

        /** @var \App\Models\Product $product */
        $product = Product::create([
            'preview' => $data['preview'],
            'name' => $data['name'],
            'description' => $data['description'],
            'retail_price' => $data['retail_price'],
            'market_price' => $data['market_price'],
            'category_id' => $category->id,
            'user_id' => $data['user_id'],
        ]);

        return response([
            'status' => 'success',
            'message' => 'Product created successfully',
            'product' => $product,
        ]);
    }

    /**
     * Update an existing product.
     *
     * @param  \App\Http\Requests\ProductRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProductRequest $request, int $id)
    {
        $data = $request->validated();

        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                'status' => 'error',
                'message' => 'No product found'
            ], 404);
        }

        if (isset($data['preview'])) {
            $relativePath = $this->saveImage($data['preview']);
            $data['preview'] = $relativePath;

            // If there is an old preview, delete it
            if ($product->preview) {
                $absolutePath = public_path($product->preview);
                if (\Illuminate\Support\Facades\File::exists($absolutePath)) {
                    \Illuminate\Support\Facades\File::delete($absolutePath);
                }
            }
        }

        $user = User::find($data['user_id']);
        if (!$user) {
            return response()->json([
                'status' => 'error',
                'message' => 'No user found'
            ], 404);
        }

        $category = Category::where('name', $data['category_id'])->first();

        if (!$category) {
            return response()->json([
                'status' => 'error',
                'message' => 'No category found'
            ], 404);
        }

        $product->update([
            'preview' => $data['preview'],
            'name' => $data['name'],
            'description' => $data['description'],
            'retail_price' => $data['retail_price'],
            'market_price' => $data['market_price'],
            'category_id' => $category->id,
            'user_id' => $data['user_id'],
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Product updated successfully',
            'product' => $product
        ]);
    }


    /**
     * Retrieve a specific product for editing.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                'status' => 'error',
                'message' => 'No product found'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'product' => $product
        ]);
    }

    /**
     * Delete a specific product.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                'status' => 404,
                'message' => 'No product found'
            ], 404);
        }

        $product->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Product deleted successfully',
        ], 200);
    }

    public function index()
    {
        $product = Product::all();
        if ($product->count() > 0) {
            return response()->json([
                'status' => 200,
                'product' => $product
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'no records found'
            ], 404);
        }
    }

    private function saveImage($image)
    {
        if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
            $image = substr($image, strpos($image, ',') + 1);
            $type = strtolower($type[1]);

            if (!in_array($type, ['jpg', 'jpeg', 'gif', 'png', 'webp'])) {
                throw new \Exception('Invalid image type. Only JPG, JPEG, GIF, and PNG are supported.');
            }

            $image = str_replace(' ', '+', $image);
            $image = base64_decode($image);

            if ($image === false) {
                throw new \Exception('Failed to decode base64 image data.');
            }
        } else {
            throw new \Exception('The provided URL does not match the expected format for an image data URL.');
        }

        $dir = '../../front/src/layouts/Universal/images/';
        $file = \Illuminate\Support\Str::random() . '.' . $type;
        $absolutePath = public_path($dir);
        $relativePath = $dir . $file;

        if (!\Illuminate\Support\Facades\File::exists($absolutePath)) {
            \Illuminate\Support\Facades\File::makeDirectory($absolutePath, 0755, true);
        }

        file_put_contents($relativePath, $image);

        return $relativePath;
    }

    public function count()
    {
        $count = Product::all()->count();
        return response()->json(['count' => $count]);
    }
}
