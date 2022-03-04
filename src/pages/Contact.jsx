/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

export default function Contact() {
  const arrContact = [
    {
      icon: "bx bxl-facebook",
      content: "Facebook",
      path: " https://www.facebook.com/nguyenhung2310/",
    },
    {
      icon: "bx bxl-github",
      content: "Github",
      path: " https://github.com/Hunga9k50doker",
    },
    {
      icon: "bx bxl-linkedin",
      content: "LinkedIn",
      path: "https://www.linkedin.com/in/nguyen-hung-651459218/ ",
    },

    {
      icon: "bx bxl-twitter",
      content: "Twitter",
      path: " https://twitter.com/NguyenHung231",
    },
  ];
  return (
    <div className="contact">
      <ul className="contact__list">
        {arrContact.map((e, id) => (
          <li key={id} className="contact__item">
            <a href={e.path} target="_blank" rel="noreferrer">
              <Button
                icon={e.icon}
                content={e.content}
                classNameBtn={"btn__contact"}
                classNameContent={"btn__contact__content"}
              ></Button>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
