import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/home.css";
import "../styles/carousel.css";
import geo from "../assets/images/geography.png";
import { categories } from "../components/Category";
import { trivia_categories } from "./TriviaDB";

function HomeCarousel() {
  return (
    <Carousel>
      {trivia_categories.map((category, index) => (
        <Carousel.Item key={index}>
          <img src={category.image} alt="category image" />
          <div className="caption">
            <h5>{category.name}</h5>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HomeCarousel;
