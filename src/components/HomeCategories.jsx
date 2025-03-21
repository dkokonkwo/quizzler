"use client";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import React from "react";
import "../styles/homeCategories.css";
import ent from "../assets/images/entertainment.png";
import robo from "../assets/images/robo.jpg";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    container: ref.current?.parentElement,
  });
  const y = useParallax(scrollYProgress, 100);

  return (
    <section className="img-container" ref={ref}>
      <div ref={ref}>
        <img src={ent} alt="Category Image" />
        <div className="catfo">
          <h3>Science: Mathematics</h3>
          <div className="image-name">
            <img src={robo} alt="robot" />
            <p>Open Trivia</p>
          </div>
        </div>
      </div>
      <motion.h2
        // Hide until scroll progress is measured
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >{`#0${id}`}</motion.h2>
    </section>
  );
}

export default function Parallax() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="parallax-container" ref={containerRef}>
      <div id="example" className="parallax-content">
        {[1, 2, 3, 4, 5].map((image) => (
          <div className="cat-card">
            <Image key={image} id={image} />
          </div>
        ))}
        <motion.div className="progress" style={{ scaleX }} />
      </div>
    </div>
  );
}
