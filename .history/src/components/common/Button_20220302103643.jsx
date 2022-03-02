import React from "react";

export default function Button(props) {
  return (
    <button className={`btn ${props.classNameBtn}`}>
      <i className={`${props.icon}`}></i>
      <span className={`${props.classNameContent}`}>{props.content}</span>
      {props.children}
    </button>
  );
}
