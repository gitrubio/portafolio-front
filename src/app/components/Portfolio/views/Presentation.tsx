import React from "react";
import logo from "../assets/portfolio.svg";

export default function Primary() {
  return (
    <section id="primary">
      <h2>
        <p className="name">Carlos</p>
        <p className="second-name">Rubio</p>
      </h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis aliquid
      </p>
      <a href="">Section 2</a>
      <img src={logo} alt="" />
    </section>
  );
}
