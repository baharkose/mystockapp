import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { object, string, number, date, InferType } from "yup";
import { useDispatch } from "react-redux";
import authSlice from "../features/authSlice";
import { login } from "../features/authSlice";
// - Slicemızı loginde çağırıyoruz.

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // - yup form işlemleri
  let loginSchema = () =>
    object({
      email: string().required("please enter an email"),
      password: string()
        .required("please enter a password")
        .min(8, "the password should not be at least 8 characters long")

        .max(16, "the password should not be more than 16 characters long")
        .matches(/\d+/, "password must contain at least 1 number")
        .matches(/[a-z]/, "password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "password must contain at least one uppercase letter")
        .matches(
          /[@$!%*?&]/,
          "the password must include at least one special character from @$!%?&"
        ),
    });

  // const [info, setInfo] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   setInfo({ ...info, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { email, password } = info;
  // };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center login  bg-gray-100">
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
            Sign In
          </div>
          <div className="mt-4 self-center text-xl sm:text-sm text-gray-800 dark:text-gray-300">
            Enter your credentials to get access account
          </div>

          <div className="mt-10">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                // - TODO
                //? reset, toast, login, global alana veri kaydı - reset ve submit işlemleri hariç kalını kendi yazdığımız hook ile gerçekleştireceğiz.

                dispatch(login({ values, navigate }));
                resetForm();
                setSubmitting(false);
                //- eğer işlemleri thunk ile yapıcaksak o zaman ekstra hooka bir gerek yok zaten thunk bütün işlemleri tek bir yerden yönetebiliyor.
                //!  form işlemlerimizi tamamladıktan sonra sliceımız tanımlayalım
              }}
            >
              {/* //- formiğin içerisine kendi kütüphanesinde yer alan 1 form ekliyoruz. {()=>{}} içerisine form yazıyoruz. ve form elemenlerimizi içeriisne aktarıyoruz. hangi fonksiyonlara ihityacımız varsa onları parametre olarak alıyoruz. */}

              {({
                handleChange,
                values,
                touched,
                errors,
                handleBlur,
                handleSubmit,
              }) => (
                <Form>
                  {/* <form action="#" onSubmit={handleSubmit}> */}
                  <div>
                    <div className="flex flex-col mb-5">
                      <label
                        htmlFor="email"
                        className="mb-1 text-xs tracking-wide text-gray-600 dark:text-gray-300"
                      >
                        E-Mail Address:
                      </label>
                      <div className="relative">
                        <div
                          className="
                      inline-flex
                      items-center
                      justify-center
                      absolute
                      left-0
                      top-0
                      h-full
                      w-10
                      text-gray-400
                    "
                        >
                          <i className="fas fa-at text-blue-500" />
                        </div>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          className="
                      text-sm
                      placeholder-gray-500
                      pl-10
                      pr-4
                      rounded-2xl
                      border border-gray-400
                      w-full
                      py-2
                      focus:outline-none focus:border-blue-400
                      dark:bg-gray-600 dark:text-white dark:border-gray-500
                    "
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
                    <div className="flex flex-col mb-6">
                      <label
                        htmlFor="password"
                        className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 dark:text-gray-300"
                      >
                        Password:
                      </label>
                      <div className="relative">
                        <div
                          className="
                      inline-flex
                      items-center
                      justify-center
                      absolute
                      left-0
                      top-0
                      h-full
                      w-10
                      text-gray-400
                    "
                        >
                          <span>
                            <i className="fas fa-lock text-blue-500" />
                          </span>
                        </div>
                        <input
                          id="password"
                          type="password"
                          name="password"
                          className="
                      text-sm
                      placeholder-gray-500
                      pl-10
                      pr-4
                      rounded-2xl
                      border border-gray-400
                      w-full
                      py-2
                      focus:outline-none focus:border-blue-400
                      dark:bg-gray-600 dark:text-white dark:border-gray-500
                    "
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
                    <div className="flex w-full">
                      <button
                        type="submit"
                        className="
                    flex
                    mt-2
                    items-center
                    justify-center
                    focus:outline-none
                    text-white text-sm
                    sm:text-base
                    bg-blue-500
                    hover:bg-blue-600
                    rounded-2xl
                    py-2
                    w-full
                    transition
                    duration-150
                    ease-in
                    dark:hover:bg-blue-700
                  "
                      >
                        <span className="mr-2 uppercase">Sign In</span>
                        <span>
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="mt-4 text-center">
                      <Link
                        to="/forgot-password"
                        className="text-xs text-blue-500 dark:text-blue-400 font-semibold"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <Link
            to="/register"
            className="text-xs ml-2 text-blue-500 dark:text-blue-400 font-semibold"
          >
            Don't have an account? Register here
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
