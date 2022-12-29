import React from "react";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import logo from "../../images/sbf_logo.svg";
import ResetEmail from "../reset/ResetEmail";
interface LoginRightProps {}

const LoginRight: React.FC<LoginRightProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log(email);
  };
  const navigate = useNavigate();
  const navigateResetEmail = () => {
    navigate("/resetEmail");
  };
  return (
    <div className="bg-[#042144] h-screen md:w-2/3 w-full text-white">
      <div className="flex-col flex items-center w-4/5 mx-auto mt-10">
        <img src={logo} alt="logo" className="md:hidden" />
        <span>LOGIN INTO YOUR ACCOUNT</span>
        <div className="flex flex-col w-4/5 mb-6 mt-12">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email here"
            className="outline-none text-black pl-2 py-1"
          />
        </div>
        <div className="flex flex-col w-4/5">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-black pl-2 outline-none py-1"
            placeholder="Enter your password here"
          />
        </div>
        <button
          onClick={handleLogin}
          className="text-[#042144] bg-white w-4/5 mt-10 py-3 font-bold"
        >
          Login
        </button>
      </div>
      <div className="w-4/5 flex mx-auto">
        <span className="w-4/5 mx-auto mt-6 cursor-pointer"
        onClick={navigateResetEmail}>
          Forgot Password?
        </span>
        <Routes>
          <Route path="/resetEmail" element={<ResetEmail />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default LoginRight;
