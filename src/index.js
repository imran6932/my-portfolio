import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Leasing from "./component/projects/leasing/Leasing";
import Nhai from "./component/projects/nhai/Nhai";
import Triggify from "./component/projects/triggify/Triggify";
import Shotlocker from "./component/projects/shotlocker/Shotlocker";
import Footer from "./component/layout/Footer";
import Home from "./component/home/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leasing-scraper" element={<Leasing />} />
        <Route path="/nhai" element={<Nhai />} />
        <Route path="/shotlocker" element={<Shotlocker />} />
        <Route path="/triggify" element={<Triggify />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </>
);

export default Home;
