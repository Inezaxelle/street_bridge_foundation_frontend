import React from "react";
import logo from "../../images/sbf_logo.svg";
import { Route, useNavigate, Routes } from "react-router-dom";
import Donate from "../donate/Donate";
const DonateNow: React.FC = () => {
  const navigate = useNavigate();
  const navigateDonate=()=>{
    navigate("/donate")
  }
  return (
    <div className="flex bg-white w-full md:px-24 px-6 h-full items-center">
      <div className="w-1/2 md:flex hidden justify-center items-center">
        <img src={logo} alt="sbf logo" />
      </div>
      <div className="md:w-1/3 w-full flex flex-col justify-center mx-auto py-6">
        <span className="text-[#082244] font-bold text-lg mx-auto">
          Join Street Bridge Foundation in Transforming the lives of vulnerable
          kids on streets back to their homes and prepare them for their future
          careers
        </span>
        <button className="text-white bg-[#082244] px-5 py-2 w-1/2 rounded-xl mt-6 hover:text-[#082244] hover:bg-white hover:border hover:border-[#082244] mb-6" onClick={navigateDonate}>Donate Now</button>
        <Routes>
          <Route path="/donate" element={<Donate/>}></Route>
        </Routes>
      </div>
    </div>
  );
};
export default DonateNow;
