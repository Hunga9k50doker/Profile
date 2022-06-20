/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Button from "../components/common/Button";
export default function Contact() {
  document.title = "NH-Contact";

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
    {
      icon: "bx bxl-gmail",
      content: "Email",
      path: "/contact/email",
    },
    {
      icon: "bx bx-phone",
      content: "Zalo",
      path: "https://chat.zalo.me/",
    },
  ];
  return (
    <div className="contact">
      <div className="container">
        <ul className="contact__list">
          <div className="row">
            {arrContact.map((e, id) => (
              <div
                key={id}
                className="col col-xxl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                style={{ height: "fit-content" }}
              >
                <li className="contact__item">
                  <a
                    href={e.path}
                    target={e.content !== "Email" ? "_blank" : "_self"}
                    rel="noreferrer"
                  >
                    <Button
                      icon={e.icon}
                      content={e.content}
                      classNameBtn={"btn__contact"}
                      classNameContent={"btn__contact__content"}
                    ></Button>
                  </a>
                </li>
              </div>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
