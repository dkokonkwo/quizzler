import React from "react";
import * as motion from "motion/react-client";
import "../styles/play.css";
import { Apple, Brush2 } from "iconsax-react";
import { Link } from "react-router-dom";
import arty from "../assets/images/art.png";
import { trivia_categories } from "./TriviaDB";

export const categories = [
  "Art",
  "Collectibles",
  "Music",
  "Photography",
  "Video",
  "Utility",
  "Sport",
  "Virtual Worlds",
];

// export const cat = [
//   { title: "art", image: "geo", number: 25 },
//   { title: "history", image: "geo", number: 25 },
// ];

function QuestionCategories() {
  return (
    <div className="categories-container">
      <h3>Browse Categories</h3>
      <div className="categories-card">
        {trivia_categories.map((cat, index) => (
          <Link
            key={index}
            to={`/quizzler/play/${cat.id}`}
            className="category-link"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: {
                  type: "spring",
                  visualDuration: index * 0.4,
                  bounce: 0.5,
                },
              }}
              className="ball"
            >
              <div className="cat-img">
                <img src={cat.image} alt="image for category" />
                <Brush2 size="35" color="#FFFFFF" className="cat-icon" />
              </div>
              <p>{cat.name}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default QuestionCategories;
