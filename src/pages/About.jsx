import React from "react";
import AboutHero from "../component/aboutHero";
import BrandAbout from "../component/brandAbout";
import Mission from "../component/mission";
import Foundingteam from "../component/foundingteam";
import Journey from "../component/journey";
import Advisors from "../component/advisors";
import Partners from "../component/partners";
const About = () => {
  return (
    <div>
      <AboutHero />
      <BrandAbout />
      <Mission/>
      <Foundingteam/>
      <Journey/>
      <Advisors/>
      <Partners/>
    </div>
  );
};

export default About;
