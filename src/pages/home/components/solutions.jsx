import React from "react";

function Solutions() {
  return (
    <div className="sm:px-6 lg:px-0 grid lg:grid-cols-12 ">
      <div className="lg:col-span-3 bg-blue-700 p-4 flex justify-start items-center text-7xl flex-col text-white">
        🆃🅰🅻🅺
        <p className="text-sm">Video Conferencing Solutions</p>
      </div>
      <div className="lg:col-span-9 bg-slate-900 flex flex-col px-7 py-5 ">
        <p className="text-white text-3xl font-bold">Flexible solutions for modern team collaboration</p>
        <div className="flex-row gap-4 pt-2 text-white lg:flex sm:block">
            <p className="border rounded-full px-4 py-2 lg:mb-0 mb-2 border-red-400 bg-red-900 ">Talk One</p>
            <p className="border rounded-full px-4 py-2 lg:mb-0 mb-2 border-blue-400 bg-blue-900">Spaces</p>
            <p className="border rounded-full px-4 py-2 lg:mb-0 mb-2 border-yellow-400 bg-yellow-900">Events</p>
            <p className="border rounded-full px-4 py-2 lg:mb-0 mb-2 border-orange-400 bg-orange-900">Developers</p>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
