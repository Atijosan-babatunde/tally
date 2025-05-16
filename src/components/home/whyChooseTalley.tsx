import { Button, Typography } from "@material-tailwind/react";
import frame from "../../assets/images/frame2.png";
import safe from "../../assets/images/safe.svg";
import support from "../../assets/images/support.svg";
import file from "../../assets/images/file.svg";
import community from "../../assets/images/community.svg";
import rocket from "../../assets/images/rocket.svg";

const WhyChooseTalley = () => {
  return (
    <main className="w-full pb-8 md:pb-12 lg:pb-16 lg:px-0">
      <section className="max-w-7xl container mx-auto">
        <div className="relative mx-auto w-full md:w-5/6 lg:w-4/5 xl:max-w-5xl py-0">
          <img
            src={frame}
            alt="frame"
            className="w-full -mt-0 sm:-mt-4 md:-mt-6"
          />

          <div className="absolute inset-0 flex flex-col items-center text-center px-4 sm:px-8 md:px-16 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
            <Typography className="text-2xl sm:text-3xl md:text-4xl playfair font-bold mb-0 md:mb-4">
              Why Choose <span className="text-teal-400 italic">Talley</span>?
            </Typography>

            <Typography className="text-[#606C6C] text-xs md:text-lg max-w-lg font-medium mb-1 md:mb-8 lg:mb-11">
              At Talley, we do more than provide a place to stay-we create a
              safe, supportive environment where young adults can grow, thrive,
              and step confidently into independence. Here's what sets us apart:
            </Typography>

            <Button className="bg-[#48D1CC] cursor-pointer rounded-full font-semibold text-sm sm:text-base md:text-lg text-white px-4 sm:px-6 py-1.5 sm:py-2">
              Discover Our Mission
            </Button>
          </div>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          <div className="flex flex-col text-center gap-2 sm:gap-2.5">
            <img
              src={safe}
              alt="safe_img"
              className="w-16 h-16 md:w-20 md:h-20 m-auto"
            />
            <div className="text-center flex flex-col justify-center">
              <Typography className="text-lg sm:text-xl font-bold">
                Safe & Secure
              </Typography>
              <Typography className="text-lg sm:text-xl font-bold">
                Accomodation
              </Typography>
            </div>
            <Typography className="font-medium max-w-xs m-auto text-sm sm:text-base text-[#626A6A]">
              Our living spaces are designed to offer both comfort and security,
              ensuring peace of mind as you transition to independent living.
            </Typography>
          </div>

          <div className="flex flex-col text-center gap-2 sm:gap-2.5">
            <img
              src={support}
              alt="support_img"
              className="w-16 h-16 md:w-20 md:h-20 m-auto" // Increased icon sizes
            />
            <div className="text-center flex flex-col justify-center">
              <Typography className="text-lg sm:text-xl font-bold">
                24/7 Support
              </Typography>
              <Typography className="text-lg sm:text-xl font-bold">
                Guidance
              </Typography>
            </div>
            <Typography className="font-medium max-w-xs m-auto text-sm sm:text-base text-[#626A6A]">
              Our dedicated team is always available to offer assistance,
              whether you need advice emotional support, or pratical help
              navigating daily life.
            </Typography>
          </div>

          <div className="flex flex-col text-center gap-2 sm:gap-2.5 sm:col-span-2 lg:col-span-1">
            <img
              src={file}
              alt="file_img"
              className="w-16 h-16 md:w-20 md:h-20 m-auto" // Increased icon sizes
            />
            <div className="text-center flex flex-col justify-center">
              <Typography className="text-lg sm:text-xl font-bold">
                Personalized
              </Typography>
              <Typography className="text-lg sm:text-xl font-bold">
                Independence Plans
              </Typography>
            </div>
            <Typography className="font-medium max-w-xs m-auto text-sm sm:text-base text-[#626A6A]">
              We understand that everyone's journey is unique. That's why we
              provide tailored support to help you develop essential life skills
              and achieve your personal goals.
            </Typography>
          </div>
        </div>

        {/* Bottom row of features with larger icons */}
        <div className="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-6">
          <div className="flex flex-col text-center gap-2 sm:gap-2.5 mx-auto w-full">
            <img
              src={community}
              alt="community_img"
              className="w-16 h-16 md:w-20 md:h-20 m-auto" // Increased icon sizes
            />
            <div className="text-center flex flex-col justify-center">
              <Typography className="text-lg sm:text-xl font-bold">
                Community &
              </Typography>
              <Typography className="text-lg sm:text-xl font-bold">
                Connection
              </Typography>
            </div>
            <Typography className="font-medium max-w-xs m-auto text-sm sm:text-base text-[#626A6A]">
              You're never alone at Talley. We foster a sense of
              belongingthrough a welcoming enviroment where you can connect with
              others on similar paths.
            </Typography>
          </div>

          <div className="flex flex-col text-center gap-2 sm:gap-2.5 mx-auto w-full">
            <img
              src={rocket}
              alt="rocket_img"
              className="w-16 h-16 md:w-20 md:h-20 m-auto"
            />
            <div className="text-center flex flex-col justify-center">
              <Typography className="text-lg sm:text-xl font-bold">
                A step Toward
              </Typography>
              <Typography className="text-lg sm:text-xl font-bold">
                Your Future
              </Typography>
            </div>
            <Typography className="font-medium max-w-xs m-auto text-sm sm:text-base text-[#626A6A]">
              From financiala litracy to career readiness, we equip you with the
              skills and confidence needed to build a bright and independent
              future.
            </Typography>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyChooseTalley;
