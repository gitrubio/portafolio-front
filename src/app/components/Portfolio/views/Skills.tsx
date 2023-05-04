import React, { useRef } from "react";
import { motion } from "framer-motion";

import "../css/skills.css";
import { SkillsIcons } from "../utils/utils";
import AnimatedText from "../../animated/AnimatedText";
import { ISection } from "../../../interfaces/Portfolio.interface";
export default function Skills( props : ISection) {
  const constraintsRef = useRef(null);
  return (
    <section className="skills">
      <motion.div
        key={"titleSkills"}
        className="rol"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0.5, 1] }}
        transition={{
          duration: 1,
        }}
      >
        <h2>Skills</h2>
      </motion.div>
      <motion.div
        key={"titleSkills"}
      >
        <AnimatedText theme={props.theme} line="Tap and drag the skills."/>
      </motion.div>
      <motion.div className="containerSkills" ref={constraintsRef}>
          {SkillsIcons.map((item)=>(
                <motion.div
                key={item.key}
                style={{ backgroundImage: `url(${item.icon})`, backgroundSize : 'contain', backgroundRepeat : 'no-repeat' }}
                 className="item"
                 drag
                 dragConstraints={constraintsRef}
               />
          ))}
      </motion.div>
    </section>
  );
}
