import React, { useCallback, useEffect, useState }  from "react";
import './css/Portfolio.css'
import Primary from './views/Presentation';
import logo from "./assets/portfolio.svg";
import Header from "./views/Header";
export default function Portfolio() {

  return (
    <div className="container">
    <Header/>
    <Primary/>
      <section id="aboutMe" >
        <h2>Section 2</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis aliquid
          
        </p>
        <a href="">Section 3</a>
        <img src={logo} alt="" />
      </section>

      <section id="skills" >
        <h2>Section 3</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis aliquid
        </p>
        <a href="">Section 1</a>
        <img src={logo} alt="" />
      </section>
      <section id="projects" >
        <h2>Section 4</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis aliquid
        </p>
        <a href="">Section 1</a>
        <img src={logo} alt="" />
      </section>
    </div>
  );
}
