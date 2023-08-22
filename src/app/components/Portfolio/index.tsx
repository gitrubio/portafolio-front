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
      <Primary key='Primary' theme={theme} img={theme === 'theme-light' ? "https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/develop.svg?alt=media&token=2dba35c5-30d6-47f1-a4f6-b63784631c7f" : "https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/night.svg?alt=media&token=376baa9b-60fd-4562-ba26-12350b19f9a4"}/>
      <Aboutme key='Aboutme' theme={theme} img={"https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/yo_prueba.jpeg?alt=media&token=1dd3d4a6-7139-4ce8-97dd-9845b98fcf70"}/>
      <Work  key='Work'  theme={theme}/>
      <Projects key={'Projects'}/>
    </motion.div>
  );
}
