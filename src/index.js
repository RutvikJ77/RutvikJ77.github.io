import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/index.css";
import Work from "./js/routes/work";
import Curations from "./js/routes/curations";
import App from "./js/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="work" element={<Work />} />
      <Route path="curations" element={<Curations />} />
    </Routes>
  </BrowserRouter>
);
