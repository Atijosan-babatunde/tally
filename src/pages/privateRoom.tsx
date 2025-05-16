import SubHero from "../components/accomodation/subHero";
import JoinTalley from "../components/constants/joinTalley";
import PrivateRooms from "../components/services/accomodationFacilities/roomTypes";

const PrivateRoom = () => {
  return (
    <main>
      <SubHero />
      <PrivateRooms />
      <JoinTalley />
    </main>
  );
};

export default PrivateRoom;
