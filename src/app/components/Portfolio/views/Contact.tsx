import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/Contactme.css";
import { IPortfolio } from '../../../interfaces/Portfolio.interface';
import { AiOutlineSend } from "react-icons/ai";
import BtnSend from "../components/BtnSend";
import { THEME } from "../../../constants/constants";
export default function Contact( { theme} :IPortfolio) {
  const [form, setform] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    information: "",
  });
  return (
    <section id="projects">
      <motion.div className="contactme" style={{ backgroundColor : theme === 'theme-light' ? "white" : "#2c3056" , color: theme === THEME.LIGHT ? "black" : "white" }}>
        <div className="contactme__info"/>
        <div className="contactme__form">
        <h1> ¡ Contáctame !</h1>
          <div className="form_order">
           <div>
           <label>Nombre</label>
          <input
            type="text"
            name="name"
            placeholder="Jhon"
            onChange={(e) =>
              setform((prev) => ({ ...prev, name: e.target.value }))
            }
            value={form.name}
          />
           </div>
            <div>
            <label>Apellido</label>
            <input
            type="text"
            name="Last Name"
            placeholder="Walker"
            onChange={(e) =>
              setform((prev) => ({ ...prev, lastname: e.target.value }))
            }
            value={form.lastname}
          />
            </div>
          </div>
          <div className="form_order">
          <div>
          <label>Correo</label>
          <input
            type="email"
            name="email"
            placeholder="jhony@gmail.com"
            onChange={(e) =>
              setform((prev) => ({ ...prev, email: e.target.value }))
            }
            value={form.email}
          />
          </div>
          <div>
            <label>Telefono</label>
          <input
            type="number"
            name="phone number"
            placeholder="382902129"
            onChange={(e) =>
              setform((prev) => ({ ...prev, phone: e.target.value }))
            }
            value={form.phone}
          />
          </div>
          </div>
          
         <div>
          <label>Informacion</label>
         <textarea
            name="Information"
            maxLength={200}
            rows={3}
            cols={3}
            placeholder="Information"
            onChange={(e) =>
              setform((prev) => ({ ...prev, information: e.target.value }))
            }
            value={form.information}
          />
         </div>
            <div className="div_button">
              <BtnSend key={'btnSend'} onClick={()=>{}} color={theme === 'theme-light' ? "black" : "white"}/>
            </div>
        </div>
      </motion.div>
    </section>
  );
}
