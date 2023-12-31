import React, { useState, useEffect } from "react";
import axiosClient from "../../../api/axios";
import { useStateContext } from "../../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function CategoryRegister() {
  const { currentUser } = useStateContext();
  const navigate = useNavigate();
  const [inputErrorList, setInputErrorList] = useState({});
  const [category, setCategory] = useState({
    name: "",
    user_id: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setCategory({ ...category, user_id: currentUser.id });
    }
  }, [currentUser]);

  const handleInput = (event) => {
    event.persist();
    setCategory({ ...category, [event.target.name]: event.target.value });
  };

  const addCategory = (event) => {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData();
    formData.append("name", category.name);
    formData.append("user_id", category.user_id);

    axiosClient
      .post(`category`, formData)
      .then((res) => {
        Swal.fire({
          icon: "success",
          text: res.data.message,
        }).then(() => {
          navigate("../categorylist");
        });
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.status === 422) {
            setInputErrorList(error.response.data.errors);
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

  if (submitting) {
    return (
      <div>
        <title>Prese | Category Register</title>
        <section className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 opacity-80">
            <div className="flex items-center mb-6 text-4xl font-semibold text-gray-900">
              Administrator Tools
            </div>
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Add Category
                </h1>
                <form
                  onSubmit={(event) =>
                    addCategory(event, currentUser ? currentUser.id : "")
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
                      for="category"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Category name
                    </label>
                    <input
                      type="category"
                      value={category.name}
                      onChange={handleInput}
                      name="name"
                      id="category"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Category"
                      required=""
                    />
                    <div className="mt-1">
                      <span className="text-red-500">
                        {inputErrorList.name}
                      </span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Create
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div
            role="status"
            class="opacity-100 absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
          >
            <svg
              aria-hidden="true"
              class="opacity-100 w-8 h-8 mr-2 text-gray-200 animate-spin fill-red-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {" "}
      <title>Prese | Category Register</title>
      <section className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center mb-6 text-4xl font-semibold text-gray-900">
            Administrator Tools
          </div>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Add Category
              </h1>
              <form
                onSubmit={(event) =>
                  addCategory(event, currentUser ? currentUser.id : "")
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
                    for="category"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Category name
                  </label>
                  <input
                    type="category"
                    value={category.name}
                    onChange={handleInput}
                    name="name"
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Category"
                    required=""
                  />
                  <div className="mt-1">
                    <span className="text-red-500">{inputErrorList.name}</span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
