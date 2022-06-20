import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mvzemj3",
        "template_a8kdo3h",
        form.current,
        "9-fHBExpv0KqQPfiT"
      )
      .then(
        () => {
          alert("Cảm ơn bạn đã gửi mail!");
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12">
          <div className="form__send__email">
            <form ref={form} onSubmit={sendEmail} method="post">
              <div className="form__item name mt-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form__item email mt-4">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form__item message mt-4">
                <textarea
                  style={{ paddingLeft: "16px" }}
                  name="message"
                  placeholder="Message"
                  cols="100"
                  rows="10"
                  required
                />
              </div>
              <input type="submit" value="Send" className="mt-4 submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
