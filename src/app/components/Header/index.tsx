import React, { useState } from "react";
import "./css/Header.css";
import { motion } from "framer-motion";
import { HiMoon, HiOutlineMoon, HiSun } from "react-icons/hi";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { IHeader } from "../../interfaces/Heardes.interfaces";

export default function Header({ changeTheme, theme }: IHeader) {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    changeTheme();
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <div className={`header ${theme}`}>
      <motion.div
        className="btn-login"
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
      >
        <img src={"https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/logoR.png?alt=media&token=ea2115f8-4b9a-4f35-886e-be549f33b444"} style={{ maxWidth: "50px", maxHeight: "50px" }} />
      </motion.div>
      <div className="links">
        <motion.div
        whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
        >
          <AiOutlineLinkedin size={20} />
        </motion.div>
        <motion.div
             whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
        >
          <AiFillGithub size={20} />
        </motion.div>
      </div>
      <motion.div className="theme-color"
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}>
        {!isOn ? (
          <HiSun className="theme-icon" size={25} onClick={toggleSwitch} />
        ) : (
          <HiMoon className="theme-icon" size={25} onClick={toggleSwitch}/>
        )}
      </motion.div>
    </div>
  );
}
