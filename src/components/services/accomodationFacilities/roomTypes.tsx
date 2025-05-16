import { Button, Typography } from "@material-tailwind/react";
import frame1 from "../../../assets/images/frame16.png";
import { Bed, Location, Person, Toilet, Wifi } from "../../../assets/svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const RoomTypes = () => {
  return (
    <main className="w-full mt-14 bg-[#EFFBFA] py-8 md:py-12 px-4 md:px-6">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
        <Link to={ROUTES.ROOM_DETAILS}>
          <div className="bg-white rounded-xl flex flex-col p-4 md:p-6 lg:p-8">
            <div className="flex justify-center mb-4">
              <img
                src={frame1}
                alt="image"
                className="w-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Typography className="font-extrabold text-lg md:text-xl">
                Private Ensuite Room
              </Typography>
              <div className="flex items-center gap-2">
                <Location />
                <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
                  Stratford, East London
                </Typography>
              </div>
              <Typography className="text-[#626A6A] font-semibold text-base md:text-lg">
                Mixed Gender | 16+ Provision
              </Typography>
            </div>

            <div className="grid mt-4 md:mt-6 grid-cols-3 gap-1 md:gap-2">
              <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
                <Bed />
                <span className="text-xs">1 Room</span>
              </Button>
              <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
                <Toilet />
                <span className="text-xs">1 Bath</span>
              </Button>
              <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
                <Wifi />
                <span className="text-xs">WiFi</span>
              </Button>
            </div>

            <div className="mt-4">
              <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm w-fit">
                <Person />
                <span className="text-xs">1 Person</span>
              </Button>
            </div>
          </div>
        </Link>

        <div className="bg-white rounded-xl flex flex-col p-4 md:p-6 lg:p-8">
          <div className="flex justify-center mb-4">
            <img
              src={frame1}
              alt="image"
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Typography className="font-extrabold text-lg md:text-xl">
              Modern Private Room
            </Typography>
            <div className="flex items-center gap-2">
              <Location />
              <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
                Kensington, London
              </Typography>
            </div>
            <Typography className="text-[#626A6A] font-semibold text-base md:text-lg">
              Mixed Gender | 16+ Provision
            </Typography>
          </div>

          <div className="grid mt-4 md:mt-6 grid-cols-3 gap-1 md:gap-2">
            <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
              <Bed />
              <span className="text-xs">1 Room</span>
            </Button>
            <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
              <Toilet />
              <span className="text-xs">1 Bath</span>
            </Button>
            <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
              <Wifi />
              <span className="text-xs">WiFi</span>
            </Button>
          </div>

          <div className="mt-4">
            <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm w-fit">
              <Person />
              <span className="text-xs">1 Person</span>
            </Button>
          </div>
        </div>
        <div className="bg-white rounded-xl flex flex-col p-4 md:p-6 lg:p-8">
          <div className="flex justify-center mb-4">
            <img
              src={frame1}
              alt="image"
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Typography className="font-extrabold text-lg md:text-xl">
              Cozy Private Loft Room
            </Typography>
            <div className="flex items-center gap-2">
              <Location />
              <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
                West End, London
              </Typography>
            </div>
            <Typography className="text-[#626A6A] font-semibold text-base md:text-lg">
              Mixed Gender | 16+ Provision
            </Typography>
          </div>

          <div className="grid mt-4 md:mt-6 grid-cols-3 gap-1 md:gap-2">
            <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
              <Bed />
              <span className="text-xs">1 Room</span>
            </Button>
            <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
              <Toilet />
              <span className="text-xs">1 Bath</span>
            </Button>
            <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
              <Wifi />
              <span className="text-xs">WiFi</span>
            </Button>
          </div>

          <div className="mt-4">
            <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm w-fit">
              <Person />
              <span className="text-xs">1 Person</span>
            </Button>
          </div>
        </div>
        <div className="bg-white rounded-xl flex flex-col p-4 md:p-6 lg:p-8">
          <div className="flex justify-center mb-4">
            <img
              src={frame1}
              alt="image"
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Typography className="font-extrabold text-lg md:text-xl">
              Accessible Private Room
            </Typography>
            <div className="flex items-center gap-2">
              <Location />
              <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
                Islington, North London
              </Typography>
            </div>
            <Typography className="text-[#626A6A] font-semibold text-base md:text-lg">
              Mixed Gender | 16+ Provision
            </Typography>
          </div>

          <div className="grid mt-4 md:mt-6 grid-cols-3 gap-1 md:gap-2">
            <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
              <Bed />
              <span className="text-xs">1 Room</span>
            </Button>
            <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
              <Toilet />
              <span className="text-xs">1 Bath</span>
            </Button>
            <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
              <Wifi />
              <span className="text-xs">WiFi</span>
            </Button>
          </div>

          <div className="mt-4">
            <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm w-fit">
              <Person />
              <span className="text-xs">1 Person</span>
            </Button>
          </div>
        </div>
        <div className="bg-white rounded-xl flex flex-col p-4 md:p-6 lg:p-8">
          <div className="flex justify-center mb-4">
            <img
              src={frame1}
              alt="image"
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Typography className="font-extrabold text-lg md:text-xl">
              Premium Private Room
            </Typography>
            <div className="flex items-center gap-2">
              <Location />
              <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
                Clifton Village, Bristol
              </Typography>
            </div>
            <Typography className="text-[#626A6A] font-semibold text-base md:text-lg">
              Mixed Gender | 16+ Provision
            </Typography>
          </div>

          <div className="grid mt-4 md:mt-6 grid-cols-3 gap-1 md:gap-2">
            <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
              <Bed />
              <span className="text-xs">1 Room</span>
            </Button>
            <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
              <Toilet />
              <span className="text-xs">1 Bath</span>
            </Button>
            <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
              <Wifi />
              <span className="text-xs">WiFi</span>
            </Button>
          </div>

          <div className="mt-4">
            <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm w-fit">
              <Person />
              <span className="text-xs">1 Person</span>
            </Button>
          </div>
        </div>
        <div className="bg-white rounded-xl flex flex-col p-4 md:p-6 lg:p-8">
          <div className="flex justify-center mb-4">
            <img
              src={frame1}
              alt="image"
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Typography className="font-extrabold text-lg md:text-xl">
              Private Garden Room
            </Typography>
            <div className="flex items-center gap-2">
              <Location />
              <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
                Gloucester, Cotswolds
              </Typography>
            </div>
            <Typography className="text-[#626A6A] font-semibold text-base md:text-lg">
              Mixed Gender | 16+ Provision
            </Typography>
          </div>

          <div className="grid mt-4 md:mt-6 grid-cols-3 gap-1 md:gap-2">
            <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
              <Bed />
              <span className="text-xs">1 Room</span>
            </Button>
            <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
              <Toilet />
              <span className="text-xs">1 Bath</span>
            </Button>
            <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
              <Wifi />
              <span className="text-xs">WiFi</span>
            </Button>
          </div>

          <div className="mt-4">
            <Button className="bg-white text-[#48D1CC] flex items-center justify-center p-1 md:p-2 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm w-fit">
              <Person />
              <span className="text-xs">1 Person</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoomTypes;
