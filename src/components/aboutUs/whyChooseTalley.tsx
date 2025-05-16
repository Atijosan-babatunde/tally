import { Typography } from "@material-tailwind/react";
import safe from "../../assets/images/safe.svg";
import support from "../../assets/images/support.svg";
import file from "../../assets/images/file.svg";
import community from "../../assets/images/community.svg";
import rocket from "../../assets/images/rocket.svg";

const WhyChooseTalley = () => {
  return (
    <main className="w-full md:py-18 py-10 mb-10 md:mb-20 px-4 sm:px-0">
      <section className="max-w-7xl container mx-auto">
        <div className="max-w-lg m-auto inset-0 flex flex-col items-center text-center px-4 sm:px-0">
          <Typography className="text-4xl md:text-5xl playfair font-bold mb-4">
            Why Choose <span className="text-teal-400 italic">Talley</span>?
          </Typography>

          <Typography className="text-[#606C6C] font-medium mb-8 sm:mb-11 text-sm sm:text-base">
            At Talley, we do more than provide a place to stay—we create a safe, and
            supportive environment where young adults can grow, thrive, and step
            confidently into independence. Here's what sets us apart:
          </Typography>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
          <div className="flex flex-col text-center gap-2.5">
            <img src={safe} alt="safe_img" className="w-15 m-auto" />
            <div className="text-center flex flex-col justify-center">
              <Typography className="text-lg sm:text-xl font-bold">
                Safe & Secure
              </Typography>
              <Typography className="text-lg sm:text-xl font-bold">
                Accommodation
              </Typography>
            </div>
            <Typography className="font-medium max-w-xs m-auto text-[#626A6A] text-sm sm:text-base">
              Our living spaces are designed to offer both comfort and security,
              ensuring peace of mind as you transition to independent living.
            </Typography>
          </div>

          <div className="flex flex-col text-center gap-2.5">
            <img src={support} alt="support_img" className="w-15 m-auto" />
            <div className="text-center flex flex-col justify-center">
              <Typography className="text-lg sm:text-xl font-bold">
                24/7 Support
              </Typography>
              <Typography className="text-lg sm:text-xl font-bold">
                Guidance
              </Typography>
            </div>
            <Typography className="font-medium max-w-xs m-auto text-[#626A6A] text-sm sm:text-base">
              Our dedicated team is always available to offer assistance,
              whether you need advice, emotional support, or practical help
              navigating daily life.
            </Typography>
          </div>

          <div className="flex flex-col text-center gap-2.5">
            <img src={file} alt="file_img" className="w-15 m-auto" />
            <div className="text-center flex flex-col justify-center">
              <Typography className="text-lg sm:text-xl font-bold">
                Personalized
              </Typography>
              <Typography className="text-lg sm:text-xl font-bold">
                Independence Plans
              </Typography>
            </div>
            <Typography className="font-medium max-w-xs m-auto text-[#626A6A] text-sm sm:text-base">
              We understand that everyone's journey is unique. That's why we
              provide tailored support to help you develop essential life skills
              and achieve your personal goals.
            </Typography>
          </div>
        </div>

        <div className="mt-12 sm:mt-[5em] grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-27 justify-center">
          <div className="flex flex-col text-center gap-2.5">
            <img src={community} alt="community_img" className="w-15 m-auto" />
            <div className="text-center flex flex-col justify-center">
              <Typography className="text-lg sm:text-xl font-bold">
                Community &
              </Typography>
              <Typography className="text-lg sm:text-xl font-bold">
                Connection
              </Typography>
            </div>
            <Typography className="font-medium max-w-xs m-auto text-[#626A6A] text-sm sm:text-base">
              You're never alone at Talley. We foster a sense of belonging
              through a welcoming environment where you can connect with others
              on similar paths.
            </Typography>
          </div>

          <div className="flex flex-col text-center gap-2.5">
            <img src={rocket} alt="rocket_img" className="w-15 m-auto" />
            <div className="text-center flex flex-col justify-center">
              <Typography className="text-lg sm:text-xl font-bold">
                A Step Toward
              </Typography>
              <Typography className="text-lg sm:text-xl font-bold">
                Your Future
              </Typography>
            </div>
            <Typography className="font-medium max-w-xs m-auto text-[#626A6A] text-sm sm:text-base">
              From financial literacy to career readiness, we equip you with the
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
