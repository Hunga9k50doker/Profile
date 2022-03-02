import React from "react";
import Button from "./Button";

export default function BoxItem(props) {
  return (
    <div className="box">
      <div className="box__header">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="box__body">
        <Button classNameBtn={"btn__primary"} content="Read more"></Button>
        <Button classNameBtn={"btn__second"} content="Read more">
          <a href={props.link} rel="noreferrer" target="_blank">
            Visit website
          </a>
        </Button>
        <button className="btn "></button>
      </div>
    </div>
  );
}
