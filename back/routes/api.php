<?php

use App\Http\Controllers\AshensoriController;
use App\Http\Controllers\NdertesaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SubscriberController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
// user
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('product', [ProductController::class, 'index']);
Route::post('product', [ProductController::class, 'create']);
Route::put('product/{id}/', [ProductController::class, 'update']);
Route::get('product/{id}/edit', [ProductController::class, 'edit']);
Route::delete('product/{id}/delete', [ProductController::class, 'destroy']);
Route::get('/products', [ProductController::class, 'paginate'])->name('products')->middleware('web');
Route::get('/products/count', [ProductController::class, 'count']);

Route::get('category', [CategoryController::class, 'index']);
Route::post('category', [CategoryController::class, 'create']);
Route::put('category/{id}/', [CategoryController::class, 'update']);
Route::get('category/{id}/edit', [CategoryController::class, 'edit']);
Route::get('category/{id}', [CategoryController::class, 'show']);
Route::delete('category/{id}/delete', [CategoryController::class, 'destroy']);
// used to show categories for input
Route::get('namecat', [CategoryController::class, 'categoryname']);
// paginator
Route::get('/categories', [CategoryController::class, 'paginate'])->name('categories')->middleware('web');

Route::get('driverls', [UserController::class, 'drivername']);
Route::get('/orders', [OrderController::class, 'getOrdersEmployee'])->name('orders')->middleware('web');
Route::get('/allorders', [OrderController::class, 'allOrders'])->name('orders')->middleware('web');
Route::get('/driverorders', [OrderController::class, 'driverOrders'])->name('driverorders')->middleware('web');
Route::get('/customerOrder', [OrderController::class, 'getOrdersbyID'])->name('getOrdersbyID')->middleware('web');
Route::get('/orders/{orderId}/items', [OrderController::class, 'getOrderItems']);
Route::put('/orders/{orderId}', [OrderController::class, 'editOrder']);
Route::put('/driverorders/{orderId}', [OrderController::class, 'driverEditOrder']);
Route::get('ordertrack/{id}', [OrderController::class, 'ordertrack']);
Route::get('/orders/latest', [OrderController::class, 'getLatestOrder']);
Route::get('/orders/deliveredcount', [OrderController::class, 'count']);
Route::get('orders/calculate-totals', [OrderController::class, 'calculateOrderTotals']);
Route::post('/checkout', [OrderController::class, 'createOrder']);

Route::get('user', [UserController::class, 'index']);
Route::post('user', [UserController::class, 'create']);
Route::put('user/{id}/', [UserController::class, 'update']);
Route::put('userprofile/{id}/', [UserController::class, 'updateProfile']);
Route::get('user/{id}/edit', [UserController::class, 'edit']);
Route::delete('user/{id}/delete', [UserController::class, 'destroy']);
Route::get('/users/count', [UserController::class, 'count']);
Route::get('/users/{id}/name', [UserController::class, 'getUserName']);
// Route::post('/subscribe', [SubscriberController::class, 'subscribe']);

Route::post('ndertesa', [NdertesaController::class, 'create']);
Route::put('ndertesa/{id}/', [NdertesaController::class, 'update']);
Route::get('ndertesa/{id}/edit', [NdertesaController::class, 'edit']);
Route::get('ndertesa/{id}', [NdertesaController::class, 'show']);
Route::delete('ndertesa/{id}/delete', [NdertesaController::class, 'destroy']);
Route::get('/ndertesat', [NdertesaController::class, 'paginate'])->name('ndertesat')->middleware('web');

// used to show categories for input
Route::get('namendertesa', [NdertesaController::class, 'ndertesaname']);


Route::post('ashensor', [AshensoriController::class, 'create']);
Route::put('ashensor/{id}/', [AshensoriController::class, 'update']);
Route::get('ashensor/{id}/edit', [AshensoriController::class, 'edit']);
Route::delete('ashensor/{id}/delete', [AshensoriController::class, 'destroy']);
Route::get('/ashensorit', [AshensoriController::class, 'paginateAshensori'])->name('ashensorit')->middleware('web');