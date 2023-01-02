import React from "react";
import { NotificationsActiveOutlined } from "@mui/icons-material";

function HeroSection() {
  return (
    <section class="bg-white">
      <div class="grid max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-5">
          <div class="sm:mb-8 sm:flex ">
            <div class="relative overflow-hidden rounded-full py-1.5 px-4 text-[12px] leading-6 ring-1 ring-gray-900/10 hover:bg-gray-400/20 cursor-pointer">
              <div class="text-gray-600">
                <span className="pr-2 mr-2 border-r border-gray-400">
                  <NotificationsActiveOutlined
                    sx={{ fontSize: 25 }}
                    className="pr-2 text-orange-400"
                  />
                  Next Work Transformation Summit - Jan. 18th 9am PT
                </span>
                <span class="font-semibold text-indigo-600">
                  <span class="absolute inset-0" aria-hidden="true"></span>Read
                  more <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </div>
          </div>
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            One Platform To{" "}
            <span className="text-blue-500 font-thin"> Connect</span>
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Keep your team connected and secure with enterprise-level video
            conferencing from Talk. Our global infrastructure is reliable and
            secure, and Talk is included with Talk Workspace, Talk Workspace
            Essentials, and Talk Workspace for Education.
          </p>
          <div className="flex gap-2">
            <a
              class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
              href="/register"
            >
              <span> Contact Sales</span>
            </a>
            <a
              class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-transparent text-blue-600 hover:text-blue-500"
              href="/register"
            >
              <span>
                Get Started <span aria-hidden="true">&rarr;</span>
              </span>
            </a>
          </div>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-7 lg:flex">
          <div className="relative w-full h-full left-[15%] top-[10%] max-h-[600px]">
            <div className="absolute left-[50%] right-[60px] h-[300px] top-[-20%] bg-no-repeat bg-contain rounded-lg bg-[url('https://st1.zoom.us/static/6.3.10395/image/home2/slide1-1.jpg')]">
              <img
                alt=""
                src="https://st1.zoom.us/static/6.3.10395/image/home2/slide2-2.png"
                className="absolute bottom-[-30%] w-[200px]"
              />
            </div>
            <div className="absolute left-[-60px] right-[60px] h-[300px] top-[20%] bg-no-repeat bg-contain rounded-lg bg-[url('https://st3.zoom.us/static/6.3.10395/image/home2/slide3-4.jpg')]">
              <img
                src="https://st2.zoom.us/static/6.3.10395/image/home2/slide3-2.png"
                alt=""
                className="absolute top-[-40%] left-[22%] w-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
