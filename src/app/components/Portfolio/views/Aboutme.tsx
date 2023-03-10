import React, { useState } from "react";
import "../css/aboutMe.css";
import { motion } from "framer-motion";
import AnimatedText from '../../animated/AnimatedText';
import { ISection } from "../../../interfaces/Portfolio.interface";

export default function Aboutme( props? : ISection) {
  const [rotate, setRotate] = useState(30);

  return (
    <section >
      <div className="aboutMe">
        <motion.h1 className="text" style={{ textAlign: "center" }}>
          Hi
          {
            <motion.h1
              className="hello"
              whileHover={{ rotate: [0, 15, 0, 15, 0] }}
              whileInView={{ rotate: [0, 15, 0, 15, 0] }}
              transition={{ type: "spring", duration: 2 }}
            >
              👋
            </motion.h1>
          }{" "}
          , I'm Carlos Rubio Viloria
        </motion.h1>
        <motion.div 
        className="description"
        initial={{top : -100}}
        whileInView={{top: 100}}
        transition={{ type: "spring", duration: 2 }}
        >
         <AnimatedText line=" I help designers, agencies and companies bring their ideas to life.
          with the creation of dynamic pages, landing pages, dashboards,
          eCommerce pages, microservices, Rest API."/>
        </motion.div>
      </div>
    </section>
  );
}
