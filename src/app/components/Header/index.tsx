import React, { useState } from "react";
import "./css/Header.css";
import { motion } from "framer-motion"
import { HiMoon , HiOutlineMoon } from 'react-icons/hi'
import { IHeader } from "../../interfaces/Heardes.interfaces";

export default function Header( props : IHeader) {

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    props.changeTheme();
  }

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };
  return (
    <div className="header">
      <h3>Carlos Rubio</h3>
      <ul className="links">
        <li>algo</li>
        <li>algo</li>
        <li> algo</li>
      </ul>
      <div className="theme-color">
      {!isOn ? <HiOutlineMoon className="theme-icon" size={25}/> : <HiMoon  className="theme-icon" size={25}/>}
          <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
         
            <motion.div className="handle" layout transition={spring} />
          </div>
      </div>
    </div>
  );
}
