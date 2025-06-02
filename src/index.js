import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/index.css";
import Work from "./js/routes/work";
import Curations from "./js/routes/curations";
import NotFound from "./js/routes/404";

import Header from "./js/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="work" element={<Work />} />
      <Route path="curations" element={<Curations />} />
      {/* Catch-all route for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
