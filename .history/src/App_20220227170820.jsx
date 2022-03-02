import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            {/* <Route path="/" element={<Home />}></Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
