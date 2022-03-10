import React from "react";
import { Link } from "react-router-dom";

import Audio from "./Audio";

export default function Header({ active, setActive }) {
  return (
    <div className="header">
      <h1 className="header__logo">
        <Link to="/">NH</Link>
      </h1>
      <Audio />
      <div
        className={`header__menu ${active ? "active" : ""}`}
        onClick={() => setActive(!active)}
      ></div>
    </div>
  );
}
