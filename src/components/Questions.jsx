import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/play.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import LoadingThreeDotsJumping from "./Loader";
import { Button, Modal, Alert } from "react-bootstrap";
import GameOver from "./GameOver";
import Congratulations from "./Congratulations";

const lives = { easy: 5, medium: 3, hard: 3, random: 4 };
const letters = ["A", "B", "C", "D"];

function MyQuestions() {
  const params = useParams();
  // console.log(params);
  const [loading, setLoading] = useState(true);
  const [numLives, setNumLives] = useState(() => lives[params.difficulty] || 3);
  const [questions, setQuestions] = useState({ results: [] });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [options, setOptions] = useState([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!params.category || !params.difficulty) return;

    const apiUrl = `https://opentdb.com/api.php?amount=15&category=${params.category}&difficulty=${params.difficulty}&type=multiple`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        console.log("Response: ", result);

        if (!result || !Array.isArray(result.results)) {
          throw new Error(
            "Invalid API response structure: Missing 'results' array"
          );
        }

        setQuestions(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.category, params.difficulty]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // Update current question on screen
  useEffect(() => {
    if (questions.results && questions.results.length !== 0) {
      const currentQuestion = questions.results[currentQuestionIndex];

      if (currentQuestion) {
        const allOptions = [
          ...currentQuestion.incorrect_answers,
          currentQuestion.correct_answer,
        ];

        shuffleArray(allOptions);

        setOptions(allOptions);
      }
    }
  }, [questions, currentQuestionIndex]);

  // check for correct or wrong answer
  const handleOptionClick = (selectedOption) => {
    setUserAnswer(selectedOption);
    const isAnswerCorrect =
      selectedOption === questions.results[currentQuestionIndex].correct_answer;
    setIsCorrect(isAnswerCorrect);

    setScore((prevScore) =>
      isAnswerCorrect && prevScore < 30 ? prevScore + 3 : prevScore
    );
    setNumLives((prevLives) =>
      !isAnswerCorrect && prevLives > 0 ? prevLives - 1 : prevLives
    );

    // Delay for a moment before moving to the next question
    setTimeout(() => {
      setUserAnswer(null);
      setIsCorrect(null);

      if (currentQuestionIndex < questions.results.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Handle the end of the trivia, e.g., display a "Game Over" message
        setFinished(true);
        console.log("Game Over");
      }
    }, 1500);
  };

  // decodeHTML
  const decodeHtmlEntities = (encodedStr) => {
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(encodedStr, "text/html").body
      .textContent;
    return decodedString;
  };

  return (
    <>
      {loading ? (
        <LoadingThreeDotsJumping />
      ) : numLives > 0 && !finished ? (
        <div className="questions-container">
          {isCorrect !== null && (
            <Modal show={isCorrect !== null}>
              <Modal.Body>{isCorrect ? "Correct!" : "Incorrect."}</Modal.Body>
            </Modal>
          )}
          <div className="questions-heading">
            <h4 className="cat">{params.category.toLocaleUpperCase()}</h4>
            <div className="question-difficulty">
              <h4>{params.difficulty.toLocaleUpperCase()}</h4>
              <div className="lives-container">
                <div className="lives">
                  {Array.from({ length: numLives }, (_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faHeart}
                      className="hearty"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <h3>Question {currentQuestionIndex + 1} of 15</h3>
          <div className="wrapper">
            <div className="question">
              <h3>
                {decodeHtmlEntities(
                  questions.results[currentQuestionIndex].question
                )}
              </h3>
            </div>
          </div>
          <div className="options">
            {Array.from({ length: options.length }, (_, index) => (
              <Button
                key={index}
                className={
                  isCorrect !== null &&
                  options[index] ===
                    questions.results[currentQuestionIndex].correct_answer
                    ? "opt correct"
                    : "opt"
                }
                onClick={() => handleOptionClick(options[index])}
              >
                <p>{letters[index]}</p>
                <h6>{decodeHtmlEntities(options[index])}</h6>
              </Button>
            ))}
          </div>
        </div>
      ) : !numLives && !finished ? (
        <GameOver />
      ) : (
        <Congratulations />
      )}
    </>
  );
}

export default MyQuestions;
