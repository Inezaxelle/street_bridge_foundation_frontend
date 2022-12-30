import React from "react";
import { New } from "../../@types/types";

const NewsCard: React.FC<New> = ({ category, date, description, image }) => {
  return (
    <div className="md:flex py-6">
      <div className="flex flex-col md:w-1/2">
        <div className="w-2/3">
          <div className="flex mb-4">
            <span>{category} &#x2223; </span>
            <span className="ml-1">{date}</span>
          </div>
          <div className="mb-4">
            <span>{description}</span>
          </div>
          <div>
            <button className="bg-white text-[#082244] px-4 py-2 hover:bg-[#082244] hover:text-white hover:border hover:border-white">
              READ MORE
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 md:flex justify-end">
        <img src={image} alt="team helping" />
      </div>
    </div>
  );
};

export default NewsCard;
