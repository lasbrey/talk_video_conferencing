import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const pathName = location.pathname;
  const authText = pathName === "/login" ? (
    <Link to="/register">
      New to Talk?
      <span className="ml-1 text-blue-500">Sign up</span>
    </Link>
  ) : (
    <Link to="/login">
      Already have an account?
      <span className="ml-1 text-blue-500">Sign in</span>
    </Link>
  );
  

  return (
    <header className="py-5 shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link to={"/"} className="text-blue-500 text-4xl">
              🆃🅰🅻🅺
            </Link>
          </div>
          <div className="flex items-center gap-x-1 md:gap-x-4">
            <div>
              {/* <Link  to={pathName === "/login" ? "/register" : "/login"}>
                {pathName === "/login"
                  ? "New to Talk? Sign up"
                  : "Already have an account? Sign in"}
              </Link> */}
              {authText}
            </div>
            <div>
              <Link to={"/"} className="text-blue-500">
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
