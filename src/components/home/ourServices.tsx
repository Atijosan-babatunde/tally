import { Button, Typography } from "@material-tailwind/react";
import frame1 from "../../assets/images/frame4.png";
import frame2 from "../../assets/images/frame5.png";
import frame3 from "../../assets/images/frame6.png";
import frame4 from "../../assets/images/frame32.png";
import { Arrow } from "../../assets/svg";

const OurServices = () => {
  return (
    <main className="pb-22 bg-[#0A2928] px-4 sm:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row mb-25 items-center justify-between gap-8 md:gap-0">
          <div className="order-2 md:order-1 text-center md:text-left">
            <Typography className="text-3xl md:text-4xl lg:text-5xl text-white playfair font-bold mb-6">
              Our <span className="text-[#48D1CC] italic">Services</span>
            </Typography>
            <Typography className="font-medium text-white max-w-lg mx-auto md:mx-0">
              At Talley Cares, we believe in creating a space where young adults
              can thrive, develop, and transition confidently into independence.
              With years of experience and a dedicated team, we provide more
              than just a place to live—we offer a nurturing environment that
              inspires growth and self-discovery. Our holistic approach ensures
              that every individual feels valued, supported, and equipped to
              tackle the challenges of adulthood with resilience and confidence.
            </Typography>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={frame4}
              alt="frame"
              className="w-full max-w-md md:max-w-none mx-auto"
            />
          </div>
        </div>
        <div className="grid text-white gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          <div className="grid grid-cols-1 gap-6 text-center md:text-left">
            <div>
              <img
                src={frame1}
                alt="frame"
                className="w-full mx-auto max-w-[400px] md:mx-0"
              />
            </div>
            <Typography className="font-bold text-xl md:text-2xl">
              Life Skills Development
            </Typography>
            <Typography>
              At Talley, we believe that independence is more than just having a
              place to stay—it's about having the confidence and skills to build
              a successful future. Our Life Skills Development program is
              designed to equip young adults with the practical knowledge and
              experience they need to navigate everyday life with ease.
            </Typography>
            <Button className="bg-[#48D1CC] w-fit cursor-pointer items-center flex gap-2 rounded-full font-bold text-base md:text-lg text-white px-6 md:px-8 py-3 mx-auto md:mx-0">
              Read More
              <Arrow />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 text-center md:text-left">
            <div>
              <img
                src={frame2}
                alt="frame"
                className="w-full mx-auto max-w-[400px] md:mx-0"
              />
            </div>
            <Typography className="font-bold text-xl md:text-2xl">
              Accommodation and <br /> Facilities
            </Typography>
            <Typography>
              At Talley we provide safe, comfortable and fully equipped living
              spaces designed to support young adults (18+) on their journey to
              independence. Our accommodations offer a welcoming environment
              where you can feel secure, build confidence, and develop essential
              life skills.
            </Typography>
            <Button className="bg-[#48D1CC] w-fit cursor-pointer items-center flex gap-2 rounded-full font-bold text-base md:text-lg text-white px-6 md:px-8 py-3 mx-auto md:mx-0">
              Read More
              <Arrow />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 text-center md:text-left">
            <div>
              <img
                src={frame3}
                alt="frame"
                className="w-full mx-auto max-w-[400px] md:mx-0"
              />
            </div>
            <Typography className="font-bold text-xl md:text-2xl">
              Community Engagement
            </Typography>
            <Typography>
              At Talley, we believe that a strong community is the foundation
              for personal growth and independence. We foster a supportive and
              inclusive environment where young adults can build meaningful
              connections, develop social skills, and engage in positive
              experiences that enrich their lives.
            </Typography>
            <Button className="bg-[#48D1CC] w-fit cursor-pointer items-center flex gap-2 rounded-full font-bold text-base md:text-lg text-white px-6 md:px-8 py-3 mx-auto md:mx-0">
              Read More
              <Arrow />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurServices;
