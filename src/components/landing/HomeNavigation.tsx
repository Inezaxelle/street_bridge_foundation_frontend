import React from "react";
import Login from "../login/Login";
import Programs from "../programs/Programs";
import About from "../about/About";
import News from "../news/News";
import { Routes, Route, useNavigate } from "react-router-dom";
const HomeNavigation: React.FC = () => {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  const navigatePrograms = () => {
    navigate("/programs");
  }
  const navigateAbout = () => {
    navigate("/about");
  };
  const navigateNews = () => {
    navigate("/news");
  };
  let url = "";
  return (
    <div>
      <nav className="flex items-center flex-wrap bg-[#5B9431] p-6">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow flex lg:flex md:block justify-between">
            <a
              href={url}
              className="block md:mt-4 mt-2 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-4 mr-2"
              onClick={navigateAbout}
            >
              About
            </a>
            <a
              href={url}
              className="block md:mt-4 mt-2 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-4 mr-2"
              onClick={navigatePrograms}
            >
              Programs
            </a>
            <a
              href={url}
              className="block md:mt-4 mt-2 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-4 mr-2"
            >
              Involve
            </a>
            <a
              href={url}
              className="block md:mt-4 mt-2 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-4 mr-2"
              onClick={navigateNews}
            >
              News
            </a>
            <a
              href={url}
              className="block md:mt-4 mt-2 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-4 mr-2"
            >
              Donate
            </a>

            <button
              className="inline-block text-sm px-4 py-2 leading-none rounded-xl bg-[#082244] text-white hover:border hover:border-white hover:bg-[#5B9431] lg:mt-0 md:mt-8 mt-0"
              onClick={navigateLogin}
            >
              Login
            </button>
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/programs" element={<Programs />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/news" element={<News />}></Route>
            </Routes>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default HomeNavigation;
