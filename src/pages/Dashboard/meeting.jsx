import React from "react";
import Nav from "../navigation/navigation.jsx";
import Sidebar from "./sidebar.jsx";
import { UserAuth } from "../../context/authContext";


function meeting() {
  const { user } = UserAuth();
  return (
    <div>
      <Nav />
      <div className="flex gap-2">
        <Sidebar />
        <div className="">
          <p className="text-4xl font-bold lg:mx-10 mx-0">Meetings</p>

          <div className="lg:mx-10 lg:mt-10">
            <div className="lg:max-w-2xl">
              <p className="text-2xl font-bold">Welcome to Task Meetings! {user?.displayName}</p>
              <p>
                We re-engineered the service that we built for secure business
                meetings, Task workspace, to make it free and available for all.
              </p>
              <div className="flex gap-2 mt-5">
                <div>
                  <a
                    className="group inline-flex items-center justify-center rounded-full py-4 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 border border-blue-600 bg-transparent text-blue-600 hover:border-0 hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
                    href="/register"
                  >
                    <span>Start Meeting</span>
                  </a>
                </div>
                <div>
                  <a
                    className="group inline-flex items-center justify-center rounded-full py-4 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
                    href="/register"
                  >
                    <span>Join Meeting</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default meeting;
