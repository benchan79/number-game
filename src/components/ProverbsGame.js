import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContextProvider";
import { Link } from "react-router-dom";

import { Input } from "./Input";
import { Button } from "./Button";
import { Prizes2 } from "./Prizes";
import { ProverbsData } from "./ProverbsData";
import '../css/NumberDisplay.css';

const styles = {
  marginLeft: 20,
  fontSize: 20,
};

const results = {
  display: "inline-block",
  textAlign: "left",
  marginTop: 20,
  marginBottom: 20,
  fontSize: 20,
};

const circle = {
  width: 50,
  height: 45,
  verticalAlign: "middle",
  borderRadius: "50%",
  fontSize: 34,
  color: "black",
  textAlign: "center",
  background: "lightblue",
  borderStyle: "solid",
  paddingTop: 5,
};

function ProverbsGame() {


  const [result, setResult] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [isOver, setIsOver] = useState(false);
  const [prize, setPrize] = useState(
    () => Prizes2[Math.floor(Math.random() * Prizes2.length + 1)]
  );

  const [questionCount, setQuestionCount] = useState(1)
  const [score, setScore] = useState(0)
  const [gameOverDisplay, setGameOverDisplay] = useState("")

  const [number, setNumber] = useState('');

  const submitHandler = () => {

    setAttempts((prevAttempts) => {
      return [...prevAttempts, ProverbsData[questionCount - 1]];
    });

    if (number === ProverbsData[questionCount - 1].value) {
      setResult(`Correct!`);
      setScore(prevScore => prevScore + 1);
    } else if (number !== ProverbsData[questionCount - 1].value) {
      setResult(`The correct answer is ${ProverbsData[questionCount - 1].value}.`);
    }

    if (questionCount > 12) {
      setGameOverDisplay(`Game Over. You won a ${prize}`);
      setIsOver(true);
      setPrize(Prizes2[Math.floor(Math.random() * Prizes2.length + 1)]);
      return;
    }

    setQuestionCount(prevQuestionCount => prevQuestionCount + 1);

  };

  const restartHandler = () => {
    setNumber("");
    setResult("");
    setAttempts([]);
    setIsOver(false);
    setPrize(Prizes2[Math.floor(Math.random() * Prizes2.length + 1)]);
    setQuestionCount(1);
    setScore(0);
    setGameOverDisplay("")
  };


  const handleButtonClick = (buttonNumber) => {
    // Replace this with your logic to generate the desired number
    // const randomNumber = Math.floor(Math.random() * 100);
    setNumber((prevNumber) => prevNumber + buttonNumber);
  };

  const handleColonButtonClick = () => {
    // Replace this with your logic to generate the desired number
    // const randomNumber = Math.floor(Math.random() * 100);
    setNumber((prevNumber) => prevNumber + ":");
  };

  const handleClearButtonClick = () => {
    setNumber("");
  }; 
  
  return (
    <div style={styles}>
      <h1>Let's Play the Proverbs Game!</h1>

      {questionCount}. {ProverbsData[questionCount - 1].label}

      <div className="button-container">
        {[...Array(10)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className="number-button"
            disabled={isOver}
          >
            {index}
          </button>
        ))}
        <button
          onClick={handleColonButtonClick}
          className="colon-button"
          disabled={isOver}
        >
          :
        </button>
        <button onClick={handleClearButtonClick} className="clear-button">
          Clear
        </button>
      </div>
      <div className="input-container">
        <input type="text" value={number} readOnly className="input-field" />
      </div>
      <div style={{ display: "flex", gap: 20 }}>
        <Button onClick={submitHandler} label="Submit!" disabled={isOver} />
        <Button onClick={restartHandler} label="New Game" />
      </div>

      <div style={results}>{result}</div>

      <div>Score: {score}</div>

      <div>{gameOverDisplay}</div>

      <p />
      <hr />
      <div>
        {attempts.map((qn) => (
          <div>
            {qn.id}. {qn.label} Proverb {qn.value}
          </div>
        ))}
      </div>
    </div>
  );
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

export default ProverbsGame;
