import React from "react";
import { motion } from "framer-motion";
import { ISection } from "../../../interfaces/Portfolio.interface";

export default function Primary({ img , theme }: ISection) {
  return (
    <section id="primary">
      <h2  className="section-h2">
        <motion.div key={`name-${theme}`}
          initial={{ x: "-100%" }}
          whileInView={{ x: "4%" }}
          transition={{
            duration: 1.5,
          }}
        >
          <p className={`name ${theme}-second`} >Carlos</p>
        </motion.div>

        <motion.div key={`lastName-${theme}`}
          initial={{ x: "110%" }}
          whileInView={{ x: "-0.5%" }}
          transition={{
            duration: 1.5,
          }}
        >
          <p className={`second-name `}>Rubio</p>
        </motion.div>
      </h2>

      <motion.div key={`rol-${theme}`}
        className="rol"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 2,
        }}
      >
        <h2>Full Stack Developer</h2>
      </motion.div>

      <motion.div key={`img-${theme}`}
        className="section-img"
        initial={{ x: "50%" }}
        whileInView={{ x: "-10%" }}
        transition={{
          duration: 1.5,
        }}
      >
        <img src={img} style={{ maxWidth: "500px" , maxHeight: "400px" }} />
      </motion.div>
    </section>
  );
}
