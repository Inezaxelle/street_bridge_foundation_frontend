import React from "react";
import logo from "../../images/sbf_logo.svg";
const DonateNow: React.FC = () => {
  return (
    <div className="flex bg-white w-full md:px-24 px-6 h-full items-center">
      <div className="w-1/2 flex justify-center items-center">
        <img src={logo} alt="sbf logo" />
      </div>
      <div className="w-1/3 flex flex-col justify-center mx-auto">
        <span className="text-[#082244] font-bold text-lg mx-auto">
          Join Street Bridge Foundation in Transforming the lives of vulnerable
          kids on streets back to their homes and prepare them for their future
          careers
        </span>
        <button className="text-white bg-[#082244] px-5 py-2 w-1/2 rounded-xl mt-6">Donate Now</button>
      </div>
    </div>
  );
};
export default DonateNow;
