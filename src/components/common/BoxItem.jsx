import React, { useState } from "react";
import Button from "./Button";
const ThumbImg = ({ arr, setImg, index }) => {
  // const [thumb, setThumb] = useState(0);
  return (
    <div className="thumb">
      {arr.map((e, id) => (
        <img
          key={id}
          src={e}
          alt="Not found"
          className={index === id ? "active" : ""}
          // onClick={() => setImg(id)}
        />
      ))}
    </div>
  );
};
export default function BoxItem(props) {
  const [active, setActive] = useState(false);
  // const itemRef = useRef(null);
  // if (itemRef.current)
  //   itemRef.current.addEventListener("mousedown", () => {
  //     // console.log(itemRef);
  //     console.log(itemRef.current);
  //   });
  return (
    <div  className={`box ${props.className}`}>
      <div className={`box__overlay   ${active ? "active" : ""}`}>
        <h3 className="box__overlay__desc">
          Description:
          <p>{props.desc}</p>
        </h3>
        <h3 className="box__overlay__engine">
          <p>Front-end: {props.frontend}</p>
          <p>Backend: {props.backend}</p>
        </h3>
        <h3 className="box__overlay__moreDesc">
          Other: <p>{props.otherDesc ? props.otherDesc : "None"}</p>
        </h3>
        <div className="box__overlay__close" onClick={() => setActive(false)}>
          <Button content="Close" classNameBtn="btn__close" />
        </div>
      </div>
      <div className="box__header">
        {props.idThumb}
        <img src={props.img} alt={props.title} />
      </div>
      <ThumbImg arr={props.thumb} setImg={props.thumb[0]} index={0} />
      <div className="box__body">
        <div onClick={() => setActive(true)} className="box__body__moreDesc">
          <Button classNameBtn="btn__primary" content="Read more"></Button>
        </div>
        <Button classNameBtn={"btn__second"}>
          <a href={props.link} rel="noreferrer" target="_blank">
            Visit website
          </a>
        </Button>
      </div>
    </div>
  );
}
