import { Typography } from "@material-tailwind/react";
import {
  Bag,
  BlueLocation,
  Bulb,
  Career,
  Direction,
  Team,
  Time,
} from "../../assets/svg";

const JobOpenings = () => {
  return (
    <main className="bg-[#48D1CC] py-12 md:py-16 lg:py-22 px-4 sm:px-6">
      <div className="max-w-7xl m-auto">
        <Typography className="font-bold mb-2 md:mb-4 text-white text-lg md:text-xl text-center">
          Careers
        </Typography>
        <Typography className="font-extrabold mb-3 text-white playfair text-3xl md:text-4xl lg:text-5xl text-center">
          Join The Talley Team
        </Typography>
        <Typography className="font-medium text-sm md:text-md mb-8 md:mb-16 max-w-xl mx-auto text-center text-white">
          Make a difference in the lives of young adults by joining Talley. We
          are dedicated to providing safe, supportive, and empowering
          accomodation for individuals transitioning to independent living. if
          you're passionate about making a positive impact, we'd love to hear
          from you!
        </Typography>
        <Typography className="font-bold mb-6 md:mb-10 text-white text-2xl md:text-3xl text-center">
          Why Work With us
        </Typography>
        <div className="mb-12 text-white flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
          <div className="flex items-center flex-col w-36 mb-4">
            <Bag />
            <Typography className="font-semibold mt-3 text-base md:text-lg text-center">
              Meaningful
            </Typography>
            <Typography className="font-semibold text-base md:text-lg text-center">
              Work
            </Typography>
          </div>

          <div className="flex items-center flex-col w-36 mb-4">
            <Team />
            <Typography className="font-semibold text-base md:text-lg mt-3 text-center">
              Supportive
            </Typography>
            <Typography className="font-semibold text-base md:text-lg text-center">
              Work
            </Typography>
          </div>

          <div className="flex items-center flex-col w-36 mb-4">
            <Career />
            <Typography className="font-semibold text-base md:text-lg mt-3 text-center">
              Career
            </Typography>
            <Typography className="font-semibold text-base md:text-lg text-center">
              Development
            </Typography>
          </div>

          <div className="flex items-center flex-col w-36 mb-4">
            <Bulb />
            <Typography className="font-semibold text-base md:text-lg mt-3 text-center">
              Career
            </Typography>
            <Typography className="font-semibold text-base md:text-lg text-center">
              Opportunities
            </Typography>
          </div>
        </div>

        <section className="w-full px-4 sm:px-6 pt-12 md:pt-20 pb-6 md:pb-10 flex flex-col gap-6 md:gap-8 justify-center bg-white rounded-xl">
          <div className="flex justify-center">
            <div className="bg-[#EFFBFA] text-center w-fit px-4 py-1 rounded-full">
              <Typography className="font-semibold text-sm md:text-base text-[#48D1CC]">
                Current Job Openings:
              </Typography>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-5 md:py-7 border-b border-gray-200">
            <div className="flex flex-col gap-1 mb-4 md:mb-0">
              <Typography className="font-bold text-base md:text-lg">
                Support Worker
              </Typography>
              <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
                Work directly with young adults, offering guidance and
                encouragement.
              </Typography>
              <div className="flex gap-2 md:gap-4 rounded-full bg-[#EFFBFA] w-fit px-2 md:px-3 py-1 md:py-2 mt-2">
                <div className="flex items-center gap-1">
                  <Time />
                  <Typography className="text-xs md:text-sm font-bold text-[#48D1CC]">
                    Full-Time
                  </Typography>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-1 font-bold text-base md:text-lg">
              Apply <Direction />
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-5 md:py-7 border-b border-gray-200">
            <div className="flex flex-col gap-1 mb-4 md:mb-0">
              <Typography className="font-bold text-base md:text-lg">
                Housing Coordinator
              </Typography>
              <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
                Ensure a safe and welcoming environment for all residents.
              </Typography>
              <div className="flex flex-wrap gap-2 md:gap-4 mt-2">
                <div className="flex items-center w-fit rounded-full bg-[#EFFBFA] px-2 md:px-3 py-1 md:py-2 gap-1">
                  <BlueLocation />
                  <Typography className="text-xs md:text-sm font-bold text-[#48D1CC]">
                    100% Remote
                  </Typography>
                </div>
                <div className="flex items-center w-fit rounded-full bg-[#EFFBFA] px-2 md:px-3 py-1 md:py-2 gap-1">
                  <Time />
                  <Typography className="text-xs md:text-sm font-bold text-[#48D1CC]">
                    Full-Time
                  </Typography>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-1 font-bold text-base md:text-lg">
              Apply <Direction />
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-5 md:py-7">
            <div className="flex flex-col gap-1 mb-4 md:mb-0">
              <Typography className="font-bold text-base md:text-lg">
                Life Skills Mentor
              </Typography>
              <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
                Lead workshops and provide one-on-one coaching in essential life
                skills.
              </Typography>
              <div className="flex flex-wrap gap-2 md:gap-4 mt-2">
                <div className="flex items-center w-fit rounded-full bg-[#EFFBFA] px-2 md:px-3 py-1 md:py-2 gap-1">
                  <BlueLocation />
                  <Typography className="text-xs md:text-sm font-bold text-[#48D1CC]">
                    100% Remote
                  </Typography>
                </div>
                <div className="flex items-center w-fit rounded-full bg-[#EFFBFA] px-2 md:px-3 py-1 md:py-2 gap-1">
                  <Time />
                  <Typography className="text-xs md:text-sm font-bold text-[#48D1CC]">
                    Full-Time
                  </Typography>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-1 font-bold text-base md:text-lg">
              Apply <Direction />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default JobOpenings;
