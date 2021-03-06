import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

import { ContactUs } from "./components/common/Forms";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="project" element={<Project />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="contact/email" element={<ContactUs />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
