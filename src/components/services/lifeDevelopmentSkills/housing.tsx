import { Typography } from "@material-tailwind/react";
import frame from "../../../assets/images/frame12.png";

const Housing = () => {
  return (
    <main className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Typography className="font-extrabold mb-6 playfair text-3xl md:text-4xl">
        Housing & Tenancy Skills
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
                Understanding Tenancy
              </Typography>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Agreements
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              Rights and responsibilities of tenants.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-6 sm:px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Finding & Maintaining
              </Typography>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Accommodation
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              Viewing properties, managing landlord relationships.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-6 pb-14 px-6 sm:px-8 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-lg sm:text-xl">
                Avoiding Homelessness
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A] text-sm sm:text-base">
              Knowing where to seek help if things go wrong.
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Housing;
