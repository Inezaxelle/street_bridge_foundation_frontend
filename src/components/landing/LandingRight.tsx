import React from "react";
import Navigation from "./Navigation";
import hero from "../../images/hero.svg";

const LandingRight: React.FC = () => {
  return (
    <div className="h-full bg-[#5B9431] w-1/2 pr-24 overflow-y-hidden md:block hidden">
      <Navigation />
      <img src={hero} alt="" className="w-full h-[120%] lg:block hidden" />
    </div>
    

    // <div className="h-screen bg-orange-500">
    //   <div className="w-full bg-black h-[15%]"></div>
    //   <div className="flex bg-red-200 h-full"> bg-[#5B9431]
    //     <div className="bg-green-400 w-1/4"></div>
    //     <div className="bg-indigo-400 w-1/4"></div>
    //     <div className="bg-purple-400 w-1/4"></div>
    //     <div className="bg-yellow-400 w-1/4"></div>
    //   </div>
    // </div>
  );
};
export default LandingRight;
