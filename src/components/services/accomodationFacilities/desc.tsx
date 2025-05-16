import { Button, Typography } from "@material-tailwind/react";
import frame from "../../../assets/images/frame23.png";
import frame2 from "../../../assets/images/frame24.png";
import { Bed, Location, Person, Toilet, Wifi } from "../../../assets/svg";

const Desc = () => {
  return (
    <main className="bg-white my-16 pt-9 px-4 md:px-6 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <section className="mb-8">
          <div className="flex flex-wrap gap-8 flex-col lg:flex-row">
            <div className="flex- min-w-[40%] w-full lg:w-auto">
              <div className="grid gap-7">
                <img
                  src={frame}
                  alt="Main room view"
                  className="w-full rounded-lg"
                />
                <div className="grid grid-cols-3 gap-5">
                  <img
                    src={frame2}
                    alt="Room view"
                    className="w-full rounded-lg"
                  />
                  <img
                    src={frame2}
                    alt="Room view"
                    className="w-full rounded-lg"
                  />
                  <img
                    src={frame2}
                    alt="Room view"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="flex- flex flex-col pt-2">
              <Typography className="text-3xl font-extrabold">
                Private Ensuite Room
              </Typography>
              <div className="flex mt-1 items-center gap-2">
                <Location />
                <Typography className="text-[#626A6A] font-medium">
                  Stratford, East London
                </Typography>
              </div>

              <div className="grid mt-6 grid-cols-3 gap-3">
                <Button className="bg-white text-[#48D1CC] flex items-center justify-center py-2 px-4 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
                  <Bed />
                  <span className="text-xs">1 Room</span>
                </Button>
                <Button className="bg-white text-[#48D1CC] flex items-center justify-center py-2 px-4 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
                  <Toilet />
                  <span className="text-xs">1 Bath</span>
                </Button>
                <Button className="bg-white text-[#48D1CC] flex items-center justify-center py-2 px-4 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm">
                  <Wifi />
                  <span className="text-xs">WiFi</span>
                </Button>
              </div>

              <div className="mt-4">
                <Button className="bg-white text-[#48D1CC] flex items-center justify-center py-2 px-4 border border-[#48D1CC] rounded-full gap-1 shadow-none hover:shadow-sm w-fit">
                  <Person />
                  <span className="text-xs">2 Persons</span>
                </Button>
              </div>

              <div className="grid gap-2 mt-8 grid-cols-1">
                <div className="rounded-xl bg-[#EFFBFA] p-3">
                  <Typography className="font-bold text-lg text-[#48D1CC]">
                    Gender
                  </Typography>
                  <Typography className="text-[#626A6A] font-medium text-lg">
                    Male Only
                  </Typography>
                </div>

                <div className="rounded-xl bg-[#EFFBFA] p-3">
                  <Typography className="font-bold text-lg text-[#48D1CC]">
                    Age Group
                  </Typography>
                  <Typography className="text-[#626A6A] font-medium text-lg">
                    18+
                  </Typography>
                </div>

                <div className="rounded-xl bg-[#EFFBFA] p-3">
                  <Typography className="font-bold text-lg text-[#48D1CC]">
                    Room Available
                  </Typography>
                  <Typography className="text-[#626A6A] font-medium text-lg">
                    1
                  </Typography>
                </div>
              </div>

              <Button className="bg-[#48D1CC] mt-8 w-fit items-center cursor-pointer gap-4 flex px-8 text-white rounded-full py-3 font-bold text-xl">
                Make An Enquiry
              </Button>
            </div>
          </div>
        </section>

        <section className="mt-12 border border-[#E6E6E6] rounded-lg p-6">
          <Typography className="text-2xl font-bold mb-4">
            Description
          </Typography>
          <Typography className="text-[#626A6A] font-medium mb-4">
            Enjoy comfort and privacy in this furnished, modern ensuite room in
            the heart of East London. Designed for young adults and
            professionals, this room features a cozy double bed with a premium
            mattress, a modern ensuite bathroom with a walk-in shower, and a
            practical study area complete with a desk and chair.
          </Typography>
          <Typography className="text-[#626A6A] font-medium mb-4">
            You'll also find a built-in wardrobe, mini fridge, and USB charging
            ports—perfect for daily convenience. With fast fibre WiFi and
            excellent transport links nearby, this space offers a peaceful and
            connected living experience in one of London's most dynamic
            neighborhoods.
          </Typography>
          <Typography className="text-[#626A6A] font-medium">
            Ideal for those seeking independence, comfort, and easy access to
            local amenities.
          </Typography>
        </section>
      </div>
    </main>
  );
};

export default Desc;
