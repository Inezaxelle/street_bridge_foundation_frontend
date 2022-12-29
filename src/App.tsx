import React from "react";
import Login from "./components/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sbs from "./components/Sbf";
import ResetEmail from "./components/reset/ResetEmail";
import ResetPassword from "./components/reset/ResetPassword";
import Navigation from "./components/Navigation";
import Programs from "./components/programs/Programs";
import About from "./components/about/About";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sbs />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/resetEmail" element={<ResetEmail />}></Route>
          <Route path="/resetPassword" element={<ResetPassword />}></Route>
          <Route path="/navigation" element={<Navigation />}></Route>
          <Route path="/programs" element={<Programs />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
