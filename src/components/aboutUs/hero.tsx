import { Typography } from "@material-tailwind/react";
import frame from "../../assets/images/frame7.png";
const Hero = () => {
  return (
    <main className="pt-12 bg-[#0A2928]">
      <div className="container text-center max-w-7xl mx-auto">
        <Typography className="text-white mb-7 text-lg font-bold">
          About Us
        </Typography>
        <Typography className="playfair mb-4 text-white text-4xl md:text-6xl font-extrabold">
          Discover <span className="italic text-[#48D1CC]">Our Mission</span>
        </Typography>
        <Typography className="max-w-3xl text-md mx-auto text-white text-center">
          At Talley Cares, we beleive in creating a space where young adults can
          thrive, develop, and transition confidently into independence. with
          years of expereince and dedicated team, we provide more than just a
          place to live - we offer a nuturing enviroment that inspires growth and
          self-discovery. Our holistic approach ensures that every individual
          feels valued, supported and equipped to tackle the challenges of
          adulthood with resilience and confidence.
        </Typography>
        <div className="flex justify-center">
          <img src={frame} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
