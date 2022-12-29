import React from "react";
import Login from "./components/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sbf from "./components/Sbf";
import ResetEmail from "./components/reset/ResetEmail";
import ResetPassword from "./components/reset/ResetPassword";
import Navigation from "./components/Navigation";
import Programs from "./components/programs/Programs";
import About from "./components/about/About";
import News from "./components/news/News";
import Donate from "./components/donate/Donate";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sbf />}></Route>
          <Route path="/home" element={<Sbf />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/resetEmail" element={<ResetEmail />}></Route>
          <Route path="/resetPassword" element={<ResetPassword />}></Route>
          <Route path="/navigation" element={<Navigation />}></Route>
          <Route path="/programs" element={<Programs />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/donate" element={<Donate />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
