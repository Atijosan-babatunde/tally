import CommunityEngagements from "../components/services/lifeDevelopmentSkills/communityEngagement";
import Emotional from "../components/services/lifeDevelopmentSkills/emotional";
import Employment from "../components/services/lifeDevelopmentSkills/employment";
import FinancialIndependence from "../components/services/lifeDevelopmentSkills/financialIndependence";
import Hero from "../components/services/lifeDevelopmentSkills/hero";
import Housing from "../components/services/lifeDevelopmentSkills/housing";
import Independent from "../components/services/lifeDevelopmentSkills/independent";
import OurServices from "../components/services/lifeDevelopmentSkills/ourServices";

const LifeDevTools = () => {
  return (
    <main>
      <div>
        <Hero />
        <Independent />
        <Employment />
        <Emotional />
        <FinancialIndependence />
        <Housing />
        <CommunityEngagements />
        <OurServices />
      </div>
    </main>
  );
};

export default LifeDevTools;
