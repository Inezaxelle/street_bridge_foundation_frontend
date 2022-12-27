import React from "react";
import line from "../../images/line.svg";
import blood from "../../images/donate.svg";

const Stories: React.FC = () => {
  return (
    <div className="md:px-24 px-6">
      <div className="md:flex py-14 font-bold">
        <span className="mr-4">STORIES</span> <br className="md:hidden" />
        <img src={line} alt="" className="md:block hidden" />
        <span className="ml-4 md:text-[1em] text-xs">
          LATEST FROM STREET BRIDGE FOUNDATIONn
        </span>
      </div>
      <div className="flex w-full h-full">
        <div className="lg:block hidden w-[60%]">
          <img src={blood} alt="good deed" className="h-[601px]" />
        </div>
        <div className="lg:flex flex-col bg-[#FFFFFF] lg:w-[40%] h-[400px] lg:px-32 px-6 text-black lg:z-40 mt-14">
          <span className="mb-6 mt-14">#Blood donation</span>
          <span>
            #StreetBridgeFoundation donates blood in memories of the vulnerable
            patients who lost their lives due to lack of a quick transfusion.
            (April, 2022)
          </span>
          <button className="text-white bg-[#082244] rounded-2xl p-3 w-4/5 mt-6">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};
export default Stories;
