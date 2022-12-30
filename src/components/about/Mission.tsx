import React from "react";
import logo from "../../images/sbf_logo.svg";
interface MissionProps {}

const Mission: React.FC<MissionProps> = () => {
  return (
    <div className="bg-[#082244] py-8 lg:px-24 px-6 pb-12">
      <div className="text-white mb-6">Our Mission</div>
      <div className="flex">
        <img src={logo} alt="sbf logo" className="w-1/2 bg-white h-[522px]"/>
        <p className="w-1/2 bg-[#F9F5E8] text-[#082244] flex justify-center pt-14 my-6 px-6">
          Street Bridge Foundation mandates to impacting and empowering the
          lives of the marginalized kids who live on the street. In doing so, we
          take them back to school( If need be) or to career fields of interest.
          This includes hair dressing, mechanics, tailoring, business, among
          other life survival skills which are also given to their parents so
          that they could earn a living with them and support their household
          economies.
        </p>
      </div>
    </div>
  );
};

export default Mission;
