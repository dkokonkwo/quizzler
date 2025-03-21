"use client";
import React from "react";
import { Button } from "react-bootstrap";
import "../styles/home.css";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import geo from "../assets/images/geography.png";
import robo from "../assets/images/robo.jpg";
import math from "../assets/images/math.png";
import { Link } from "react-router-dom";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";
import HomeCarousel from "./HomeCarousel";

function MyHome() {
  const count0 = useMotionValue(0);
  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const rounded0 = useTransform(() => Math.round(count0.get()));
  const rounded1 = useTransform(() => Math.round(count1.get()));
  const rounded2 = useTransform(() => Math.round(count2.get()));

  useEffect(() => {
    const controls0 = animate(count0, 24, { duration: 2 });
    const controls1 = animate(count1, 15, { duration: 2 });
    const controls2 = animate(count2, 4, { duration: 1 });
    return () => {
      controls0.stop();
      controls1.stop();
      controls2.stop();
    };
  }, []);

  return (
    <div className="home-layout">
      <div className="home-card">
        <h1>Test Your Wits With Quizzler</h1>
        <p>
          Prepare for a thrilling trivia adventure! Test your knowledge of
          Sports, Entertainment, Geography and Many more. Who will navigate the
          toughest questions and Bring peace to the four nations?
        </p>
      </div>
      <div className="home-card my-carousel">
        <HomeCarousel />
      </div>
      <div className="home-card">
        <Link to={"/quizzler/play"} className="play-linker">
          <Button className="home-play-btn">
            <FontAwesomeIcon icon={faRocket} className="rocket" />
            <p>Play!</p>
          </Button>
        </Link>
        <div className="stats">
          <div>
            <motion.pre className="motion-text">{rounded0}</motion.pre>
            <p>Categories</p>
          </div>
          <div>
            <motion.pre className="motion-text">{rounded1}</motion.pre>
            <p>Questions</p>
          </div>
          <div>
            <motion.pre className="motion-text">{rounded2}</motion.pre>
            <p>Difficulty Levels</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHome;
