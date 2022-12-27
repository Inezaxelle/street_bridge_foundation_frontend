import React from "react";
import LandingLeft from "./LandingLeft";
import LandingRight from "./LandingRight";
import Bottom from "./Bottom";
import Prog from "./Prog";

const Landing: React.FC = () => {
  return (
    <div>
      <div className="lg:h-[100vh] md:h-[70vh] bg-black">
        <div className="h-[85%] flex w-full">
          <LandingLeft />
          <LandingRight />
        </div>
        <div className="h-[15%] w-full">
          <Bottom />
        </div>
      </div>
      <div className="w-full h-[60vh]">
        <Prog />
      </div>
    </div>
  );
};

export default Landing;
