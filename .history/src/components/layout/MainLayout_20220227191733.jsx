import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../common/header/Header";
import Menu from "../common/menu/Menu";

export default function MainLayout() {
  const [active, setActive] = useState(false);
  return (
    <div className={`component ${active ? "active" : ""}`}>
      <Header active={active} setActive={setActive} />
      <div className="main__container">
        <div className="main">
          <div className="content">
            <div className="overlay">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      {/* <Menu /> */}
    </div>
  );
}
