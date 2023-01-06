import React from "react";

function Helpful() {
  return (
    <div className="">
      <div className="px-6 lg:px-8 grid gap-5 lg:grid-cols-12 max-w-[87rem] mx-auto mt-4 lg:mt-10 py-5 lg:py-10">
        <div className="lg:col-span-6">
          <p className="text-4xl font-medium">Enjoy frictionless meetings</p>
          <p className="lg:mt-10 text-xl font-thin ">
            Talk takes the headaches out of joining a video call at work. Just
            set up a meeting and share a link. No worrying about whether
            teammates, clients, or customers have the right accounts or
            plug-ins. With a fast, lightweight interface and smart participant
            management, multi-person video calls are a breeze.
          </p>
        </div>
        <div className="lg:col-span-6">
          <img
            src="https://img.onmanorama.com/content/dam/mm/en/lifestyle/news/images/2020/5/17/video-conferencing-c.jpg"
            alt=""
            className="w-full h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Helpful;
