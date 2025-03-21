import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/play.css";
import diff from "../assets/images/diff.png";
import { Award, Teacher, Shuffle } from "iconsax-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSplotch } from "@fortawesome/free-solid-svg-icons";

const difficulties = ["Easy", "Medium", "Hard", "Random"];

const icons = [
  <Award size="20" color="#377DF7" variant="Bold" />,
  <Teacher size="20" color="#FF7262" variant="Bold" />,
  <FontAwesomeIcon icon={faSplotch} className="splotch" aria-hidden={true} />,
  <Shuffle size="20" color="#26B5C5" variant="Bold" />,
];

const lives = [5, 3, 3, 4];

function Difficulty() {
  const params = useParams();
  console.log(params);
  return (
    <div className="difficulties-container">
      <h3>Difficulty</h3>
      <h4 className="params">{params.category}</h4>
      <div className="difficulties-card">
        {difficulties.map((difficulty, index) => (
          <Link
            key={difficulty}
            to={`/play/${params.category}/${difficulty.toLowerCase()}`}
            className="difficulty-link"
          >
            <div key={difficulty} className="diff-card">
              <svg width="0" height="0">
                <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                  <stop stopColor="#FF6250" offset="0" />
                  <stop stopColor="#FF6250" offset="0.05" />
                  <stop stopColor="#fd5949" offset="0.45" />
                  <stop stopColor="#d6249f" offset="0.6" />
                  <stop stopColor="#A259FF" offset="0.9" />
                </radialGradient>
              </svg>
              <div
                className={
                  index == 2 ? `icon-frame ${difficulty}` : "icon-frame"
                }
              >
                {icons[index]}
              </div>
              <img src={diff} alt="difficulty image" />
              <div className="diff-details">
                <h5>{difficulty}</h5>
                <p>
                  <strong>{lives[index]}</strong> lives
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Difficulty;
