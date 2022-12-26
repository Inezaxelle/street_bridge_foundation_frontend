import React from "react";
import logo from "../../images/sbf_logo.svg";
import Navigation from "./Navigation";

const LandingLeft: React.FC = () => {
  return (
    <div className="h-full md:w-1/2 w-full bg-[#F9F5E8] md:pl-24">
      <div className="md:hidden mb-12">
        <Navigation />
      </div>
      <div className="flex justify-center md:justify-start">
        <img src={logo} alt="sbf logo" className="" />
      </div>
      <span className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl text-[#082244] md:block flex justify-center">
        Impacting and <br />
        empowering the <br />
        lives of the <br />
        marginalized kids <br />
        on streets
      </span>
      <div className="mt-12 flex justify-center md:justify-start md:mb-0 mb-4">
        <button className="bg-[#082244] text-white rounded-2xl mb-3 lg:px-4 px-3 mr-4 lg:w-fit w-32 hover:bg-[#F9F5E8] hover:text-[#082244] hover:border hover:border-[#082244] py-2">
          Learn More
        </button>
        <button className="text-[#082244] border border-[#082244] rounded-2xl mb-3 lg:px-4 px-3 mr-4 lg:w-fit w-32 hover:bg-[#082244] hover:text-white hover:border">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default LandingLeft;
