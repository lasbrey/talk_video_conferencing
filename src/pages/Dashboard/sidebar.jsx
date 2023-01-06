import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import routes from "./routes/sidebar";
import Nav from "../navigation/navigation";

function Sidebar() {
  const location = useLocation();
  const pathName = location.pathname;
  const routeLists = routes.map((route, i) => (
    <li key={i}>
      <Link
        to={route.path}
        className={`flex  items-center p-2 text-base font-normal  hover:bg-blue-200 rounded-lg ${
          pathName === route.path ? "bg-blue-500 text-white" : ""
        }`}
      >
        <span className="ml-3">{route.name}</span>
      </Link>
    </li>
  ));
  return (
    <div>
      <div className=" fixed lg:relative md:relative lg:flex hidden">
        <aside className="w-72 h-screen " aria-label="Sidebar">
          <div className="px-6 py-4 overflow-y-auto rounded h-full bg-[#f7f9fa]">
            <ul className="space-y-2 text-gray-900">{routeLists}</ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Sidebar;
