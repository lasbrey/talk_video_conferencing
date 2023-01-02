import React from "react";

function Banner() {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-900 text-white p-20 my-10">
      <span className="text-5xl font-bold ">Ready to get started?</span>
      <div className="flex gap-2 lg:mt-10 mt-5">
        <a
          class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
          href="/register"
        >
          <span> Contact Sales</span>
        </a>
        <a
          class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-transparent border border-blue-500 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
          href="/register"
        >
          <span> Get Started</span>
        </a>
      </div>
    </div>
  );
}

export default Banner;
