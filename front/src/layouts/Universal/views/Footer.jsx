import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Shortcuts
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <Link to="/home" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/aboutus" className=" hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/ourlocations" className="hover:underline">
                  Our Locations
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/myorders" className="hover:underline">
                  My Orders
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Contact us
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  Discord Server
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  Twitter
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  Facebook
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Contact us
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">Rruga Mulla Idrizi, Gjilan 60000</li>
              <li className="mb-4">info@gmail.com</li>
              <li className="mb-4">+383 44-265-568</li>
            </ul>
          </div>
          <div className="text-6xl flex flex-col items-center justify-center font-bold">
            Prese
          </div>
        </div>
        <div className="bg-transparent px-4 py-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 <Link to="https://flowbite.com/">Prese™</Link>. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
