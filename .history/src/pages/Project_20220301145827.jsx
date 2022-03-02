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
        <li className="project__item">
          {arrProj.map((e,id) =>(
            
          ))}
        </li>
      </ul>
    </div>
  )
}
