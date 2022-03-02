import React,{useState} from "react";

export default function Button(props) {
  const [active, setActive] =useState()
  return (
    <button
    onClick={()=>''}
    className={`btn ${props.classNameBtn}`}>
      <i className={`icon ${props.icon}`}></i>
      <span className={`span ${props.classNameContent}`}>{props.content}</span>
      {props.children}
    </button>
  );
}
