import React, { useRef ,useEffect} from "react";
import "./css/Portfolio.css";
import logo from "./assets/develop.svg";
import night from "./assets/night.svg";
import Primary from "./views/Presentation";
import { motion } from "framer-motion";
import { useFollowPointer } from "../../../hooks/useFollowPointer";
import { IPortfolio } from "../../interfaces/Portfolio.interface";


export default function Portfolio( {theme} : IPortfolio) {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  
  return (
    <motion.div className={`container ${theme}`}>
      <Primary theme={theme} img={theme === 'theme-light' ? logo : night}/>
      <section id="aboutMe">
        <h2>Section 2</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis aliquid
        </p>
        <a href="">Section 3</a>
      </section>

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
