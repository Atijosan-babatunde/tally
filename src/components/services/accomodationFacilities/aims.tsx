import { Typography } from "@material-tailwind/react";
import frame from "../../../assets/images/frame21.png";

const Aims = () => {
  return (
    <main className="max-w-7xl mt-8 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <img
          src={frame}
          alt="frame"
          className="w-full lg:w-auto lg:max-w-md mx-auto"
        />

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-6 sm:px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                24/7 On-Site
              </Typography>
              <Typography className="font-extrabold text-xl">
                Support
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Round-the-clock assistance to ensure safety and well-being
            </Typography>
          </div>

          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-6 sm:px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Personalised
              </Typography>
              <Typography className="font-extrabold text-xl">
                Mentoring
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Tailored mentoring to help residents set and achieve personal
              goals.
            </Typography>
          </div>

          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-6 pb-14 px-6 sm:px-8 border border-[#606C6C33] sm:col-span-2 lg:col-span-1">
            <div>
              <Typography className="font-extrabold text-xl">
                Goal Setting &
              </Typography>
              <Typography className="font-extrabold text-xl">
                Progress Tracking
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Regular Check-ins to monitor progress and support
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Aims;
