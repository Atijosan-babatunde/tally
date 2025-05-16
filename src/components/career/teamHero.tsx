import { Facebook, Instaram, Mail, Phone, X } from "../../assets/svg";
import { Button, Typography } from "@material-tailwind/react";
import whatsapp from "../../assets/svg/logos_whatsapp-icon.svg";
import FormInput from "../general/formInput";

const TeamHero = () => {
  return (
    <main className="bg-[#EFFBFA] pb-12 md:pb-25 pt-6 md:pt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl m-auto">
        <header>
          <Typography className="text-3xl md:text-4xl lg:text-5xl text-center font-extrabold playfair">
            Get in Touch with{" "}
            <span className="italic text-[#48D1CC]">Talley</span>{" "}
          </Typography>
          <Typography className="max-w-lg font-medium text-center mt-11 mx-auto text-[#626A6A]">
            We're here to help! whether you have questions about our
            accomodation, support services, volunteering, or career
            opportunities, our team is ready to assist you.
          </Typography>
        </header>
      </div>

      <section className="max-w-6xl mt-8 md:mt-10 flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-between mx-auto">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col gap-2 md:gap-3">
            <Typography className="font-extrabold text-lg md:text-xl">
              Call Us
            </Typography>
            <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
              Call our team Mon-Fri from 8am - 5pm
            </Typography>
            <div className="flex gap-2">
              <Phone />
              <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
                +44 777 7506569
              </Typography>
            </div>
            <div className="flex gap-2">
              <Mail />
              <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
                talleycares@gmail.com
              </Typography>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:gap-3">
            <Typography className="font-extrabold text-lg md:text-xl">
              Chat with us
            </Typography>
            <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
              Speak to our team
            </Typography>
            <div className="flex gap-2">
              <img src={whatsapp} alt="whatsapp" />
              <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
                +44 777 7506569
              </Typography>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:gap-3">
            <Typography className="font-extrabold text-lg md:text-xl">
              Visit us
            </Typography>
            <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
              Address here, UK
            </Typography>
            <div className="flex gap-2">
              <img src={whatsapp} alt="whatsapp" />
              <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
                +44 777 7506569
              </Typography>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:gap-3">
            <Typography className="font-extrabold text-lg md:text-xl">
              Stay Connected
            </Typography>
            <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
              Follow us on social media for updates
            </Typography>
            <div className="flex items-center gap-2">
              <div>
                <Facebook />
              </div>
              <div>
                <X />
              </div>
              <div>
                <Instaram />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 w-full lg:w-[580px]">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <FormInput
                label="First Name"
                placeholder="First name"
                borderColor="#E0E0E0"
                className="focus:border-[#48D1CC] focus:ring-1 focus:ring-[#48D1CC] outline-none"
              />
            </div>
            <div className="flex-1">
              <FormInput
                label="Last Name"
                placeholder="Last name"
                borderColor="#E0E0E0"
                className="focus:border-[#48D1CC] focus:ring-1 focus:ring-[#48D1CC] outline-none"
              />
            </div>
          </div>
          <FormInput
            label="Email"
            placeholder="you@company.com"
            type="email"
            borderColor="#E0E0E0"
            className="focus:border-[#48D1CC] focus:ring-1 focus:ring-[#48D1CC] outline-none"
          />
          <FormInput
            label="Phone Number"
            placeholder="+44"
            type="tel"
            borderColor="#E0E0E0"
            className="focus:border-[#48D1CC] focus:ring-1 focus:ring-[#48D1CC] outline-none"
          />
          <div>
            <label className="mb-2 block font-bold text-base md:text-lg">
              Message
            </label>
            <textarea
              placeholder="Leave us a message"
              className="block px-4 py-2 rounded-md w-full border-[1px] border-[#E0E0E0] focus:border-[#48D1CC] focus:ring-1 focus:ring-[#48D1CC] outline-none placeholder:text-gray_4 bg-[#F9FAFB] text-base resize-none h-24 md:h-32"
            />
          </div>
          <Button className="bg-[#48D1CC] mt-4 w-full items-center cursor-pointer gap-2 md:gap-4 flex justify-center px-6 md:px-8 text-white rounded-full py-2 md:py-3 font-bold text-base md:text-xl">
            Send Message
          </Button>
        </div>
      </section>
    </main>
  );
};

export default TeamHero;
