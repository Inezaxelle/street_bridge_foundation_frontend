import React from "react";
import Navigation from "../Navigation";
import NewsImage from "./NewsImage";
import DonateNow from "../landing/DonateNow";
import Footer from "../landing/Footer";

interface NewsProps {}

const News: React.FC<NewsProps> = () => {
  return (
    <div>
      <Navigation />
      <NewsImage />
      <DonateNow />
      <Footer />
    </div>
  );
};

export default News;
