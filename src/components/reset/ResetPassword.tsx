import React from "react";
import { useState } from "react";
interface ResetPasswordProps {}

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="bg-[#082244] w-full h-screen flex items-center justify-center">
      <div className="bg-white flex flex-col w-4/5 h-4/5 items-center rounded-xl">
        <span className="text-[#082244] font-bold text-3xl my-10">Reset Password</span>
        <div className="flex flex-col w-4/5 mb-6">
          <label htmlFor="password" className="text-[#042144]">
            password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password here"
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none border border-[#DEDEDE] py-1 text-black pl-2"
          />
        </div>
        <div className="flex flex-col w-4/5">
          <label htmlFor="confirmpassword" className="text-[#042144]">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirmpassword"
            value={ConfirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            placeholder="Enter your new password"
            className="text-black pl-2 outline-none border border-[#DEDEDE] py-1"
          />
        </div>
        <button className="text-white bg-[#042144] w-4/5 mt-10 py-3 font-bold">
          SEND
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
