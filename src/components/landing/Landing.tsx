import React from "react";
import LandingLeft from "./LandingLeft";
import LandingRight from "./LandingRight";
import Bottom from "./Bottom";
import Prog from "./Prog";
import Donate from "./Donate";
import Stories from "./Stories";
import DonateNow from "./DonateNow";
import Footer from "./Footer";

const Landing: React.FC = () => {
  return (
    <div>
      <div className="2xl:h-[100vh] xl:h-[110vh] lg:h-[100vh] md:h-[70vh]">
        <div className="h-[85%] flex w-full">
          <LandingLeft />
          <LandingRight />
        </div>
        <div className="h-[15%] w-full">
          <Bottom />
        </div>
      </div>
      <div className="w-full lg:h-[60vh]">
        <Prog />
      </div>
      <div className="2xl:h-[100vh] lg:h-[110vh] h-[50vh] bg-[#E7EFFB]">
        <Donate />
      </div>
      <div className="2xl:h-[100vh] lg:h-[120vh] h-[50vh] bg-[#F9F5E8]">
        <Stories />
      </div>
      <div className="h-[50vh]">
        <DonateNow />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
