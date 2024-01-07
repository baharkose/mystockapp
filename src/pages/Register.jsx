import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../features/authSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { object, string, number, date, InferType } from "yup";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // - YUP
  let registerSchema = () =>
    object({
      username: string().required("please enter a username"),
      firstName: string().required("please enter a first name"),
      lastName: string().required("please enter a last name"),
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
    const { username, email, password, firstName, lastName } = info;
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
            <Formik
              initialValues={{
                username: "",
                firstName: "",
                lastName: "",
                email: "",
                password: "",
              }}
              validationSchema={registerSchema}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                resetForm();
                setSubmitting();
                // - buraya register gelicek slicedan
                dispatch(register({ values, navigate }));
              }}
            >
              {({
                handleChange,
                values,
                touched,
                errors,
                handleBlur,
                handleSubmit,
              }) => (
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
              )}
            </Formik>
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
