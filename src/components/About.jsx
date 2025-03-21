"use client";

import React from "react";
import { motion, useSpring, useScroll } from "motion/react";
import "../styles/about.css";
import geo from "../assets/images/geography.png";
import robo from "../assets/images/robo.jpg";
import math from "../assets/images/math.png";
import { LampCharge, TextalignLeft } from "iconsax-react";

function About() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="about-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="avatar">
              <LampCharge size="30" color="#fff200" />
            </div>
            <img src={geo} alt="Avatar" />
            <h5>David Okonkwo</h5>
            <p>Software Engineer</p>
          </div>
          <div className="flip-card-back">
            <div className="bg-photo"></div>
            <div className="my-face"></div>
            <div className="info-section">
              <h3>Skills</h3>
              <ul>
                <li>
                  Full Stack Dev<p>[Javascript, Python]</p>
                </li>
                <li>
                  Embedded Systems<p>[Arduino, C/C++]</p>
                </li>
                <li>
                  Blockchain Dev<p>[Solidity, C/C++]</p>
                </li>
                <li>
                  Mobile App Dev<p>[Flutter, Firebase]</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#26b5c5",
        }}
      />
      <Content />
    </div>
  );
}

export default About;

/**
 * ==============   Utils   ================
 */

function Content() {
  return (
    <div className="about-content">
      <article>
        <h2>About</h2>
        <p>
          Quizzler is a trivia game designed to make learning fun and engaging.
          Whether you’re a trivia buff or just looking for a way to test your
          knowledge, Quizzler offers a dynamic experience that keeps you
          entertained.
        </p>
        <p>
          Powered by the Open Trivia API, it delivers a diverse range of
          high-quality, up-to-date questions, ensuring each round is both
          challenging and enjoyable.
        </p>
        <p>
          Created by David Okonkwo, a software engineer passionate about
          building innovative solutions across various domains, including web
          development, robotics, automation, blockchain, and app development,
          Quizzler is more than just a game—it’s an interactive way to expand
          your knowledge while having fun.
        </p>
      </article>
    </div>
  );
}
