import { useState, useEffect, Fragment } from "react";
import axiosClient from "../../../api/axios";
import { useStateContext } from "../../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Input from "./common/Input";
import ErrorMessage from "./common/ErrorMessage";
import Button from "./common/Button";
import SpinnerIcon from "./icons/SpinnerIcon";
import CategoryRegisterSubmitSkeleton from "./Category/CategoryRegister_submit";

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
    return <CategoryRegisterSubmitSkeleton category={category} />;
  }

  return (
    <Fragment>
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
                className="space-y-6 md:space-y-12"
              >
                <input
                  type="hidden"
                  name="user_id"
                  value={currentUser ? currentUser.id : ""}
                />
                <Input
                  htmlFor="category"
                  labelName="Category name"
                  type="text"
                  value={category.name}
                  onChange={handleInput}
                  name="name"
                  id="category"
                >
                  <ErrorMessage>{inputErrorList.name}</ErrorMessage>
                </Input>
                <Button type="submit">Create</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
