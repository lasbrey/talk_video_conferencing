import React from "react";
import Nav from "../navigation/navigation.jsx";
import Sidebar from "./sidebar.jsx";
import { UserAuth } from "../../context/authContext";

function Profile() {
  const { user } = UserAuth();
  const phoneNumber = user.phoneNumber === null ? "Not set" : user.phoneNumber;
  const str = user?.email || [];
  const targetChar = "@";
  const index = str.indexOf(targetChar);
  let firstThree;
  let mailProvider;
  if (index !== -1) {
    firstThree = str.slice(0, 3);
    mailProvider = str.slice(index);
  }
  const email = `${firstThree}****${mailProvider}`;

  return (
    <div>
      <Nav />
      <div className="flex gap-2">
        <Sidebar />
        <div className="lg:mx-10">
          <p className="bg-[#f7f9fa] text-black p-5 rounded text-sm">
            When you join meetings and webinars hosted on Zoom, your profile
            information, including your name and profile picture, may be visible
            to other participants. Your name and email address will also be
            visible to the account owner and host when you join meetings or
            webinars on their account while you’re signed in. The account owner
            and others in the meeting can share this information with apps and
            others.
          </p>
          <div className="mt-5">
            <p className="bg-gray-300 text-black p-2 w-full ">Personal</p>
            <div className="grid grid-cols-4 my-6">
              <div className="col-span-3">
                <div className="grid grid-cols-3 text-gray-500">
                  <div className="">Name</div>
                  <div className="col-span-2">{user?.displayName}</div>
                </div>
              </div>
              <div className="">
                <span className="text-blue-500 text-sm cursor-pointer">
                  Edit
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 my-6">
              <div className="col-span-3">
                <div className="grid grid-cols-3 text-gray-500">
                  <div className="">Phone</div>
                  <div className="col-span-2">{phoneNumber}</div>
                </div>
              </div>
              <div className="">
                <span className="text-blue-500 text-sm cursor-pointer">
                  Add Phone Number
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 my-6">
              <div className="col-span-3">
                <div className="grid grid-cols-3 text-gray-500">
                  <div className="">Language</div>
                  <div className="col-span-2">English</div>
                </div>
              </div>
              <div className="">
                <span className="text-blue-500 text-sm cursor-pointer">
                  Edit
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p className="bg-gray-300 text-black p-2 w-full ">Sign in</p>
            <div className="grid grid-cols-4 my-6">
              <div className="col-span-3">
                <div className="grid grid-cols-3 text-gray-500">
                  <div className="">Email</div>
                  <div className="col-span-2">{email}</div>
                </div>
              </div>
              <div className="">
                <span className="text-blue-500 text-sm cursor-pointer">
                  Edit
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 my-6">
              <div className="col-span-3">
                <div className="grid grid-cols-3 text-gray-500">
                  <div className="">Password</div>
                  <div className="col-span-2">*****</div>
                </div>
              </div>
              <div className="">
                <span className="text-blue-500 text-sm cursor-pointer">
                  Edit
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 my-6">
              <div className="col-span-3">
                <div className="grid grid-cols-3 text-gray-500">
                  <div className="">Two-factor Authentication</div>
                  <div className="col-span-2">Turned off</div>
                </div>
              </div>
              <div className="">
                <span className="text-blue-500 text-sm cursor-pointer">
                  Turn on
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
