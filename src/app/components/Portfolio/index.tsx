import React from "react";
import "./css/Portfolio.css";
import logo from "./assets/develop.svg";
import night from "./assets/night.svg";
import Primary from "./views/Presentation";
import { motion } from "framer-motion";

import { IPortfolio } from "../../interfaces/Portfolio.interface";
import Aboutme from "./views/Aboutme";


export default function Portfolio( {theme} : IPortfolio) {

  return (
    <motion.div className={`container ${theme}`}>
      <Primary theme={theme} img={theme === 'theme-light' ? logo : night}/>
      <Aboutme theme={theme}/>

      <section id="skills">
        <h2>Section 3</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis aliquid
        </p>
        <a href="">Section 1</a>
        <img src={logo} alt="" />
      </section>
      <section id="projects">
        <h2>Section 4</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis aliquid
        </p>
        <a href="">Section 1</a>
        <img src={logo} alt="" />
      </section>
    </motion.div>
  );
}
