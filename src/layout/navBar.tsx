import { useState } from "react";
import { useLocation, NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import {
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { ChevronDown, Menu as MenuIcon, X } from "lucide-react";
import { ROUTES } from "../components/constants/routes";

const serviceSubLinks = [
  {
    href: `${ROUTES.WHAT_WE_OFFER}/life-development-skills`,
    label: "Life Skills Development",
  },
  {
    href: `${ROUTES.WHAT_WE_OFFER}/community`,
    label: "Community Engagement",
  },
];

const careersSubLinks = [
  {
    href: `${ROUTES.CAREERS}/join-our-team`,
    label: "Join Our Team",
  },
  {
    href: `${ROUTES.CAREERS}/volunteer`,
    label: "Volunteering Opportunities",
  },
];

const navLinks = [
  { href: ROUTES.ABOUT_US, label: "About Us" },
  { href: ROUTES.ACCOMODATION, label: "Accomodation" },
];

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileCareerOpen, setMobileCareerOpen] = useState(false);

  const getLinkClassName = (href: string) => {
    const isActive =
      location.pathname === href ||
      (href === ROUTES.WHAT_WE_OFFER &&
        location.pathname.includes(ROUTES.WHAT_WE_OFFER));
    return `transition-colors tracking-wider hover:text-[#48D1CC] ${
      isActive ? "text-[#48D1CC]" : "text-[#5C6C72]"
    }`;
  };

  return (
    <div className="bg-[#EFFBFA]">
      <div className="container max-w-full px-4 md:px-6 lg:max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-20">
          <div className="flex gap-4 md:gap-10 items-center">
            <NavLink to={ROUTES.HOME}>
              <img src={logo} alt="logo" className="h-10 md:h-12" />
            </NavLink>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-6 xl:gap-10">
              <li>
                <NavLink
                  to={ROUTES.ABOUT_US}
                  className={getLinkClassName(ROUTES.ABOUT_US)}
                >
                  <Typography placeholder="" className="font-semibold text-lg">
                    About Us
                  </Typography>
                </NavLink>
              </li>

              <li>
                <Menu
                  open={isOpen}
                  handler={setIsOpen}
                  placement="bottom"
                  offset={5}
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 10 },
                  }}
                >
                  <MenuHandler>
                    <button
                      className={`flex cursor-pointer items-center gap-1 ${getLinkClassName(
                        ROUTES.WHAT_WE_OFFER
                      )}`}
                    >
                      <Typography
                        className="font-semibold text-lg"
                        placeholder=""
                      >
                        What We Offer
                      </Typography>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </MenuHandler>
                  <MenuList
                    className="bg-[#48D1CC] border-none shadow-xl rounded-md mt-2 p-2"
                    placeholder=""
                  >
                    {serviceSubLinks.map(({ href, label }) => (
                      <MenuItem
                        key={href}
                        placeholder=""
                        className="p-0 hover:bg-transparent focus:bg-transparent active:bg-transparent"
                      >
                        <NavLink
                          to={href}
                          className="w-full block py-2 px-4 text-start text-white hover:text-[#48D1CC] hover:bg-[#EFFBFA] rounded"
                        >
                          <Typography placeholder="" className="font-medium">
                            {label}
                          </Typography>
                        </NavLink>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </li>

              {navLinks.slice(1).map(({ href, label }) => (
                <li key={href}>
                  <NavLink to={href} className={getLinkClassName(href)}>
                    <Typography
                      placeholder=""
                      className="font-semibold text-lg"
                    >
                      {label}
                    </Typography>
                  </NavLink>
                </li>
              ))}

              <li>
                <Menu
                  open={isCareerOpen}
                  handler={setIsCareerOpen}
                  placement="bottom"
                  offset={5}
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 10 },
                  }}
                >
                  <MenuHandler>
                    <button
                      className={`flex cursor-pointer items-center gap-1 ${getLinkClassName(
                        ROUTES.CAREERS
                      )}`}
                    >
                      <Typography
                        className="font-semibold text-lg"
                        placeholder=""
                      >
                        Careers
                      </Typography>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          isCareerOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </MenuHandler>
                  <MenuList
                    className="bg-[#48D1CC] border-none shadow-xl rounded-md mt-2 p-2"
                    placeholder=""
                  >
                    {careersSubLinks.map(({ href, label }) => (
                      <MenuItem
                        key={href}
                        placeholder=""
                        className="p-0 hover:bg-transparent focus:bg-transparent active:bg-transparent"
                      >
                        <NavLink
                          to={href}
                          className="w-full block py-2 px-4 text-start text-white hover:text-[#48D1CC] hover:bg-[#EFFBFA] rounded"
                        >
                          <Typography placeholder="" className="font-medium">
                            {label}
                          </Typography>
                        </NavLink>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </li>

              <li>
                <Link to="/careers/join-our-team">
                  <Button className="bg-[#48D1CC] text-white rounded-full px-6 py-3">
                    <Typography
                      className="font-bold cursor-pointer text-lg"
                      placeholder=""
                    >
                      Contact Us
                    </Typography>
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#5C6C72] hover:text-[#48D1CC] focus:outline-none p-1"
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#EFFBFA] py-4 px-4 shadow-lg rounded-b-lg absolute left-0 right-0 z-50">
            <ul className="flex flex-col space-y-4">
              <li>
                <NavLink
                  to={ROUTES.ABOUT_US}
                  className={getLinkClassName(ROUTES.ABOUT_US)}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Typography placeholder="" className="font-semibold text-lg">
                    About Us
                  </Typography>
                </NavLink>
              </li>

              <li className="border-b border-gray-100 pb-2">
                <div className="flex flex-col">
                  <button
                    className={`flex items-center justify-between w-full ${getLinkClassName(
                      ROUTES.WHAT_WE_OFFER
                    )}`}
                    onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                  >
                    <Typography
                      className="font-semibold text-lg"
                      placeholder=""
                    >
                      What We Offer
                    </Typography>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        mobileServiceOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileServiceOpen && (
                    <div className="ml-4 mt-3 space-y-3">
                      {serviceSubLinks.map(({ href, label }) => (
                        <NavLink
                          key={href}
                          to={href}
                          className="block text-[#5C6C72] hover:text-[#48D1CC]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Typography placeholder="" className="font-medium">
                            {label}
                          </Typography>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              </li>

              <li className="border-b border-gray-100 pb-2">
                <NavLink
                  to={ROUTES.ACCOMODATION}
                  className={getLinkClassName(ROUTES.ACCOMODATION)}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Typography placeholder="" className="font-semibold text-lg">
                    Accomodation
                  </Typography>
                </NavLink>
              </li>

              <li className="border-b border-gray-100 pb-2">
                <div className="flex flex-col">
                  <button
                    className={`flex items-center justify-between w-full ${getLinkClassName(
                      ROUTES.CAREERS
                    )}`}
                    onClick={() => setMobileCareerOpen(!mobileCareerOpen)}
                  >
                    <Typography
                      className="font-semibold text-lg"
                      placeholder=""
                    >
                      Careers
                    </Typography>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        mobileCareerOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileCareerOpen && (
                    <div className="ml-4 mt-3 space-y-3">
                      {careersSubLinks.map(({ href, label }) => (
                        <NavLink
                          key={href}
                          to={href}
                          className="block text-[#5C6C72] hover:text-[#48D1CC]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Typography placeholder="" className="font-medium">
                            {label}
                          </Typography>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              </li>

              <li className="pt-2">
                <Link
                  to="/careers/join-our-team"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="bg-[#48D1CC] text-white rounded-full px-6 py-3 w-full">
                    <Typography
                      className="font-bold cursor-pointer"
                      placeholder=""
                    >
                      Contact Us
                    </Typography>
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
