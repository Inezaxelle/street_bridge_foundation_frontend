import React from "react";
import line from "../../images/line.svg";
const Donate: React.FC = () => {
  return (
    <div>
      <div className="md:flex my-14 font-bold">
        <span className="mr-4">IMPACT AREAS</span> <br className="md:hidden" />
        <img src={line} alt="" className="md:block hidden" />
        <span className="ml-4 md:text-[1em] text-xs">OUR PROGRAMS</span>
      </div>
    </div>
  );
};
export default Donate;
