import { Typography } from "@material-tailwind/react";
import hero from "../../../assets/images/frame31.png";

const Hero = () => {
  return (
    <div className="relative">
      <img
        src={hero}
        alt="hero"
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto object-cover mb-18"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <Typography className="font-bold mb-2 sm:mb-4 text-white text-lg sm:text-xl md:text-2xl">
          Our Services
        </Typography>

        <Typography className="text-3xl md:text-5xl lg:text-6xl playfair font-bold my-4 sm:my-6 md:my-8">
          Community Engagement
        </Typography>

        <Typography className="max-w-3xl font-medium text-sm sm:text-base md:text-inherit">
          At Talley, we believe that a strong community is teh foundation for
          personal growth and independence. We foster a supportive and inculsive
          enviroment where young adults can build meaningful connections,
          develop social skills, and engage in positive expereiences that enrich
          their lives.
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
