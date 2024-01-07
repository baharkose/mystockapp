import React, { useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, firstName, lastName } = info;
    const displayName = `${firstName} ${lastName}`;
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 login">
        <div
          className="
            flex flex-col
            bg-white dark:bg-gray-700
            shadow-md
            px-4 sm:px-6 md:px-8 lg:px-10
            py-8
            rounded-3xl
            w-50 max-w-md
          "
        >
          <div className="font-medium self-center text-xl sm:text-3xl text-gray-800 dark:text-white">
            Join us Now
          </div>
          <div className="mt-4 self-center text-xl sm:text-sm text-gray-800 dark:text-gray-300">
            Enter your credentials to create an account
          </div>

          <div className="mt-10">
            <form onSubmit={handleSubmit}>
              {/* First Name Input */}
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="firstName"
                  className="mb-1 text-xs tracking-wide text-gray-600 dark:text-gray-300"
                >
                  First Name:
                </label>
                <div className="relative">
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 dark:bg-gray-600 dark:text-white dark:border-gray-500"
                    placeholder="Enter your first name"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Last Name Input */}
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="lastName"
                  className="mb-1 text-xs tracking-wide text-gray-600 dark:text-gray-300"
                >
                  Last Name:
                </label>
                <div className="relative">
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 dark:bg-gray-600 dark:text-white dark:border-gray-500"
                    placeholder="Enter your last name"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="email"
                  className="mb-1 text-xs tracking-wide text-gray-600 dark:text-gray-300"
                >
                  E-Mail Address:
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 dark:bg-gray-600 dark:text-white dark:border-gray-500"
                    placeholder="Enter your email"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 dark:text-gray-300"
                >
                  Password:
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 dark:bg-gray-600 dark:text-white dark:border-gray-500"
                    placeholder="Enter your password"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex w-full">
                <button
                  type="submit"
                  className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in dark:hover:bg-blue-700"
                >
                  <span className="mr-2 uppercase">Sign Up</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <Link
            to="/login"
            className="text-xs ml-2 text-blue-500 dark:text-blue-400 font-semibold"
          >
            Already have an account? Login here
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
