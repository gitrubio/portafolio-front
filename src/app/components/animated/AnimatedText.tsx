import React from "react";
import { motion } from 'framer-motion';

export default function AnimatedText({line }: {line : string}) {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
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
      className="load-screen--message"
      variants={sentence}
      initial="hidden"
      whileInView="visible"
    >
    {line.split("").map((char, index) =>{
        return (
            <motion.span key={char+"-"+index} variants={letter}>
                {char}
            </motion.span>
        )
    })}
    </motion.h3>
  );
}
