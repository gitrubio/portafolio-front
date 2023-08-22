import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../css/Projects.css'
export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
    const items = [
        {
            id : '1',
            title : 'cafe',
            subtitle : 'nose'
        }
    ]
  return (
    <section>
      {items.map((item) => (
        <motion.div className="cardProject" key={item.id} layoutId={item.id} onClick={() => setSelectedId(item.id)}>
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}
    </section>
  );
}
