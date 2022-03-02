import React from "react";
import BoxItem from "../components/common/BoxItem";

export default function Project() {
  const arrProj = [
    {
      title: "Setsail",
      img: "",
      path: "/",
      desc: "Dolore ipsum amet sanctus est dolores nonumy aliquyam et ipsum, sed gubergren labore dolore et sed diam at clita, ipsum.",
      frontend: "HTML, CSS, JS, ReactJs",
      backend: "Coming soon",
      otherDesc:
        "Kasd kasd amet lorem justo justo dolore elitr. Sanctus sit sadipscing nonumy rebum dolores ea ipsum lorem elitr. Accusam amet.",
    },
    {
      title: "Setsail",
      img: "",
      path: "/",
      desc: "Dolore ipsum amet sanctus est dolores nonumy aliquyam et ipsum, sed gubergren labore dolore et sed diam at clita, ipsum.",
      frontend: "HTML, CSS, JS, ReactJs",
      backend: "Coming soon",
      otherDesc:
        "Kasd kasd amet lorem justo justo dolore elitr. Sanctus sit sadipscing nonumy rebum dolores ea ipsum lorem elitr. Accusam amet.",
    },
    {
      title: "Setsail",
      img: "",
      path: "/",
      desc: "Dolore ipsum amet sanctus est dolores nonumy aliquyam et ipsum, sed gubergren labore dolore et sed diam at clita, ipsum.",
      frontend: "HTML, CSS, JS, ReactJs",
      backend: "Coming soon",
      otherDesc:
        "Kasd kasd amet lorem justo justo dolore elitr. Sanctus sit sadipscing nonumy rebum dolores ea ipsum lorem elitr. Accusam amet.",
        
    },
  ];
  return (
    <div className="project">
      <ul className="project__list">
        {arrProj.map((e, id) => (
          <li key={id} className="project__item">
            <BoxItem title={e.title} link={e.path} img={e.img} />
          </li>
        ))}
      </ul>
    </div>
  );
}
