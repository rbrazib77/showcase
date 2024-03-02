import React from "react";
import AboutHero from "../component/aboutHero";
import Brand from "../component/brand";
import Mission from "../component/mission";
import Foundingteam from "../component/foundingteam";
import Journey from "../component/journey";
// import Video_two from "../component/video_two";
import Advisors from "../component/advisors";
import Partners from "../component/partners";
const About = () => {
  return (
    <div>
      <AboutHero />
      <Brand />
      <Mission/>
      <Foundingteam/>
      <Journey/>
      {/* <Video_two/> */}
      <Advisors/>
      <Partners/>
    </div>
  );
};

export default About;
