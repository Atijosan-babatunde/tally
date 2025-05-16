import { Typography } from "@material-tailwind/react";
import { Book, HandLove, HandShake, House, Light } from "../../assets/svg";

const GetInvolved = () => {
  return (
    <main className="w-full bg-[#EFFBFA] px-4 sm:px-6 py-8">
      <div className="max-w-7xl mx-auto pt-6 md:pt-10">
        <Typography className="text-black text-xl md:text-2xl text-center font-extrabold">
          Ways to Get Involved
        </Typography>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-10">
          <div className="bg-white rounded-2xl px-4 md:px-5 pb-6 md:pb-10 py-4">
            <div className="flex justify-between items-start">
              <div>
                <Typography className="font-extrabold text-lg md:text-xl">
                  Mentorship &
                </Typography>
                <Typography className="font-extrabold text-lg md:text-xl">
                  Guidance
                </Typography>
              </div>
              <HandShake />
            </div>
            <Typography className="mt-3 md:mt-4 text-[#626A6A] text-sm md:text-base font-medium">
              Provide one-on-one support and encouragement to young adults.
            </Typography>
          </div>

          <div className="bg-white rounded-2xl px-4 md:px-5 pb-6 md:pb-10 py-4">
            <div className="flex justify-between items-start">
              <div>
                <Typography className="font-extrabold text-lg md:text-xl">
                  Life Skills
                </Typography>
                <Typography className="font-extrabold text-lg md:text-xl">
                  Workshops
                </Typography>
              </div>
              <Light />
            </div>
            <Typography className="mt-3 md:mt-4 text-[#626A6A] text-sm md:text-base font-medium">
              Share your expertise in budgeting, cooking, career development, or
              well-being.
            </Typography>
          </div>

          <div className="bg-white rounded-2xl px-4 md:px-5 pb-6 md:pb-10 py-4">
            <div className="flex justify-between items-start">
              <div>
                <Typography className="font-extrabold text-lg md:text-xl">
                  Community
                </Typography>
                <Typography className="font-extrabold text-lg md:text-xl">
                  Engagement
                </Typography>
              </div>
              <House />
            </div>
            <Typography className="mt-3 md:mt-4 text-[#626A6A] text-sm md:text-base font-medium">
              Help organize social activities, events, and volunteering
              programs.
            </Typography>
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <div className="bg-white rounded-2xl px-4 md:px-5 pb-6 md:pb-10 py-4 w-full md:w-1/2 lg:w-1/3">
              <div className="flex justify-between items-start">
                <div>
                  <Typography className="font-extrabold text-lg md:text-xl">
                    Tutoring &
                  </Typography>
                  <Typography className="font-extrabold text-lg md:text-xl">
                    Education Support
                  </Typography>
                </div>
                <Book />
              </div>
              <Typography className="mt-3 md:mt-4 text-[#626A6A] text-sm md:text-base font-medium">
                Assist residents with studies, job applications, and career
                preparation.
              </Typography>
            </div>

            <div className="bg-white rounded-2xl px-4 md:px-5 pb-6 md:pb-10 py-4 w-full md:w-1/2 lg:w-1/3">
              <div className="flex justify-between items-start">
                <div>
                  <Typography className="font-extrabold text-lg md:text-xl">
                    General
                  </Typography>
                  <Typography className="font-extrabold text-lg md:text-xl">
                    Volunteering
                  </Typography>
                </div>
                <HandLove />
              </div>
              <Typography className="mt-3 md:mt-4 text-[#626A6A] text-sm md:text-base font-medium">
                Support daily operations, facility upkeep, and resident
                well-being.
              </Typography>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default GetInvolved;
