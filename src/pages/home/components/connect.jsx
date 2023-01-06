import React from "react";

function Connect() {
  return (
    <div className="max-w-[87rem] mx-auto px-6 lg:px-8">
      <div className=" grid gap-5 lg:grid-cols-12  mt-4 lg:mt-10 py-5 lg:py-10">
        <div className="lg:col-span-6 lg:order-1 order-2">
          <img
            src="https://i.pcmag.com/imagery/roundups/02VdaftDvo0TZxKvLhj00hF-3..v1620935850.jpg"
            alt=""
            className="w-full h-full rounded-xl"
          />
        </div>
        <div className="lg:col-span-6 lg:px-20 lg:order-2 order-1">
          <p className="text-4xl font-medium">
            Connect in the office or remotely
          </p>
          <p className="lg:mt-10 text-xl font-thin">
            Talk is fully integrated with Talk Workspace. Seamlessly jump into a
            video call from Chat or take document collaboration to the next
            level by connecting over video – everything ties together so you can
            always connect and collaborate in context.
          </p>
        </div>
      </div>
      <div className="lg:grid gap-10 grid-cols-3">
        <div className="mt-4 lg:mt-0">
          <p className="font-medium text-xl ">
            Dial-in phone numbers for every meeting.
          </p>
          <p className="font-thin mt-3">
            With Talk Workspace, every meeting automatically includes its own
            dial-in details. Guests can quickly dial-in with a tap from their
            smartphone. A Global Dialing add-on is also available for expanded
            calling support.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <p className="font-medium text-xl ">
            Integrated with Talk Workspace.
          </p>
          <p className="font-thin mt-3">
            Easily join or start a Meet video meeting directly from Gmail.
            Meeting information from Talk Calendar is available directly within
            the meeting so you can quickly catch up on the agenda and meeting
            details.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <p className="font-medium text-xl ">
            Works with other meeting solutions too.
          </p>
          <p className="font-thin mt-3">
            Teams using Skype for Business or meeting systems based on SIP and
            H.323 standards (e.g., Polycom and Cisco) can seamlessly join a Meet
            meeting through the Pexip Infinity Platform.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Connect;
