import React from "react";

export default function Header(
    {active,setActive}
) {
  return (
    <div className="header">
      <h1 className="header__logo">Logo</h1>
      <div className="header__menu active"></div>
    </div>
  );
}
