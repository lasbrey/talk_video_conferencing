import React, { useEffect } from "react";
import Nav from "./nav";
import { UserAuth } from "../../context/authContext";

import { useNavigate } from "react-router-dom";

function Signup() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/meeting");
    }
  }, [user]);
  return (
    <>
      <Nav />
      <div>
        <section className="h-screen flex items-center justify-center">
          <div>
          <div className="lg:grid grid-cols-2 gap-x-4 p-8 lg:p-0">
              <div className="w-full justify-center items-center lg:flex hidden">
                <div className=" ">
                  <img
                    src="https://st1.zoom.us/fe-static/fe-signup-login-active/img/banner-step-1.2faf107a.png"
                    className="w-full max-w-[80%] mx-auto"
                    alt="Phone"
                  />
                  <div className="">
                    <p className="text-2xl font-bold ">
                      Create your free Basic account
                    </p>
                    <ul>
                      <li>Meetings with up to 100 participants</li>
                      <li>
                        Unlimited number of meetings up to 40 minutes each
                      </li>
                      <li>Join from mobile, desktop, and your favorite apps</li>
                      <li>Team chat for collaboration out of meetings</li>
                      <li>Secure, HD quality audio and video</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:w-6/12 lg:ml-20">
                <div className="text-center text-3xl font-extrabold mb-3">
                  <p>Lets's Get Started</p>
                </div>
                <form>
                  {/*  Email input */}
                  <div className="mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Email address"
                    />
                  </div>

                  {/* Password input
                  <div className="mb-6">
                    <input
                      type="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Password"
                    />
                  </div> */}

                  {/*  Submit button */}
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Sign Up
                  </button>
                  <div className="mt-4 text-sm">
                    <p>
                      By signing up, I agree to the Talk's{" "}
                      <span className="text-blue-500"> Privacy Statement</span>{" "}
                      and{" "}
                      <span className="text-blue-500">Terms of Service.</span>
                    </p>
                  </div>

                  <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p className="text-center mx-4 mb-0 text-gray-500 text-sm">
                      Or sign up with
                    </p>
                  </div>

                  <a
                    className="bg-[#3b5998] px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded-md shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                    href="#!"
                    role="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    {/*  Facebook */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="w-3.5 h-3.5 mr-2"
                    >
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      />
                    </svg>
                    Continue with Facebook
                  </a>
                  <p
                    className="bg-[#fff] px-7 py-3 text-black font-medium text-sm leading-snug uppercase rounded-md shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                    onClick={handleGoogleSignIn}
                    role="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    {/*  Twitter */}
                    <img
                      src="https://freesvg.org/img/1534129544.png"
                      alt=""
                      className="w-3.5 h-3.5 mr-2"
                    />
                    Continue with Google
                  </p>
                  <div className="mt-4 text-sm">
                    <p>
                      Talk is protected by reCAPTCHA and the Google{" "}
                      <span className="text-blue-500">Privacy Policy</span> and{" "}
                      <span className="text-blue-500">Terms of Service</span>{" "}
                      apply.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Signup;