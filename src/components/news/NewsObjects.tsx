import React from "react";
import data from "../../news.json";
import NewsCard from "./NewsCard";
import { useState } from "react";
import { New } from "../../@types/types";
interface NewsObjectsProps {}

const NewsObjects: React.FC<NewsObjectsProps> = () => {
  const [news] = useState<New[] | null>(data.news);

  return (
    <div className="bg-[#082244] text-white lg:px-24 px-6">
      {news?.map((newss) => (
        <NewsCard key={newss.category} {...newss} />
      ))}
    </div>
  );
};

export default NewsObjects;
