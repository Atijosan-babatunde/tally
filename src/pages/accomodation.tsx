import Hero from "../components/accomodation/hero";
import Aims from "../components/services/accomodationFacilities/aims";
import OtherServices from "../components/services/accomodationFacilities/otherServices";
import RoomSet from "../components/services/accomodationFacilities/roomSet";

const AccomodationFacilities = () => {
  return (
    <main>
      <Hero />
      <RoomSet />
      <Aims />
      <OtherServices />
    </main>
  );
};

export default AccomodationFacilities;
