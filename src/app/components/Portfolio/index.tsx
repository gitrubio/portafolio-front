import React from "react";
import "./css/Portfolio.css";
import Primary from "./views/Presentation";
import { motion } from "framer-motion";

import { IPortfolio } from "../../interfaces/Portfolio.interface";
import Aboutme from "./views/Aboutme";
import Work from "./views/Work";
import Contact from "./views/Contact";
import { BACK_GROUND, THEME, USER_PHOTO } from "../../constants/constants";


export default function Portfolio( {theme} : IPortfolio) {
  return (
    <motion.div className={`container ${theme}`}>
      <Primary key='Primary' theme={theme} img={theme === THEME.LIGHT ? BACK_GROUND.LIGHT : BACK_GROUND.DARK }/>
      <Aboutme key='Aboutme' theme={theme} img={USER_PHOTO}/>
      <Work  key='Work'  theme={theme}/>
      <Contact key={'Contact'} theme={theme}/>
    </motion.div>
  );
}
