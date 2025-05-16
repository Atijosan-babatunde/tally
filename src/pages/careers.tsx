import { useParams } from "react-router-dom";
import Volunteer from "./volunteer";
import JoinOurTeam from "./joinOurTeam";

const Careers = () => {
  const { careerType } = useParams();

  const renderCareerContent = () => {
    switch (careerType) {
      case "volunteer":
        return <Volunteer />;
      case "join-our-team":
        return <JoinOurTeam />;
    }
  };

  return <main>{renderCareerContent()}</main>;
};

export default Careers;
