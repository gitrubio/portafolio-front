import React from "react";
import { motion } from "framer-motion";

import "../css/skills.css";
import AnimatedText from "../../animated/AnimatedText";
import { ISection } from "../../../interfaces/Portfolio.interface";
export default function Work( props : ISection) {

  return (
    <section className="work">
      <motion.div
        key={"titleSkills"}
        className="title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0.5, 1] }}
        transition={{
          duration: 1,
        }}
      >
        <h2>Work Experience</h2>
      </motion.div> 
      <motion.div className="wrapper">
        <motion.div className="card">
          <motion.div className="poster">
            <img
              src={'src/app/components/Portfolio/assets/perfectbody.png'}
              alt="Location Unknown"
            />
          </motion.div>
          <motion.div className="details">
            <h1>Location Unknown</h1>
            <h2>2021 • PG • 1hr 38min</h2>
            <motion.div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <span>4.2/5</span>
            </motion.div>
            <motion.div className="tags">
              <span className="tag">Italian</span>
              <span className="tag">Drama</span>
              <span className="tag">Indie</span>
            </motion.div>
            <p className="desc">
              Marco, a disillusioned backpacker in his late 20s, embarks on a
              solitary journey in search for meaning.
            </p>
          </motion.div>
        </motion.div>
        <motion.div className="card">
          <motion.div className="poster">
            <img
              src="https://i.postimg.cc/GtxLYS7q/poster2-img.jpg"
              alt="Location Unknown"
            />
          </motion.div>
          <motion.div className="details">
            <h1>Air</h1>
            <h2>2020 • PG • 24min</h2>
            <motion.div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <span>4/5</span>
            </motion.div>
            <motion.div className="tags">
              <span className="tag">Romance</span>
              <span className="tag">Comedy</span>
              <span className="tag">Short</span>
            </motion.div>
            <p className="desc">
              Lily, the travel writer, and Nathan, the book editor, goes on a
              plane together to the alps.
            </p>

          </motion.div>
        </motion.div>
        <motion.div className="card">
          <motion.div className="poster">
            <img
              src="https://i.postimg.cc/yxH6DzPD/poster3-img.jpg"
              alt="Location Unknown"
            />
          </motion.div>
          <motion.div className="details">
            <h1>End Credits</h1>
            <h2>2021 • R • 1hr 41min</h2>
            <motion.div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <span>4.7/5</span>
            </motion.div>
            <motion.div className="tags">
              <span className="tag yellow">Teen</span>
              <span className="tag">Comedy</span>
              <span className="tag blue">Drama</span>
            </motion.div>
            <p className="desc">
              Alex and his best friend goes on a road trip whilst experiencing
              friendship, self-discovery, and the bittersweet transition to
              adulthood.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
