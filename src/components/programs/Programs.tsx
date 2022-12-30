import React from "react";
import Navigation from "../Navigation";
import ProgImage from "./ProgImage";
import DonateNow from "../landing/DonateNow";
import Footer from "../landing/Footer";
import SbfPartners from "./SbfPartners";

interface ProgramsProps {}

const Programs: React.FC<ProgramsProps> = () => {
  return (
    <div>
      <Navigation />
      <ProgImage />
      <SbfPartners />
      <DonateNow />
      <Footer />
    </div>
  );
};

export default Programs;
