import React, { useState } from "react";
import { Program } from "../../@types/types";
import ProgCard from "./progCard";
import data from "../../programs.json";
import line from "../../images/line.svg";

const Prog: React.FC = () => {
  const [programs] = useState<Program[] | null>(data.programs);
  return (
    <div className="md:px-24 px-6 mb-24 w-full">
      <div className="md:flex my-14 font-bold">
        <span className="mr-4">IMPACT AREAS</span> <br className="md:hidden" />
        <img src={line} alt="" className="md:block hidden" />
        <span className="ml-4 md:text-[1em] text-xs">OUR PROGRAMS</span>
      </div>
      <div className="lg:flex w-full grid md:grid-cols-2 sm:grid-cols-1 gap-3 h-[60%]">
        {programs?.map((program) => (
          <ProgCard key={program.title} {...program} />
        ))}
      </div>
    </div>
  );
};
export default Prog;