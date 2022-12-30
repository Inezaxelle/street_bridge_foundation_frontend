import React from "react";
import Navigation from "../Navigation";
import NewsImage from "./NewsImage";
import DonateNow from "../landing/DonateNow";
import Footer from "../landing/Footer";
import NewsObjects from "./NewsObjects";

interface NewsProps {}

const News: React.FC<NewsProps> = () => {
  return (
    <div>
      <Navigation />
      <NewsImage />
      <NewsObjects />
      <DonateNow />
      <Footer />
    </div>
  );
};

export default News;
