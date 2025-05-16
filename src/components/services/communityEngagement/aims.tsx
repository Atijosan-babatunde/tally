import { Typography } from "@material-tailwind/react";
import frame from "../../../assets/images/frame22.png";

const Aims = () => {
  return (
    <main className="max-w-7xl mt-8 mx-auto px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-8">
        <img
          src={frame}
          alt="frame"
          className="w-full lg:w-auto lg:max-w-md mx-auto lg:mx-0"
        />
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-6 sm:px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Social Events &
              </Typography>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Activities
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              Organised events to build relationships and foster a sense of
              community.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-6 sm:px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Volunteering
              </Typography>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Opportunities
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              Support for residents to engage in meaningful volunteer work.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-6 pb-14 px-6 sm:px-8 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Peer Support
              </Typography>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Networks
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              Group sessions to connect with others and share experiences.
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Aims;
