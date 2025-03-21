import React from "react";
import { Link } from "react-router-dom";
import "../styles/minor.css";
import { Button } from "react-bootstrap";

function GameOver() {
  return (
    <div className="gameover-container">
      <div className="gameover-content">
        <h1 className="gameover-title">Game Over</h1>
        <p className="gameover-message">Better luck next time! 🎮</p>
        <div className="gameover-buttons">
          <Link to={`/play`}>
            <Button className="gameover-button">Play Again</Button>
          </Link>
          <Link to={`/`}>
            <Button className="gameover-button">Go to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GameOver;
