import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/authContext";

function Nav({toggleState}) {
  const { logOut, user } = UserAuth(); // use logOut to sign user out and user to get user info
  const handleSignOut = async () => {
    try {
      await logOut(); // log user out of application
    } catch (error) {
      console.log(error); // log error to console
    }
  };
  const buttons = user
    ? {
        logOut: (
          <Link onClick={handleSignOut} to="/#">
            Logout
          </Link>
        ),
        userPic: (
          <Link to={"/profile"}>
            <button
              type="button"
              class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="w-8 h-8 rounded-full"
                src={user?.photoURL}
                alt="user"
              />
            </button>
          </Link>
        ),
      }
    : {
        login: <Link to="/login">Sign In</Link>,
        contactSales: (
          <Link
            className="group  lg:inline-flex hidden items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 border border-blue-600 bg-transparent text-blue-600 hover:border-0 hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
            to={"/register"}
          >
            <span>Contact Sales</span>
          </Link>
        ),
        getStarted: (
          <Link
            className="group lg:inline-flex hidden items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
            to={"/register"}
          >
            <span>Get Started</span>
          </Link>
        ),
      };

  return (
    <>
      {/* <div className="bg-blue-900">
        <ul className="flex py-2 justify-end text-[14px]">
          <li className="px-3 text-white cursor-pointer hover:text-black">
            Support
          </li>
          <li className="px-3 text-white cursor-pointer hover:text-black">
            Request Demo
          </li>
          <li className="px-3 text-white cursor-pointer hover:text-black">
            Join
          </li>
          <li className="px-3 text-white cursor-pointer hover:text-black">
            Host
          </li>
          <li className="px-3 text-white cursor-pointer hover:text-black">
            {buttons.login}
            {buttons.logOut}
          </li>
        </ul>
      </div> */}
      <header className="py-5">
        <div className=" px-4 sm:px-6 lg:px-8">
          <nav className="relative z-50 flex justify-between">
            <div className="flex items-center md:gap-x-12">
              <div className="mr-1 md:hidden">
                <div data-headlessui-state="">
                  <button
                    className="relative z-10 flex h-8 w-8 items-center justify-center"
                    aria-label="Toggle Navigation"
                    id="headlessui-popover-button-:R1p6:"
                    type="button"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    <svg
                      aria-hidden="true"
                      class="h-3.5 w-3.5 overflow-visible stroke-slate-700"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path
                        d="M0 1H14M0 7H14M0 13H14"
                        class="origin-center transition"
                      ></path>
                      <path
                        d="M2 2L12 12M12 2L2 12"
                        class="origin-center transition scale-90 opacity-0"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <Link to={"/"} className="text-blue-500 text-4xl">
                🆃🅰🅻🅺
              </Link>
              {/* <div className="hidden md:flex md:gap-x-6">
                <a
                  className="inline-block font-bold rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  href="/#features"
                >
                  Products
                </a>
                <a
                  className="inline-block font-bold rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  href="/#testimonials"
                >
                  Resources
                </a>
                <a
                  className="inline-block font-bold rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  href="/#pricing"
                >
                 Plans & Pricing
                </a>
              </div> */}
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-8">
              {buttons.contactSales}
              {buttons.getStarted}
              {buttons.userPic}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Nav;
