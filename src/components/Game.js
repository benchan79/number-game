import { useContext, useState } from "react";
import AuthContext from "../context/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";

import { Input } from "./Input";
import { Button } from "./Button";
import { Prizes } from "./Prizes";

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

function Game() {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const [answer, setAnswer] = useState(() =>
    Math.floor(Math.random() * 20 + 1)
  );
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [isOver, setIsOver] = useState(false);
  const [prize, setPrize] = useState(
    () => Prizes[Math.floor(Math.random() * Prizes.length + 1)]
  );

  const inputHandler = ({ target }) => {
    const value = target.value;
    if (isNaN(value)) {
      return;
    }
    setGuess(+value);
  };

  const submitHandler = () => {
    if (guess < 1 || guess > 20) {
      alert("Invalid value. Please enter a number between 1 and 20.");
      setGuess("");
      return;
    } else if (guess === answer) {
      setResult(`Correct! You won a ${prize}!`);
      setIsOver(true);
      return;
    } else if (attempts.length > 2) {
      setResult("Sorry! Please try again!");
      setIsOver(true);
      return;
    }
    if (guess < answer) {
      setResult(`${guess} is too small.`);
    } else {
      setResult(`${guess} is too big.`);
    }

    setAttempts((prevAttempts) => {
      return [...prevAttempts, guess];
    });
    setGuess("");
  };

  const restartHandler = () => {
    setGuess("");
    setResult("");
    setAttempts([]);
    setAnswer(Math.floor(Math.random() * 20 + 1));
    setIsOver(false);
    setPrize(Prizes[Math.floor(Math.random() * Prizes.length + 1)]);
  };

  if (!authCtx.isLoggedIn) {
    return (
      <div style={styles}>
        <h1>Unauthorized!</h1>
        Please login first!
        <p />
        <Link
          to="/login"
          onClick={(e) => {
            e.preventDefault();
            navigate("/login", { replace: true });
          }}
        >
          Click here to login
        </Link>
      </div>
    );
  }

  return (
    <div style={styles}>
      <h2>Hello {authCtx.user.username} !</h2>
      <h1>Guess the Mystery Number!</h1>
      <h3>The mystery number is between 1 and 20 inclusive.</h3>
      <h3>You have only 4 chances! Good Luck!</h3>
      <Input onChange={inputHandler} value={guess} />
      <p />
      <div style={{ display: "flex", gap: 20 }}>
        <Button onClick={submitHandler} label="Guess!" disabled={isOver} />
        <Button onClick={restartHandler} label="New Game" />
      </div>

      <div style={results}>{result}</div>

      <div style={{ display: "flex", gap: "20px" }}>
        {attempts.map((tryNum, i) => (
          <span key={i} style={circle}>
            {tryNum}
          </span>
        ))}
      </div>
      <p />
      <hr />
    </div>
  );
}

export default Game;
