import React from "react";
import { Program } from "../../@types/types";
const ProgCard: React.FC<Program> = ({ title, description }) => {
  return (
    
      <div className="flex flex-col lg:w-1/4 justify-between md:h-[250px]">
        <div className="flex flex-col">
          <span className="text-[#082244] font-bold">{title}</span>
          <span className="text-[#696969] ">{description}</span>
        </div>
        <button className="text-white bg-[#082244] py-1 px-3 rounded-xl md:mb-0 mb-4 hover:text-[#082244] hover:bg-white hover:border hover:border-[#082244]">
          Learn More
        </button>
      </div>
  );
};
export default ProgCard;