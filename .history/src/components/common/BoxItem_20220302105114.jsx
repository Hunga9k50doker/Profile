import React,{ useState} from "react";
import Button from "./Button";

export default function BoxItem(props) {
 const[active,setActive]= useState(false)
  return (
    <div className="box">
      <div className={`box__overlay ${active ? "active" : ""}`}>
        <h2 className="box__overlay__desc">Description</h2>
        <h3 className="box__overlay__engine">
          <p>Front-end: `${props.frontend}`</p>
          <p>Backend: `${props.backend}`</p>
        </h3>
        <p className="box__overlay__moreDesc">

        </p>
        <Button content='Close' />
      </div>
      <div className="box__header">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="box__body">
        <Button
          onClick={() => setActive(true)}
          classNameBtn={"btn__primary"}
          content="Read more"
        ></Button>
        <Button classNameBtn={"btn__second"}>
          <a href={props.link} rel="noreferrer" target="_blank">
            Visit website
          </a>
        </Button>
      </div>
    </div>
  );
}
