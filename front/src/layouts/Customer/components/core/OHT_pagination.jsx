import React from "react";
import { Link } from "react-router-dom";

export default function MOTable_pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      className="flex items-center justify-between p-1 bg-white"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500">
        Showing{" "}
        <span className="font-semibold text-gray-900">{currentPage}</span> of{" "}
        <span className="font-semibold text-gray-900">{totalPages}</span>
      </span>
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <Link
            to={`?page=${currentPage - 1}`}
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className={`block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <Link
              to={`?page=${page}`}
              onClick={() => handlePageChange(page)}
              className={`z-10 px-3 py-2 leading-tight ${
                currentPage === page
                  ? "text-red-600 border border-red-300 bg-red-50 hover:bg-red-100 hover:text-red-700"
                  : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              {page}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to={`?page=${currentPage + 1}`}
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className={`block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
