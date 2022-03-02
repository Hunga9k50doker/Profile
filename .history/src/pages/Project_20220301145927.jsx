import React from 'react'
import BoxItem from '../components/common/BoxItem';

export default function Project() {
  const arrProj = [
    {
      title: "Setsail",
      img: "",
      path: "/",
    },
    {
      title: "Setsail",
      img: "",
      path: "/",
    },
    ,
    {
      title: "Setsail",
      img: "",
      path: "/",
    },
  ];
  return (
    <div className="project">
      <ul className="project__list">
          {arrProj.map((e,id) =>(
        <li key={id} className="project__item">
              <BoxItem
              title={e.title}
              link={e.path}
              img={e.img}
              />
        </li>
          ))}
      </ul>
    </div>
  )
}
