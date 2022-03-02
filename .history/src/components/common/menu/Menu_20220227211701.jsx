import React from "react";
import { Link } from "react-router-dom";
export default function Menu({ active, setActive }) {
  const location = useLocation()
  return (
    <div className={`menu ${active ? "active" : ""}`}>
      <ul className="menu__list">
        <li className="menu__item">
          <Link to="/">Home</Link>
          {/* <Link to="/">Home</Link> */}
        </li>
        <li className="menu__item">
          <Link to="/contact">Contact</Link>
          {/* <Link to="/">Home</Link> */}
        </li>
      </ul>
    </div>
  );
}
