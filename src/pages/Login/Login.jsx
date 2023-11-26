/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import loginImg from "../../../public/assets/images/login/login-bg.jpeg";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  // const [user, setUser] = useState(null)
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { user, loading, createUser, signIn, googleSignIn } = useContext(AuthContext);

  // load captcha engine on component mount
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((result) => {
        // User is signed in
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data); // user created
          // Toast Showing
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "You are logged in successfully!",
          });
          navigate("/");
        });
      })
      .catch((error) => {
        // Handle errors here
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log('login e tip porse mama')
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You are logged in successfully!",
      });
      navigate("/");
    });
  };

  // validate captcha
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) === true) {
      setDisabled(false);
      console.log("captcha validated");
    } else {
      setDisabled(true);
      console.log("captcha not validated");
    }
  };

  return (
    <div>
      <Helmet>
        <title>Rezilla - Welcome to Rezilla Login</title>
      </Helmet>
      {/* login */}

      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-10 md:px-8">
          <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
            <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-3xl lg:leading-tight dark:text-gray-200">
              <span className="text-[#153E3D] dark:text-blue-500">Rezilla</span>{" "}
              is here to help. Buy or sell your property with us.
            </h1>
            <p className="mt-3 text-base text-gray-500">
              Rezilla is selling happiness in the form of property. We are here to
              help you to find the best property for you.
            </p>

            <form onSubmit={handleLogin}>
              <div className="mt-8 grid">
                <button
                  onClick={handleGoogleSignIn}
                  type="button"
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <svg
                    className="w-4 h-auto"
                    width="46"
                    height="47"
                    viewBox="0 0 46 47"
                    fill="none"
                  >
                    <path
                      d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                      fill="#34A853"
                    />
                    <path
                      d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                      fill="#EB4335"
                    />
                  </svg>
                  Sign up with Google
                </button>
              </div>

              <div className="py-6 flex items-center text-sm text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:me-6 after:flex-[1_1_0%] after:border-t after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                Or
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium dark:text-white">
                  <span className="text-black ml-4">Email address</span>
                </label>
                <input
                  type="email"
                  id="hs-hero-email-2"
                  name="email"
                  className="py-3 px-4 block w-full border-gray-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium dark:text-white">
                  <span className="text-black ml-4">Password</span>
                </label>
                <input
                  type="password"
                  id="hs-hero-password-2"
                  name="password"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Enter your password"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium dark:text-white">
                  <span className="text-black ml-4">Captcha</span>
                </label>
                <LoadCanvasTemplate />
                <input
                  type="text"
                  ref={captchaRef}
                  id="hs-hero-password-2"
                  name="captcha"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Enter the captcha code above"
                />
                <button
                  onClick={handleValidateCaptcha}
                  type="button"
                  className=" mt-2 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Validate
                </button>
              </div>

              <div className="grid">
                <button
                  disabled={disabled}
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#153E3D] text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Sign up
                </button>
              </div>
            </form>
            <p className="mt-3 text-base text-gray-500">
              <Link to="/sign-up">
                Don't have an account?{" "}
                <a className="text-[#153E3D] decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Sign up
                </a>
              </Link>
            </p>
          </div>
        </div>

        <div
          className="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-full bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${loginImg})` }}
        ></div>
      </div>
    </div>
  );
};

export default Login;