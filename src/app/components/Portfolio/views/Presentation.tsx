import React, { useEffect, useState } from "react";
import logo_ligth from "../assets/beach.svg";
import { motion , useAnimationControls } from "framer-motion";
import { ISection } from "../../../interfaces/Portfolio.interface";

export default function Primary({ img }: ISection) {

  return (
    <section id="primary">
      <h2 style={{color : 'white'}}>
        <p className="name">Carlos</p>
        <p className="second-name">Rubio</p>
      </h2>
      <p>
        Desarrollador Full-Stack
        </p>
      <motion.div className="section-img"
        initial={{ x: '100%' }}
        whileInView={{ x: "-15%" }}
        transition={{
          duration: 1.5,
        }}
         
      >
        <img src={img} style={{ width: "500px" }} />
      </motion.div>
    </section>
  );
}
