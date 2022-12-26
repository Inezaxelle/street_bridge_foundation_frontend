import React from "react";
import family from "../../images/family.svg";
import active from "../../images/active.svg";
import donation from "../../images/donation.svg";
import partners from "../../images/partners.svg";
const Bottom: React.FC = () => {
  return (
    <div className="h-full bg-[#082244] w-full md:flex grid grid-cols-2 gap-4 md:py-0 py-4 justify-between text-white font-bold md:px-24 px-6">
      <div className="h-full flex items-center">
        <div>
          <img src={family} alt=""></img>
        </div>
        <div className="flex flex-col md:ml-5 ml-2">
          <span className="md:text-4xl">50+</span>
          <span className="md:text-[0.8rem] text-[0.7rem]">
            Families supported
          </span>
        </div>
      </div>

      <div className="h-full flex items-center">
        <div>
          <img src={donation} alt=""></img>
        </div>
        <div className="flex flex-col md:ml-5 ml-2">
          <span className="md:text-4xl">120+</span>
          <span className="md:text-[0.8rem] text-[0.7rem]">
            Donations Received
          </span>
        </div>
      </div>

      <div className="h-full flex items-center">
        <div>
          <img src={active} alt=""></img>
        </div>
        <div className="flex flex-col md:ml-5 ml-2">
          <span className="md:text-4xl">5+</span>
          <span className="md:text-[0.8rem] text-[0.7rem]">
            Active Families
          </span>
        </div>
      </div>

      <div className="h-full flex items-center">
        <div>
          <img src={partners} alt=""></img>
        </div>
        <div className="flex flex-col md:ml-5 ml-2">
          <span className="md:text-4xl">3+</span>
          <span className="md:text-[0.8rem] text-[0.7rem]">
            New Partners Earned
          </span>
        </div>
      </div>
    </div>
  );
};
export default Bottom;
