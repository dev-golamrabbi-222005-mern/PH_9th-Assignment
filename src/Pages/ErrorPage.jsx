import React from "react";
import errorPage from "../assets/error-404-D5a2U_1Y.png";
import { useNavigate } from "react-router";
import { BiLeftArrow } from "react-icons/bi";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col">
        <img src={errorPage} className="w-3/4 mx-auto" alt="" />
        <div className="text-center">
          <h1 className="text-5xl mt-5 mb-4 font-semibold">
            Oops!! Page Not Found!
          </h1>
          <p className="my-5 text-gray-500 font-semibold">
            The page you are looking for is not available.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] border-none"
          >
            <BiLeftArrow />
            Go Back!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
