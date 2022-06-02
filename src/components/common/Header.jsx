import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Audio from "./Audio";

export default function Header({ active, setActive }) {
  const [isAudio, setAudio] = useState(false);
  const [match, setMatch] = useState(
    window.matchMedia("(min-width: 576px)").matches
  );
  useEffect(() => {
    return () => {
      window
        .matchMedia("(min-width: 576px)")
        .addEventListener("onresize", (e) => setMatch(e.matches));
    };
  }, []);

  return (
    <div className="header">
      <h1 className="header__logo">
        <Link to="/">NH</Link>
      </h1>
      {match ? (
        
        <Audio />
      ) : (
        <div className={`audio__mobile ${isAudio ? "active" : ""}`}>
          <i className="bx bx-aperture" onClick={() => setAudio(!isAudio)}></i>
          <Audio />
        </div>
      )}
      <div
        className={`header__menu ${active ? "active" : ""}`}
        onClick={() => setActive(!active)}
      ></div>
    </div>
  );
}
