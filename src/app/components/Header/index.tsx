import React, { useState } from "react";
import "./css/Header.css";
import Logo from "../../../assets/logoR.png";
import { motion } from "framer-motion";
import { HiMoon, HiOutlineMoon } from "react-icons/hi";
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
        <img src={Logo} style={{ maxWidth: "50px", maxHeight: "50px" }} />
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
      <div className="theme-color">
        {!isOn ? (
          <HiOutlineMoon className="theme-icon" size={25} />
        ) : (
          <HiMoon className="theme-icon" size={25} />
        )}
        <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
          <motion.div className="handle" layout transition={spring} />
        </div>
      </div>
    </div>
  );
}
