import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import useAuthCalls from "../services/useAuthCalls";

// - YUP
export const registerSchema = () =>
  object({
    username: string()
      .required("please enter a username")
      .max(20, "username must be less than 10 characters"),
    firstName: string()
      .required("please enter a first name")
      .max(20, "name must be less than 20 characters"),
    lastName: string()
      .required("please enter a last name")
      .max(30, "lastname must be less than 30 characters"),
    email: string().email().required("please enter a mail"),
    password: string()
      .required("password must contain at least 8 character")
      .min(8, "the password should not be more than 16 characters long")
      .matches(/\d+/, "password must contain at least 1 number")
      .matches(/[a-z]/, "password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "password must contain at least one uppercase letter")
      .matches(
        /[@$!%*?&]/,
        "the password must include at least one special character from @$!%?&"
      ),
  });

const RegisterForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  return (
    <>

          <div className="mt-10">
            <Form>
              <div>
                {/* username input */}
                <div className="flex flex-col mb-5">
                  <label
                    htmlFor="firstName"
                    className="mb-1 text-xs tracking-wide text-gray-600 dark:text-gray-300"
                  >
                    Username:
                  </label>
                  <div className="relative">
                    <input
                      id="username"
                      type="text"
                      name="username"
                      className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 dark:bg-gray-600 dark:text-white dark:border-gray-500"
                      placeholder="Enter your first name"
                      //- formik
                      value={values.username}
                      onChange={handleChange}
                      // MUI ye ait alt taraf
                      // error={touched.email && Boolean(errors.email)}
                      // helperText={errors.email}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.username && errors.username && (
                    <div className="error-message text-red-500 text-xs font-light ">
                      {errors.username}
                    </div>
                  )}
                </div>
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
                      // - formik
                      value={values.firstName}
                      onChange={handleChange}
                      // MUI ye ait alt taraf
                      // error={touched.email && Boolean(errors.email)}
                      // helperText={errors.email}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.firstName && errors.firstName && (
                    <div className="error-message text-red-500 text-xs font-light ">
                      {errors.firstName}
                    </div>
                  )}
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
                      // - formik
                      value={values.lastName}
                      onChange={handleChange}
                      // MUI ye ait alt taraf
                      // error={touched.email && Boolean(errors.email)}
                      // helperText={errors.email}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.lastName && errors.lastName && (
                    <div className="error-message text-red-500 text-xs font-light ">
                      {errors.lastName}
                    </div>
                  )}
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
                      // - formik
                      value={values.email}
                      onChange={handleChange}
                      // MUI ye ait alt taraf
                      // error={touched.email && Boolean(errors.email)}
                      // helperText={errors.email}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.email && errors.email && (
                    <div className="error-message text-red-500 text-xs font-light ">
                      {errors.email}
                    </div>
                  )}
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
                      //- formik
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.password && errors.password && (
                    <div className="error-message text-red-500 text-xs font-light">
                      {errors.password}
                    </div>
                  )}
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
              </div>
            </Form>
          </div>
      
    </>
  );
};

export default RegisterForm;
