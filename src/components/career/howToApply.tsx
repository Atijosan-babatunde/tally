import { Typography } from "@material-tailwind/react";
import frame from "../../assets/images/frame26.png";

const HowToApply = () => {
  return (
    <main className="w-full py-8 md:py-12 lg:py-18 px-4 sm:px-6">
      <div className="max-w-7xl bg-white rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between mx-auto gap-6">
        <div className="order-2 md:order-1">
          <Typography className="playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
            How to Apply
          </Typography>
          <Typography className="mt-10 leading-relaxed max-w-xl font-medium text-[#606C6C]">
            Interested in becoming a volunteer? We'd love to hear from you!
            Simply fill out our volunteer application form or email us at{" "}
            <span className="text-[#48D1CC] font-bold">
              talleycares@gmail.com
            </span>{" "}
            to learn more.
          </Typography>
          <Typography className="text-[#606C6C] font-medium mt-3 md:mt-5 text-sm md:text-base text-center md:text-left">
            Join us today and be a part of something truly life-changing!
          </Typography>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={frame}
            alt="image"
            className="max-w-full h-auto md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </main>
  );
};

export default HowToApply;
