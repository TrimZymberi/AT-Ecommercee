import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../../api/axios";
import { useStateContext } from "../../../contexts/ContextProvider";
import Swal from "sweetalert2";
import ProductLoadingSkeleton from "./core/ProductLoading_skeleton";
import ProductSubmittingSkeleton from "./core/ProductSubmitting_skeleton";

const ProductEdit = () => {
  const { currentUser } = useStateContext();
  let { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [inputErrorList, setInputErrorList] = useState({});
  const [product, setProduct] = useState({
    preview: "",
    preview_url: "",
    name: "",
    description: "",
    category_id: "",
    retail_price: "",
    market_price: "",
    user_id: "",
  });

  useEffect(() => {
    axiosClient
      .get("namecat")
      .then((res) => {
        if (Array.isArray(res.data.categories)) {
          setCategories(res.data.categories);
        } else {
          console.error("Invalid response format");
        }
      })
      .catch((error) => {
        console.error("Failed to fetch categories", error);
      });
  }, []);

  useEffect(() => {
    axiosClient
      .get(`product/${id}/edit`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data.product);
        setLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.status === 404) {
            alert(error.response.data.message);
          }
          if (error.response.status === 500) {
            alert(error.response.data);
          }
        }
      });
  }, [id]);

  useEffect(() => {
    if (currentUser) {
      setProduct({ ...product, user_id: currentUser.id });
    }
  }, [currentUser]);

  const handleInput = (event) => {
    event.persist();
    console.log("Input name:", event.target.name);
    console.log("Input value:", event.target.value);

    if (event.target.name === "preview") {
      onImageChoose(event);
    } else if (event.target.name === "category_id") {
      console.log("Category ID:", event.target.value);
      setProduct({ ...product, category_id: event.target.value });
    } else {
      console.log("Other input value:", event.target.value);
      setProduct({ ...product, [event.target.name]: event.target.value });
    }
  };

  const updateProduct = (event) => {
    event.preventDefault();
    setSubmitting(true);

    const payload = { ...product };
    if (payload.preview) {
      payload.preview = payload.preview_url;
    }
    delete payload.preview_url;

    axiosClient
      .put(`/product/${id}`, payload)
      .then((res) => {
        Swal.fire({
          icon: "success",
          text: res.data.message,
        }).then(() => {
          navigate("../productlist");
        });
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.status === 422) {
            setInputErrorList(error.response.data.errors);
          }
          if (error.response.status === 404) {
            alert(error.response.data.message);
          }
          if (error.response.status === 500) {
            alert(error.response.data);
          }
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const onImageChoose = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setProduct({
        ...product,
        preview: file,
        preview_url: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  if (Object.keys(product).length === 0) {
    return (
      <div className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20">
        <h4 className="fw-bold text-center">No such product found</h4>
      </div>
    );
  }

  if (submitting) {
    return <ProductSubmittingSkeleton />;
  }

  if (loading) {
    return <ProductLoadingSkeleton />;
  }

  return (
    <div>
      <title>Prese | Product Edit</title>
      <section className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-20">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center mb-6 text-4xl font-semibold text-gray-900">
            Administrator Tools
          </div>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                Add Product
              </h1>
              <form
                onSubmit={(event) =>
                  updateProduct(event, currentUser ? currentUser.id : "")
                }
                className="space-y-4 md:space-y-6"
              >
                <input
                  type="hidden"
                  name="user_id"
                  value={currentUser ? currentUser.id : ""}
                />
                <div>
                  <label
                    htmlFor="preview"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Product preview
                  </label>
                  <input
                    type="file"
                    onChange={onImageChoose}
                    name="preview"
                    id="preview"
                    className="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4.5"
                  />
                  {inputErrorList.preview && (
                    <p className="text-red-500 text-sm mt-1">
                      {inputErrorList.preview}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Product name
                  </label>
                  <input
                    type="text"
                    value={product.name}
                    onChange={handleInput}
                    name="name"
                    id="name"
                    className={`bg-gray-50 border ${
                      inputErrorList.name ? "border-red-500" : "border-gray-300"
                    } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                    placeholder="Product name"
                  />
                  {inputErrorList.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {inputErrorList.name}
                    </p>
                  )}
                </div>
                <div className="form-group  mb-2">
                  <label
                    htmlFor="Description"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Preview Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Product Description"
                    value={product.description}
                    onChange={handleInput}
                  ></textarea>
                  <div className="mt-1">
                    <span className="text-red-500 text-sm mt-1">
                      {inputErrorList.description}
                    </span>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="category_id"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Product category
                  </label>
                  <select
                    onChange={handleInput}
                    name="category_id"
                    id="category_id"
                    className="bg-gray-50 border border-gray-300 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4.5"
                  >
                    <option value={product.category_id} disabled selected>
                      Select a Category
                    </option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  {inputErrorList.category && (
                    <p className="text-red-500 text-sm mt-1">
                      {inputErrorList.category}
                    </p>
                  )}
                </div>
                <div className="mt-1">
                  <span className="text-red-500 text-sm">
                    {inputErrorList.category}
                  </span>
                </div>
                <div>
                  <label
                    htmlFor="retail_price"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Retail Price
                  </label>
                  <input
                    type="number"
                    value={product.retail_price}
                    onChange={handleInput}
                    name="retail_price"
                    id="retail_price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Retail Price"
                  />
                  <div className="mt-1">
                    <span className="text-red-500 text-sm">
                      {inputErrorList.retail_price}
                    </span>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="market_price"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Market Price
                  </label>
                  <input
                    type="number"
                    value={product.market_price}
                    onChange={handleInput}
                    name="market_price"
                    id="market_price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Market Price"
                  />
                  <div className="mt-1">
                    <span className="text-red-500 text-sm">
                      {inputErrorList.market_price}
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductEdit;
