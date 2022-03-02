import React from "react";
import Button from "./Button";

export default function BoxItem(props) {
  return (
    <div className="box">
      <div className="box__header">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="box__body">
        <Button classNameBtn={"btn__primary"} content="Read more"
        ></Button>
        <button className="btn "></button>
        <button className="btn btn__second">
          <a href={props.link} rel="noreferrer" target="_blank">
            Visit website
          </a>
        </button>
      </div>
    </div>
  );
}
