import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import ResetPassword from "./ResetPassword";
interface ResetEmailProps {}

const ResetEmail: React.FC<ResetEmailProps> = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const navigateResetPassword=()=>{
    navigate('/resetPassword')
  }
  return (
    <div className="bg-[#082244] w-full h-screen flex items-center justify-center">
      <div className="bg-white flex flex-col w-4/5 h-4/5 items-center rounded-xl">
        <span className="text-[#082244] font-bold text-3xl my-10">Reset Password</span>
        <div className="flex flex-col w-4/5 mb-6">
          <label htmlFor="email" className="text-[#042144]">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email here"
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none border border-[#DEDEDE] py-1 text-black pl-2"
          />
        </div>
        <div className="flex flex-col w-4/5">
          <label htmlFor="confirmEmail" className="text-[#042144]">
            Confirm Email
          </label>
          <input
            type="email"
            name="confirmEmail"
            placeholder="Confirm your email here"
            className="text-black pl-2 outline-none border border-[#DEDEDE] py-1"
          />
        </div>
        <button className="text-white bg-[#042144] w-4/5 mt-10 py-3 font-bold"
        onClick={navigateResetPassword}>
          SEND
        </button>
        <Routes>
            <Route path="/resetPassword" element={<ResetPassword/>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default ResetEmail;
