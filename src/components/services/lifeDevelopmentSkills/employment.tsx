import { Typography } from "@material-tailwind/react";
import frame from "../../../assets/images/frame9.png";

const Employment = () => {
  return (
    <main className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Typography className="font-extrabold mb-6 playfair text-3xl md:text-4xl">
        Employment & Career Skills
      </Typography>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 order-2 lg:order-1">
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-6 sm:px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                CV Writing & Job
              </Typography>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Applications
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              Templates, personal statement, and cover letters.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-6 sm:px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Interview
              </Typography>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Preparation
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              Mock interviews, how to dress, and communicate effectively.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-6 pb-14 px-6 sm:px-8 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Workplace Skills
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              Time management, professional boundaries, and communication at
              work.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-6 sm:px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Digital Literacy
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              Using email, Microsoft Office, and safe internet practices.
            </Typography>
          </div>
        </div>
        <img
          src={frame}
          alt="frame"
          className="w-full lg:w-auto lg:max-w-md mx-auto lg:mx-0 order-1 lg:order-2"
        />
      </div>
    </main>
  );
};

export default Employment;
