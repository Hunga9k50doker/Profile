import React from "react";

import { avatar } from "../assets/img";

export default function Home() {
  document.title = "NH-Home";
  return (
    <div className="home">
      <div className="grid wide">
        <div className="row">
          <div className="col l-3 m-6 c-12">
            <div className="home__avatar">
              <img src={avatar} alt="" />
            </div>
          </div>
          <div className="col l-9 m-6 c-12">
            <h2 className="home__title"> Hi, I am Hung.</h2>
            <div className="home__desc">
              <br /> I am currently in my third year at UIT (University
              Information Teachnology). <br />
              This is my personal introduction site. It's still not 100%
              complete and I'm trying to perfect it every day. All my
              information is here. If you want to know more about me can contact
              me directly.
              <br />
              <br /> Thanks for your visit !!!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
