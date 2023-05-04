import React, { useState } from "react";
import "../css/aboutMe.css";
import { motion } from "framer-motion";
import AnimatedText from "../../animated/AnimatedText";
import { ISection } from "../../../interfaces/Portfolio.interface";

export default function Aboutme(props?: ISection) {
  const [rotate, setRotate] = useState(30);

  return (
    <section>
      <div className="aboutMe">
        {props ? (
          <motion.div
            style={{ width: 200, height: 100, margin: "auto" }}
            initial={{ scale: 0 }}
            whileInView={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 40,
            }}
          >
            <motion.img src={props.img} style={{ width: 100, borderRadius : 50 }} />
          </motion.div>
        ) : (
          <div></div>
        )}
        <motion.h1 className="text" style={{ textAlign: "center" }}>
          Hi,
        </motion.h1>
        <motion.h1
          className="hello"
          whileHover={{ rotate: [0, 15, 0, 15, 0] }}
          whileInView={{ rotate: [0, 15, 0, 15, 0] }}
          transition={{ type: "spring", duration : 3}}
        >
          👋
        </motion.h1>
        <motion.h1 className="text" style={{ textAlign: "center" }}>
          I'm Carlos Rubio Viloria
        </motion.h1>
        <motion.div
          className="description"
          initial={{ top: -100 }}
          whileInView={{ top: 100 }}
          transition={{ type: "spring", duration: 2 }}
        >
          <AnimatedText
          theme={props?.theme}
            line=" I help designers, agencies and companies bring their ideas to life.
          with the creation of dynamic pages, landing pages, dashboards,
          eCommerce pages, microservices, Rest API."
          />
        </motion.div>
      </div>
    </section>
  );
}
