import React from "react";
import gram from "../../images/moneygram.svg";
import mtn from "../../images/mtn.svg";
import coffee from "../../images/coffee.svg";
interface MethodsProps {}

const Methods: React.FC<MethodsProps> = () => {
  return (
    <div className="md:w-1/2 w-full flex flex-col items-end">
      <div className="w-full flex flex-col items-end mt-10">
        <span className="flex justify-center lg:text-3xl text-2xl mb-6">Donate to us with:</span>
        <img src={gram} alt="money gram" className="h-[77.87px] cursor-pointer" />
        <img src={mtn} alt="mtn" className="h-[246px] cursor-pointer" />
        <img src={coffee} alt="coffee" className="h-[302px] cursor-pointer" />
      </div>
    </div>
  );
};

export default Methods;
