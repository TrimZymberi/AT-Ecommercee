import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../../api/axios";
import { useStateContext } from "../../../contexts/ContextProvider";
import Swal from "sweetalert2";
import CategoryLoadingSkeleton from "./core/CategoryLoading_skeleton";
import CategorySubmittingSkeleton from "./core/CategorySubmitting_skeleton";

const CategoryEdit = () => {
  const { currentUser } = useStateContext();
  let { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [inputErrorList, setInputErrorList] = useState({});
  const [category, setCategory] = useState({
    name: "",
    user_id: "",
  });

  useEffect(() => {
    axiosClient
      .get(`category/${id}/edit`)
      .then((res) => {
        console.log(res.data);
        setCategory(res.data.category);
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

  const handleInput = (event) => {
    event.persist();
    setCategory({ ...category, [event.target.name]: event.target.value });
  };

  const updateCategory = (event) => {
    event.preventDefault();
    setSubmitting(true);
    const data = {
      name: category.name,
      user_id: category.user_id,
    };

    axiosClient
      .put(`/category/${id}`, data)
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

  if (Object.keys(category).length === 0) {
    return (
      <div className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20">
        <h4 className="fw-bold text-center">No such Category Id Found</h4>
      </div>
    );
  }

  if (submitting) {
    return <CategorySubmittingSkeleton />;
  }

  if (loading) {
    return <CategoryLoadingSkeleton />;
  }

  return (
    <div>
      {" "}
      <title>Prese | Category Edit</title>
      <section className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center mb-6 text-4xl font-semibold text-gray-900">
            Administrator Tools
          </div>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Edit Category
              </h1>
              <form
                onSubmit={(event) =>
                  updateCategory(event, currentUser ? currentUser.id : "")
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
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Category name
                  </label>
                  <input
                    type="text"
                    value={category.name}
                    onChange={handleInput}
                    name="name"
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>
                <div className="p-1">
                  <span className="text-red">{inputErrorList.name}</span>
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

export default CategoryEdit;
