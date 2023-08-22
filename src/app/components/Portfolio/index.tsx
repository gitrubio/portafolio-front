import React from "react";
import "./css/Portfolio.css";
import Primary from "./views/Presentation";
import { motion, useScroll } from "framer-motion";

import { IPortfolio } from "../../interfaces/Portfolio.interface";
import Aboutme from "./views/Aboutme";
import Work from "./views/Work";
import Projects from "./views/Projects";


export default function Portfolio( {theme} : IPortfolio) {
  
  return (
    <motion.div className={`container ${theme}`}>
      <Aboutme key='Aboutme' theme={theme} img={"src/app/components/Portfolio/assets/yo_prueba.jpeg"}/>
      <Primary key='Primary' theme={theme} img={theme === 'theme-light' ? "src/app/components/Portfolio/assets/develop.svg" : "src/app/components/Portfolio/assets/night.svg"}/>
      <Work  key='Work'  theme={theme}/>
      <Projects key={'Projects'}/>
    </motion.div>
  );
}
