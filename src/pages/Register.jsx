import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Dispatch } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { object, string, number, date, InferType } from "yup";
import useAuthCalls from "../services/useAuthCalls";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  const { register } = useAuthCalls();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
              onSubmit={(values, acitons) => {
                register(values);
                acitons.resetForm();
                acitons.setSubmitting(false);
              }}
              // formik ve yup işlemlerini daha modüler hale getirebilmek için form elementlerini ayrı bir component içerisinde tanımlayabiliriz. Bunun için formikin component bileşeni vardır. Bizim belirlediğimiz initial value ve diğer elemanları destruct edip props geçip kullanabiliriz. -> registerForm
              component={(props) => <RegisterForm {...props} />}
            ></Formik>
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
