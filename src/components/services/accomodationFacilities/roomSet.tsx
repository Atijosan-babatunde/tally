import { Button, Typography } from "@material-tailwind/react";
import frame1 from "../../../assets/images/frame16.png";
import frame2 from "../../../assets/images/frame17.png";
import frame3 from "../../../assets/images/frame18.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import {
  BedRoom,
  Sofa,
  Chair,
  Lamp,
  Library,
  Table,
  Cabinet,
} from "../../../assets/svg";

interface IconOverlayProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  position: { top: number; left: number };
  tooltip?: string;
}

const IconOverlay = ({ icon: Icon, position, tooltip }: IconOverlayProps) => {
  return (
    <div
      className="absolute group cursor-pointer hidden sm:block"
      style={{
        top: `${position.top}%`,
        left: `${position.left}%`,
      }}
    >
      <Icon />
      {tooltip && (
        <Typography className="hidden group-hover:block text-[#626A6A] font-medium absolute z-10 p-2 bg-white rounded shadow-lg text-sm w-32 sm:w-48 md:w-64 lg:w-100 mt-2">
          {tooltip}
        </Typography>
      )}
    </div>
  );
};

const RoomSet = () => {
  const privateRoomIcons = [
    {
      icon: Lamp,
      position: { top: 42, left: 30 },
      tooltip:
        "This table lamp includes a sturdy base, adjustable neck, soft touch switch, energy-efficient LED bulb, and a stylish lampshade for focused and ambient lighting.",
    },
    {
      icon: Chair,
      position: { top: 65, left: 25 },
      tooltip:
        "This chair includes an adjustable headrest, lumbar support, seat height control, swivel base, mesh back, soft cushion in-built, and adjustable armrests for comfort and flexibility.",
    },
    {
      icon: BedRoom,
      position: { top: 75, left: 40 },
      tooltip:
        "This bed features a sturdy frame, soft headboard, supportive mattress, breathable bedding, under-bed storage, and non-slip legs for safety and comfort.",
    },
    {
      icon: Table,
      position: { top: 85, left: 15 },
      tooltip:
        "This study desk features a spacious top, built-in drawers, cable management holes, and a smooth surface for comfortable and organized studying.",
    },
    {
      icon: Library,
      position: { top: 25, left: 15 },
      tooltip:
        "This bookshelf features sturdy wooden shelves, a stable frame, anti-tip safety straps, smooth edges, and adjustable shelf heights for flexible storage and display.",
    },
  ];

  const sharedSpaceIcons = [
    {
      icon: Chair,
      position: { top: 40, left: 60 },
      tooltip:
        "This chair includes an adjustable headrest, lumbar support, seat height control, swivel base, mesh back, soft cushion in-built, and adjustable armrests for comfort and flexibility.",
    },
    {
      icon: Chair,
      position: { top: 75, left: 50 },
      tooltip:
        "This dining chair features a cushioned seat, supportive backrest, sturdy wooden legs, smooth finish, and non-slip feet for comfort and stability.",
    },
    {
      icon: Table,
      position: { top: 60, left: 35 },
      tooltip:
        "This dining table includes a solid tabletop, strong legs, smooth edges, durable finish, and ample space for comfortable family meals.",
    },
    {
      icon: Cabinet,
      position: { top: 55, left: 70 },
      tooltip:
        "This kitchen cabinet features adjustable shelves, smooth-closing doors, sturdy handles, a durable finish, and organized compartments for easy storage.",
    },
    {
      icon: Sofa,
      position: { top: 60, left: 15 },
      tooltip:
        "This sofa features plush cushions, a sturdy frame, soft upholstery, supportive armrests, and non-slip feet for comfort and durability.",
    },
  ];

  const counsellingIcons = [
    {
      icon: Chair,
      position: { top: 70, left: 50 },
      tooltip:
        "This chair provides comfortable seating for counselling sessions, with ergonomic design and supportive cushioning.",
    },
  ];

  return (
    <main className="w-full py-0 md:py-12 px-4 sm:px-6 lg:px-0">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
        <div className="bg-[#EFFBFA] rounded-xl flex flex-col p-4 md:p-8">
          <div className="flex justify-center mb-4 relative">
            <img
              src={frame1}
              alt="Private Room"
              className="w-full object-cover"
            />
            {privateRoomIcons.map((iconData, index) => (
              <IconOverlay
                key={`private-${index}`}
                icon={iconData.icon}
                position={iconData.position}
                tooltip={iconData.tooltip}
              />
            ))}
          </div>
          <div className="flex flex-col space-y-2 md:space-y-4">
            <Typography className="font-extrabold text-lg md:text-xl">
              Private Rooms
            </Typography>
            <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
              Comfortable living options tailored to individual preferences.
            </Typography>
            <Link to={ROUTES.PRIVATE_ROOM}>
              <Button className="bg-[#48D1CC] mt-4 md:mt-8 w-fit items-center cursor-pointer gap-2 md:gap-4 flex px-4 md:px-8 text-white rounded-full py-2 md:py-3 font-bold text-sm md:text-xl">
                View Details
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-[#EFFBFA] rounded-xl flex flex-col p-4 md:p-8">
          <div className="flex justify-center mb-4 relative">
            <img
              src={frame2}
              alt="Modern Shared Space"
              className="w-full object-cover"
            />
            {sharedSpaceIcons.map((iconData, index) => (
              <IconOverlay
                key={`shared-${index}`}
                icon={iconData.icon}
                position={iconData.position}
                tooltip={iconData.tooltip}
              />
            ))}
          </div>
          <div className="flex flex-col space-y-2 md:space-y-4">
            <Typography className="font-extrabold text-lg md:text-xl">
              Modern Shared Spaces
            </Typography>
            <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
              Kitchens, lounges, and recreational areas equipped for residents
              needs.
            </Typography>
            <Link to={ROUTES.PRIVATE_ROOM}>
              <Button className="bg-[#48D1CC] mt-4 md:mt-8 w-fit items-center cursor-pointer gap-2 md:gap-4 flex px-4 md:px-8 text-white rounded-full py-2 md:py-3 font-bold text-sm md:text-xl">
                View Details
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-[#EFFBFA] rounded-xl flex flex-col p-4 md:p-8 sm:col-span-2 lg:col-span-1">
          <div className="flex justify-center mb-4 relative">
            <img
              src={frame3}
              alt="Counselling Support"
              className="w-full object-cover"
            />
            {counsellingIcons.map((iconData, index) => (
              <IconOverlay
                key={`counselling-${index}`}
                icon={iconData.icon}
                position={iconData.position}
                tooltip={iconData.tooltip}
              />
            ))}
          </div>
          <div className="flex flex-col space-y-2 md:space-y-4">
            <Typography className="font-extrabold text-lg md:text-xl">
              Counselling & Emotional Support
            </Typography>
            <Typography className="text-[#626A6A] font-medium text-sm md:text-base">
              Access to professional counselling services.
            </Typography>
            <Link to={ROUTES.PRIVATE_ROOM}>
              <Button className="bg-[#48D1CC] mt-4 md:mt-8 w-fit items-center cursor-pointer gap-2 md:gap-4 flex px-4 md:px-8 text-white rounded-full py-2 md:py-3 font-bold text-sm md:text-xl">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoomSet;
