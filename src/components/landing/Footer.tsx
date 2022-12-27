import React from "react";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";

const Footer: React.FC = () => {
  return (
    <div className="h-[20vh] w-full text-white bg-[#082244]">
      <div className="h-[80%] w-full flex md:px-24 px-6">
        <div className="w-[70%] flex">
          <div className="h-full w-1/3 flex items-center">
            <a href="#contact">Contact Us & FAQ </a>
          </div>
          <div className="h-full w-1/3 flex items-center">
            <a href="#policies">Legal policies</a>
          </div>
          <div className="h-full w-1/3 flex items-center">
            <a href="partners">Street Bridge partners</a>
          </div>
        </div>
        <div className="h-full w-[30%] flex items-center justify-end">
          <span className="mr-4">Follow Us</span>
          <a href="#facebook" className="mr-3"><img src={facebook} alt="facebook" /></a>
          <a href="#instagram" className="mr-3"><img src={instagram} alt="instagram" /></a>
          <a href="#twitter" className=""><img src={twitter} alt="twitter" /></a>
        </div>
      </div>
      <div className="h-[20%] w-full flex justify-center items-center border-t-2 border-white">
        <span>Copyright 2022 - Street Bridge Foundation</span>
      </div>
    </div>
  );
};

export default Footer;
