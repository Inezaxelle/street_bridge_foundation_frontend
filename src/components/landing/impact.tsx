import React from "react";
import line from "../../images/line.svg";
import image from "../../images/herman.jpg"
const Impact: React.FC = () => {
  return (
    <div className="md:px-24 px-6 bg-[#E7EFFB] pb-8">
      <div className="md:flex py-14 font-bold">
        <span className="mr-4">GIVING BACK</span> <br className="md:hidden" />
        <img src={line} alt="" className="md:block hidden" />
        <span className="ml-4 md:text-[1em] text-xs">GET INVOLVED</span>
      </div>
      <div className="flex w-full h-full">
        <div className="lg:flex flex-col bg-[#082244] lg:w-[60%] h-[505px] lg:px-32 px-6 text-white lg:z-40">
          <span className="mb-6 mt-14">Donate to our programs</span>
          <span>
            Directly Impact the future of countless families. It is only with
            the support from our donors that we are able to execute high-Impact
            programming that recognizes, supports, and fosters the wellbeing of
            families we help.
          </span>
          <button className="text-[#082244] bg-white rounded-2xl p-3 w-4/5 mt-6 hover:text-white hover:bg-[#082244] hover:border hover:border-white">Learn more</button>
        </div>
        <div className="absolute right-20 mt-5 lg:block hidden">
          <img src={image} alt="good deed" className="h-[505px]" />
        </div>
      </div>
    </div>
  );
};
export default Impact;
