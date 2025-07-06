import React from "react";
import { useRouteError } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6">
      <h1 className="text-6xl font-bold mb-4">Oops!</h1>
      <p className="text-2xl mb-2">Something went wrong.</p>
      <p className="text-gray-400 mb-6 text-center">
        {error.statusText || error.data || "Page not found."}
      </p>

      <NavLink
        to="/"
        className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full border border-gray-500 transition-all"
      >
        <FaLongArrowAltLeft /> Go Back Home
      </NavLink>
    </div>
  );
};

export default ErrorPage;
