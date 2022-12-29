import React from "react";
import Navigation from "../Navigation";
import AboutImage from "./AboutImage";
import DonateNow from "../landing/DonateNow";
import Footer from "../landing/Footer";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div>
      <Navigation />
      <AboutImage />
      <DonateNow />
      <Footer />
    </div>
  );
};

export default About;
