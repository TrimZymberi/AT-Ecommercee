import React, { useState } from "react";
import axiosClient from "../../../api/axios";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //   const subscribe = async () => {
  //     try {
  //       await axiosClient.post("/api/subscribe", { email });
  //       setMessage("Subscription successful");
  //     } catch (error) {
  //       setMessage("Subscription failed");
  //     }
  //   };

  return (
    <section className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          Crazy offers you might miss!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
          Here at Prese we try to always give happiness to the customer we want
          you to be able to know when the best offers are out{" "}
          <span className="underline">sign to our newsletter</span>, and even
          free coupons dropping randomly😉.
        </p>
        <form className="w-full max-w-md mx-auto">
          <label
            htmlFor="default-email"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Email sign-up
          </label>
          {/* <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="email"
              id="default-email"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-red-500 focus:border-red-500"
              placeholder="Enter your email here..."
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
            />
            <button
              //   onClick={subscribe}
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-redW-300 font-medium rounded-lg text-sm px-4 py-2"
              disabled
            >
              Subscribe
            </button>
          </div> */}
        </form>
      </div>
    </section>
  );
}
