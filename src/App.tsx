import React from "react";
import Login from "./components/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sbs from "./components/Sbf";
import ResetEmail from "./components/reset/ResetEmail";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sbs />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/resetEmail" element={<ResetEmail/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
