import { Typography } from "@material-tailwind/react";
import hero from "../../assets/images/frame30.png";

const SubHero = () => {
  return (
    <div className="relative">
      <img
        src={hero}
        alt="hero"
        className="w-full mb-18 h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <Typography className="font-bold mb-2 md:mb-4 text-white text-sm sm:text-base md:text-xl text-center">
          Our Services / Accomodation Services /{" "}
          <span className="text-[#48D1CC]">Private Rooms</span>
        </Typography>
        <Typography className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl playfair font-bold my-2 sm:my-4 md:my-8">
          Private Rooms
        </Typography>
        <Typography className="max-w-3xl font-medium text-base sm:text-lg md:text-xl px-2 md:px-4">
          Comfortable living options tailored to individual prefrences
        </Typography>
      </div>
    </div>
  );
};

export default SubHero;
