import React from "react";
import { motion } from 'framer-motion';
import '../Portfolio/css/Portfolio.css'
export default function AnimatedText({line, theme }: {line : string, theme? : string}) {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      у: 0,
    },
  };
  return (
    <motion.h3
      className={`load-screen--message `}
      variants={sentence}
      initial="hidden"
      whileInView="visible"
    >
    {line.split("").map((char, index) =>{
        return (
            <motion.span className={`${theme}-color`} key={char+"-"+index} variants={letter}>
                {char}
            </motion.span>
        )
    })}
    </motion.h3>
  );
}
