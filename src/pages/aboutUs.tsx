import { useEffect } from "react";
import Hero from "../components/aboutUs/hero";
import WhyChooseTalley from "../components/aboutUs/whyChooseTalley";
import JoinTalley from "../components/constants/joinTalley";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Hero />
      <WhyChooseTalley />
      <JoinTalley />
    </main>
  );
};

export default AboutUs;
