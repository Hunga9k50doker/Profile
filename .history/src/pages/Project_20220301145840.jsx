import React from 'react'

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
        <li className="project__item">
              
        </li>
          ))}
      </ul>
    </div>
  )
}
