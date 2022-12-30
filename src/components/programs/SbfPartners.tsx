import React from "react";
import frame from "../../images/frame.jpg";
import isomo from "../../images/isomo.jpg";
import bridge from "../../images/bridge.jpg";
import agahozo from "../../images/agahozo.jpg";
import here from "../../images/here.jpg";
interface SbfPartnersProps {}

const SbfPartners: React.FC<SbfPartnersProps> = () => {
  return (
    <div className="bg-[#082244] py-8 lg:px-24 px-6 pb-12">
      <div className="text-white mb-6">Program Partners</div>
      <div className="md:flex">
        <div className="w-1/2 md:block hidden">
          <img src={frame} alt="sbf logo" className="mb-0" />
        </div>
        <div className="md:w-1/2 text-white flex flex-col mx-auto pt-14 my-6 px-6 mb:pb-0 pb-6">
          <p>
            Our cherished partners allow us to continue running our programs
            that are aimed at impacting and empowering the lives of the
            marginalized kids who live on the street. In doing so, we take them
            back to school( If need be) or to career fields of interest.
          </p>
          <button className="bg-white text-[#082244] px-4 py-2 mt-5 hover:bg-[#082244] hover:text-white hover:border hover:border-white">
            View Our Program{" "}
          </button>
        </div>
      </div>
      <div className="w-full md:flex justify-between">
        <img src={isomo} alt="" className="cursor-pointer mx-auto md:mb-0 mb-5 md:w-1/4" />
        <img src={bridge} alt="" className="cursor-pointer mx-auto md:mb-0 mb-5 md:w-1/4"/>
        <img src={agahozo} alt="" className="cursor-pointer mx-auto md:mb-0 mb-5 md:w-1/4" />
        <img src={here} alt="" className="cursor-pointer mx-auto md:mb-0 mb-5 md:w-1/4"/>
      </div>
    </div>
  );
};

export default SbfPartners;
