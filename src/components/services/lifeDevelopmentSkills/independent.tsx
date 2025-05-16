import { Typography } from "@material-tailwind/react";
import frame from "../../../assets/images/frame8.png";

const Independent = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Typography className="font-bold mb-6 playfair text-3xl md:text-4xl">
        Independent Living Skills
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
                Budgeting & Money
              </Typography>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Management
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              How to create a budget, manage bills, avoid debt and save.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-6 sm:px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Meal Planning &
              </Typography>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Cooking
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              Affordable, healthy meal, grocery shopping, and kitchen safety.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-6 pb-14 px-6 sm:px-8 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                House Keeping &
              </Typography>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Maintenance
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              Cleaning routines, basic DIY, laundry, managing utilities
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-6 sm:px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Health & Wellbeing
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              Booking GP appointments, understanding NHS services, hygiene and
              sleep routines.
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Independent;
