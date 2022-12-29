import React from "react";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <div className="flex">
      <LoginLeft />
      <LoginRight />
    </div>
  );
};

export default Login;
