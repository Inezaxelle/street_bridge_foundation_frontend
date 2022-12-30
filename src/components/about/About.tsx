import React from "react";
import Navigation from "../Navigation";
import AboutImage from "./AboutImage";
import DonateNow from "../landing/DonateNow";
import Footer from "../landing/Footer";
import Mission from "./Mission";
import Hear from "./Hear";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div>
      <Navigation />
      <AboutImage />
      <Mission />
      <Hear />
      <DonateNow />
      <Footer />
    </div>
  );
};

export default About;
