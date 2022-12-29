import React from "react";
import Login from "./login/Login";
import logo from "../images/logo.png";
import Programs from "./programs/Programs";
import About from "./about/About";
import News from "./news/News";
import Sbf from "./Sbf";
import Donate from "./donate/Donate";
import { Routes, Route, useNavigate } from "react-router-dom";
const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  const navigatePrograms = () => {
    navigate("/programs");
  };
  const navigateAbout = () => {
    navigate("/about");
  };
  const navigateNews = () => {
    navigate("/news");
  };
  const navigateHome = () => {
    navigate("/sbs");
  };
  const navigateDonate=()=>{
    navigate("/donate");
  }
  let url = "";

  return (
    <div>
      <nav className="flex items-center flex-wrap bg-white p-6 h-[10vh] justify-between">
        <div className="h-full w-[30%] cursor-pointer" onClick={navigateHome}>
          <img src={logo} alt="" className="h-full" />
        </div>
        <div className="w-[70%]">
          <div className="text-sm flex items-center justify-between">
            <a
              href={url}
              className="text-[#082244] hover:font-bold lg:mr-4 mr-2"
              onClick={navigateAbout}
            >
              About
            </a>
            <a
              href={url}
              className="text-[#082244] hover:font-bold lg:mr-4 mr-2"
              onClick={navigatePrograms}
            >
              Programs
            </a>
            <a
              href={url}
              className="text-[#082244] hover:font-bold lg:mr-4 mr-2"
            >
              Involve
            </a>
            <a
              href={url}
              className="text-[#082244] hover:font-bold lg:mr-4 mr-2"
              onClick={navigateNews}
            >
              News
            </a>
            <a
              href={url}
              className="text-[#082244] hover:font-bold lg:mr-4 mr-2"
              onClick={navigateDonate}
            >
              Donate
            </a>

            <button
              className="inline-block text-sm px-4 py-2 leading-none rounded-xl bg-[#082244] text-white hover:border hover:border-white hover:bg-[#5B9431]"
              onClick={navigateLogin}
            >
              Login
            </button>
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/programs" element={<Programs />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/news" element={<News />}></Route>
              <Route path="/home" element={<Sbf />}></Route>
              <Route path="/donate" element={<Donate />}></Route>
            </Routes>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
