import React from "react";
import { Outlet } from "react-router-dom";
// import Header from ''
import Header from "/header/Header";
import Menu from "/menu/Menu";

export default function MainLayout() {
  return (
    <div className="component">
      <Header />
      <div className="main__container">
        <div className="main">
          <div className="content">
            <div className="overlay">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
}
