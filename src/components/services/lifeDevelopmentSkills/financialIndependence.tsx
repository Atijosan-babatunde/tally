import { Typography } from "@material-tailwind/react";
import frame from "../../../assets/images/frame11.png";

const FinancialIndependence = () => {
  return (
    <main className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Typography className="font-extrabold mb-6 playfair text-3xl md:text-4xl">
        Financial Independence
      </Typography>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 order-2 lg:order-1">
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-6 sm:px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Banking & Credit
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              Opening accounts, understanding interest rates, avoiding payday
              loans.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-6 sm:px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Benefits &
              </Typography>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Entitlements
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              What support is available (e.g. Universal Credit, Council Tax
              relief)
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-6 pb-14 px-6 sm:px-8 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Saving & Planning
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              Emergency funds, long-term-saving, pension introduction.
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

export default FinancialIndependence;
