import { Typography } from "@material-tailwind/react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { ContactUs, QuickLinks, Services } from "../components/utils/data";
import { Facebook, Instaram, X } from "../assets/svg";

const Footer = () => {
  const handleScroll = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 50);
  };
  return (
    <main className="bg-[#0A2928]">
      <div className="py-18 container px-4 md:px-0 md:max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full flex flex-col gap-6 md:w-auto">
          <Link to="/">
            <img src={logo} alt="logo" className="max-w-[200px]" />
          </Link>
          <Typography className="max-w-sm font-normal text-white">
            At Talley we provide safe, secure, and welcoming accomodation for
            young adults (18+). empowering them to live independently with
            confidence whether you're Transitioning from care, seeking a
            supportive comunity, or taking your next step in life, we're here to
            help.
          </Typography>
          <div className="flex items-center gap-5">
            <Facebook />
            <X />
            <Instaram />
          </div>
        </div>
        <div className="w-full md:w-auto">
          <section className="flex flex-col md:flex-row text-[#5C6C72] mt-6 gap-18 md:justify-between">
            <div className="flex flex-col">
              <Typography className="font-bold mb-8 text-[#48D1CC] text-xl">
                Quick Links
              </Typography>
              <div className="flex flex-col gap-4">
                {QuickLinks.map((links, index) => (
                  <div key={index} className="max-w-[150px]">
                    <Link to={links.to} onClick={handleScroll}>
                      <Typography className="font-medium text-white text-md">
                        {links.label}
                      </Typography>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Typography className="font-bold mb-8 text-[#48D1CC] text-xl">
                Services
              </Typography>
              <div className="flex flex-col gap-4">
                {Services.map((service, index) => (
                  <div key={index}>
                    <Link to={service.to} onClick={handleScroll}>
                      <Typography className="font-medium text-white text-md">
                        {service.label}
                      </Typography>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Typography className="font-bold mb-8 text-[#48D1CC] text-xl">
                Contact Us
              </Typography>
              <div className="flex flex-col gap-4">
                {ContactUs.map((contact, index) => (
                  <div key={index} onClick={handleScroll}>
                    <Typography className="font-medium text-white text-md">
                      {contact.label}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <hr className="text-[#48D1CC] mt-3" />
      <div className="py-8 font-medium text-[#5C6C72] flex flex-col md:flex-row justify-center md:justify-between container max-w-7xl mx-auto gap-4">
        <Typography className="text-center font-semibold text-white md:text-left">
          {" "}
          © {new Date().getFullYear()} TalleyCares. All rights reserved.
        </Typography>
        <div className="flex gap-4 font-semibold text-white md:gap-9 justify-center md:justify-start">
          <Typography>Terms & Conditions</Typography>
          <Typography>Privacy Policy</Typography>
        </div>
      </div>
    </main>
  );
};

export default Footer;
