import { Button, Typography } from "@material-tailwind/react";
import frame from "../../assets/images/frame3.png";
import { Arrow, Bag, Bulb, Career, Team } from "../../assets/svg";

const JoinTalley = () => {
  return (
    <main className="bg-[#48D1CC] p-6 md:p-15">
      <div className="container max-w-7xl grid grid-cols-1 lg:grid-cols-2 mx-auto gap-8 md:gap-0">
        <div className="order-2 lg:order-1 flex justify-center">
          <img
            src={frame}
            alt="team"
            className="w-full max-w-lg lg:max-w-none"
          />
        </div>
        <div className="order-1 lg:order-2 flex text-white justify-center flex-col">
          <Typography className="font-semibold mb-4 text-xl md:text-2xl">
            Careers
          </Typography>
          <div className="mb-6 md:mb-8">
            <Typography className="playfair mb-3 font-extrabold text-3xl md:text-4xl lg:text-5xl">
              Join the Talley Team
            </Typography>
            <Typography className="font-medium max-w-2xl text-base md:text-inherit">
              Make a difference in the lives of young adults (18+) by joining Talley.
              We are dedicated to providing safe, supportive, and empowering
              accommodation for individuals transitioning to independent living.
              If you're passionate about making a positive impact, we'd love to
              hear from you!
            </Typography>
          </div>

          <div className="grid mb-6 md:mb-8 grid-cols-2 md:grid-cols-4 items-center gap-4 md:gap-5">
            <div className="flex flex-col items-center md:items-start">
              <Bag />
              <Typography className="font-semibold mt-3 text-base md:text-lg">
                Meaningful
              </Typography>
              <Typography className="font-semibold text-base md:text-lg">
                Work
              </Typography>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <Team />
              <Typography className="font-semibold text-base md:text-lg mt-3">
                Supportive
              </Typography>
              <Typography className="font-semibold text-base md:text-lg">
                Team
              </Typography>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <Career />
              <Typography className="font-semibold text-base md:text-lg mt-3">
                Career
              </Typography>
              <Typography className="font-semibold text-base md:text-lg">
                Development
              </Typography>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <Bulb />
              <Typography className="font-semibold text-base md:text-lg mt-3">
                Career
              </Typography>
              <Typography className="font-semibold text-base md:text-lg">
                Opportunities
              </Typography>
            </div>
          </div>
          <Button className="bg-white w-fit items-center cursor-pointer gap-4 flex px-6 md:px-8 text-[#48D1CC] rounded-full py-3 font-bold text-lg md:text-xl mx-auto md:mx-0">
            Join Our Team
            <Arrow color="#48D1CC" />
          </Button>
        </div>
      </div>
    </main>
  );
};

export default JoinTalley;
