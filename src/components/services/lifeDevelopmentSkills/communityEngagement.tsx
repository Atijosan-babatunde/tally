import { Typography } from "@material-tailwind/react";
import frame from "../../../assets/images/frame13.png";

const CommunityEngagements = () => {
  return (
    <main className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Typography className="font-extrabold mb-6 playfair text-3xl md:text-4xl">
        Community Engagement
      </Typography>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 order-2 lg:order-1">
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-6 sm:px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Accessing Local Services
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              How to find support groups, youth centres, and food banks.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-6 sm:px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Volunteering & Mentoring
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              Opportunities for skill-building and community involvement.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-6 sm:px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Navigating Public Transport
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              Planning routes, using Oyster/contactless cards, and safety tips.
            </Typography>
          </div>
        </div>
        <img
          src={frame}
          alt="Community engagement illustration"
          className="w-full lg:w-auto lg:max-w-md mx-auto lg:mx-0 order-1 lg:order-2"
        />
      </div>
    </main>
  );
};

export default CommunityEngagements;
