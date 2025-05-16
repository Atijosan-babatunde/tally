import { Typography } from "@material-tailwind/react";
import hero from "../../assets/images/frame30.png";

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
          Accomodation Facilities
        </Typography>

        <Typography className="max-w-3xl font-medium text-sm sm:text-base md:text-inherit">
          At Talley, we provide safe, comfortable, and fully equiped living
          spaces designed to support young adults (18+) on their journey to
          independence. Our accomodations offer a welcoming enviroment where you
          can feel secure, build confidence, and develop essential life skills.
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
