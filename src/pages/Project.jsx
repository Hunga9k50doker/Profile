import React, { useState, useEffect } from "react";
import BoxItem from "../components/common/BoxItem";
import arrProj from "../assets/data/Project";

export default function Project() {
  const [index, setindex] = useState(0);
  useEffect(() => setindex[0], []);
  const next = () => {
    if (index === arrProj.length - 1) {
      setindex(0);
    } else {
      setindex(index + 1);
    }
  };
  const prev = () => {
    if (index === 0) {
      setindex(arrProj.length - 1);
    } else {
      setindex(index - 1);
    }
  };

  return (
    <div className="project">
      <ul className="project__list">
        {arrProj.map((e, id) => (
          <li
            key={id}
            className={`project__item ${id === index ? "active" : ""}`}
          >
            {id === index && (
              <>
                <BoxItem
                  title={e.title}
                  link={e.path}
                  img={e.img}
                  frontend={e.frontend}
                  backend={e.backend}
                  otherDesc={e.otherDesc}
                  desc={e.desc}
                  thumb={e.thumb}
                />
              </>
            )}
          </li>
        ))}
        <button className="btn btn__prev" onClick={prev}>
          <i className="bx bxs-chevrons-left bx-burst"></i>
        </button>
        <button className="btn btn__next" onClick={next}>
          <i className="bx bxs-chevrons-right bx-burst"></i>
        </button>
      </ul>
    </div>
  );
}
