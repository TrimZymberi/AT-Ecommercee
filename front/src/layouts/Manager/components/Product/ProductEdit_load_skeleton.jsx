import { Fragment } from "react";

export default function ProductEditLoadingSkeleton() {
  return (
    <Fragment>
      <section className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-20">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 opacity-80">
          <div className="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-white">
            Administrator Tools
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center dark:text-white">
                Add Product
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="preview"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product preview
                  </label>
                  <input
                    type="file"
                    name="preview"
                    id="preview"
                    className="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4.5"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Product name"
                    required=""
                  />
                </div>
                <div className="form-group  mb-2">
                  <label
                    htmlFor="Description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Preview Description
                  </label>
                  <textarea
                    name="description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Product Description"
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="category_id"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product category
                  </label>
                  <select
                    name="category_id"
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4.5"
                  >
                    <option disabled selected>
                      Choose a category
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="retail_price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Retail Price
                  </label>
                  <input
                    type="number"
                    name="retail_price"
                    id="retail_price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Market Price"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="market_price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Market Price
                  </label>
                  <input
                    type="number"
                    name="market_price"
                    id="market_price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Retail Price"
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div
        role="status"
        className="opacity-100 absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
      >
        <svg
          aria-hidden="true"
          className="opacity-100 w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
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
        <span className="sr-only">Loading...</span>
      </div>
    </Fragment>
  );
}
