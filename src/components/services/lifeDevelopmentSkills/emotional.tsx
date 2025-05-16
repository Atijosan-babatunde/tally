import { Typography } from "@material-tailwind/react";
import frame from "../../../assets/images/frame10.png";

const Emotional = () => {
  return (
    <main className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Typography className="font-extrabold mb-6 playfair text-3xl md:text-4xl">
        Emotional & Social Development
      </Typography>
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
                Resilience & Self
              </Typography>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Confidence
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              Coping strategies, positive affirmations, therapy options.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-6 sm:px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Conflict Resolution and
              </Typography>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Communication
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              How to express needs, resolve disagreements, and build healthy
              relationships.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-6 pb-14 px-6 sm:px-8 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Goal-Setting
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              How to set SMART goals, and track progress in life, work, or
              education.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-6 sm:px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Decision-Making & Critical
              </Typography>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Thinking
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
            Enhance ability to think critically, make decisions, and weigh risks effectively.
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Emotional;
