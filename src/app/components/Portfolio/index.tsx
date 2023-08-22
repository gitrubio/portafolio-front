import React from "react";
import "./css/Portfolio.css";
import logo from "./assets/develop.svg";
import me from "../../../assets/yo_prueba.jpeg";
import night from "./assets/night.svg";
import Primary from "./views/Presentation";
import { motion, useScroll } from "framer-motion";

import { IPortfolio } from "../../interfaces/Portfolio.interface";
import Aboutme from "./views/Aboutme";
import Work from "./views/Work";
import Projects from "./views/Projects";


export default function Portfolio( {theme} : IPortfolio) {

  return (
    <motion.div className={`container ${theme}`}>
      <Primary key='Primary' theme={theme} img={theme === 'theme-light' ? logo : night}/>
      <Aboutme key='Aboutme' theme={theme} img={me}/>
      <Work  key='Work'  theme={theme}/>
      <Projects key={'Projects'}/>
    </motion.div>
  );
}
