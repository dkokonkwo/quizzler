import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Cup } from "iconsax-react";
import "../styles/minor.css";

const Congratulations = () => {
  const score = 45;

  return (
    <div className="gameover-container">
      <div className="gameover-content">
        <h1 className="gameover-title extra">🎉 Congratulations! 🎉</h1>
        <Cup size="32" color="#d9e3f0" variant="Bold" className="rocket" />
        <p className="gameover-message">You scored {score} points!🎮</p>
        <div className="gameover-buttons">
          <Link to={`/play`}>
            <Button className="gameover-button"> 🔄 Play Again</Button>
          </Link>
          <Link to={`/`}>
            <Button className="gameover-button">🏠 Go Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
