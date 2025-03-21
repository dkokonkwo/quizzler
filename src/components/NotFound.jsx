import React from "react";
import { Link } from "react-router-dom";
import "../styles/minor.css";
import { Button } from "react-bootstrap";

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to={`/quizzler`}>
          <Button className="notfound-button">Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
