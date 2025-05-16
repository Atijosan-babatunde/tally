import { Button, Typography } from "@material-tailwind/react";
import frame1 from "../../../assets/images/frame19.png";
import frame2 from "../../../assets/images/frame20.png";
import { Arrow } from "../../../assets/svg";

const OtherServices = () => {
  return (
    <main className="bg-[#EFFBFA] pt-6 md:pt-13 mt-8 md:mt-22 pb-8 md:pb-19 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6 md:mb-12">
          <Typography className="text-2xl md:text-3xl lg:text-4xl text-center font-extrabold playfair">
            Other Services
          </Typography>
        </header>
        <section>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-between">
            <img src={frame1} alt="frame" className="md:w-1/2 lg:w-auto" />
            <div className="flex flex-col mt-4 md:mt-0">
              <Typography className="font-extrabold text-lg md:text-xl mb-4 md:mb-8">
                Life Skills Development
              </Typography>
              <article>
                <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
                  At Talley, we beleive that independence is more than just
                  having a place to stay , its abou having confidence and skills
                  to build a successful future. Our Life Skills Development
                  program is designed to equip young adults with the practical
                  knowledge and experience they nee dto navigate with life with
                  ease.
                </Typography>
              </article>
              <Button className="bg-[#48D1CC] mt-6 md:mt-auto w-fit items-center cursor-pointer gap-2 md:gap-4 flex px-6 md:px-8 text-white rounded-full py-2 md:py-3 font-bold text-base md:text-xl">
                Read More
                <Arrow color="white" />
              </Button>
            </div>
          </div>
        </section>

        <section className="mt-12 md:mt-33">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="flex flex-col md:w-1/2 lg:w-auto order-2 md:order-1">
              <Typography className="font-extrabold text-lg md:text-xl mb-4 md:mb-8">
                Community Engagement
              </Typography>
              <article>
                <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
                  At Talley, we beleive that a strong community is teh
                  foundation for personal growth and independence. we foster a
                  supportive and inculsive enviroment where young adults can
                  build meaningful connections, develop social skills, and
                  engage in positive experiences that enrich their lives.
                </Typography>
              </article>
              <Button className="bg-[#48D1CC] mt-6 md:mt-auto w-fit items-center cursor-pointer gap-2 md:gap-4 flex px-6 md:px-8 text-white rounded-full py-2 md:py-3 font-bold text-base md:text-xl">
                Read More
                <Arrow color="white" />
              </Button>
            </div>
            <img
              src={frame2}
              alt="frame"
              className="md:w-1/2 lg:w-auto order-1 md:order-2"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default OtherServices;
