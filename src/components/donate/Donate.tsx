import React from "react";
import Navigation from "../Navigation";
import DonateImage from "./DonateImage";
import Footer from "../landing/Footer";
import DonateJoin from "./DonateJoin";

interface DonateProps {}

const Donate: React.FC<DonateProps> = () => {
  return (
    <div>
      <Navigation />
      <DonateImage />
      <DonateJoin />
      <Footer />
    </div>
  );
};

export default Donate;
