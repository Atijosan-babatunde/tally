import { Typography } from "@material-tailwind/react";
import frame from "../../assets/images/frame25.png";
import { Bulb, Career, Hand, Team } from "../../assets/svg";

const Hero = () => {
  return (
    <div className="w-full mb-8 md:mb-12 lg:mb-18">
      <div className="relative">
        <img
          src={frame}
          alt="Volunteer with Talley"
          className="w-full h-auto object-cover min-h-[500px] md:min-h-[600px] lg:min-h-auto"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-start pt-6 sm:pt-12 md:pt-16 lg:pt-27 px-4 sm:px-6">
          <div className="text-center">
            <Typography className="text-white font-bold text-lg sm:text-xl mb-4 md:mb-6 lg:mb-10">
              Careers
            </Typography>

            <div className="mb-4 md:mb-6">
              <Typography className="text-white playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                Make a Difference -
              </Typography>
              <Typography className="text-white playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                Volunteer with Talley
              </Typography>
            </div>

            <Typography className="text-white mx-auto max-w-2xl font-medium text-sm sm:text-base md:text-lg">
              At Talley, we believe in the power of community and the impact of
              giving back. Our volunteers play a vital role in creating a safe,
              supportive, and inspiring environment for young adults
              transitioning to independent living. Whether you're mentoring,
              leading workshops, or lending a helping hand, your time and skills
              can make a real difference.
            </Typography>

            <Typography className="text-white hidden md:block mt-8 md:mt-12 lg:mt-17 text-xl md:text-2xl font-bold mb-4 md:mb-8">
              Why Volunteer with Us?
            </Typography>

            <div className="mt-6 md:mt-10 lg:mt-17 hidden md:grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 max-w-2xl mx-auto">
              <div className="flex items-center flex-col">
                <Hand />
                <div className="mt-3">
                  <Typography className="text-white font-semibold text-base sm:text-lg md:text-xl">
                    Change
                  </Typography>
                  <Typography className="text-white font-semibold text-base sm:text-lg md:text-xl">
                    Lives
                  </Typography>
                </div>
              </div>
              <div className="flex items-center flex-col">
                <Team />
                <div className="mt-3">
                  <Typography className="text-white font-semibold text-base sm:text-lg md:text-xl">
                    Supportive
                  </Typography>
                  <Typography className="text-white font-semibold text-base sm:text-lg md:text-xl">
                    Community
                  </Typography>
                </div>
              </div>
              <div className="flex items-center flex-col">
                <Career />
                <div className="mt-3">
                  <Typography className="text-white font-semibold text-base sm:text-lg md:text-xl">
                    Gain Valuable
                  </Typography>
                  <Typography className="text-white font-semibold text-base sm:text-lg md:text-xl">
                    Experince
                  </Typography>
                </div>
              </div>
              <div className="flex items-center flex-col">
                <Bulb />
                <div className="mt-3">
                  <Typography className="text-white font-semibold text-base sm:text-lg md:text-xl">
                    Flexible
                  </Typography>
                  <Typography className="text-white font-semibold text-base sm:text-lg md:text-xl">
                    Opportunities
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
