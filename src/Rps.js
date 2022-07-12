import { useEffect, useState } from "react";

const Rps = () => {
  const [player, setPlayer] = useState(null);
  const [coop, setCoop] = useState(null);
  const [res, setRes] = useState(null);
  const [elements, setElements] = useState(["Rock", "Paper", "Scissors"]);
  const Winner = () => {
    if (
      (player === "Rock" && coop === "Scissors") ||
      (player === "Scissors" && coop === "Paper") ||
      (player === "Paper" && coop === "Rock")
    ) {
      setRes("You won");
    } else if (
      (coop === "Rock" && player === "Scissors") ||
      (coop === "Scissors" && player === "Paper") ||
      (coop === "Paper" && player === "Rock")
    ) {
      setRes("you lost");
    } else {
      setRes("tie");
    }
  };
  const handleClick = (e) => {
    if (e.target.id === "rock") {
      setPlayer("Rock");
    } else if (e.target.id === "paper") {
      setPlayer("Paper");
    } else if (e.target.id === "scissors") {
      setPlayer("Scissors");
    }
    let random = Math.floor(Math.random() * 3);
    setCoop(elements[random]);
  };
  useEffect(() => {
    player && coop && Winner();
  });
  return (
    <div className="rps">
      <div className="game-title">
        <h2>Rock Paper Scissors</h2>
      </div>
      <div className="game">
        <div className="players">
          {player && (
            <div>
              {" "}
              You <h3 className="player">{player}</h3>
            </div>
          )}
          {coop && (
            <div>
              {" "}
              Coop <h3 className="player">{coop}</h3>
            </div>
          )}
        </div>
        <div className="elements">
          <img
            className="element"
            id="rock"
            onClick={handleClick}
            src="https://github.com/HassanKourani/rps-images/blob/main/rock-removebg-preview.png?raw=true"
            alt="rock"
          />

          <img
            className="element"
            id="paper"
            onClick={handleClick}
            src="https://github.com/HassanKourani/rps-images/blob/main/paper-removebg-preview.png?raw=true"
            alt="rock"
          />

          <img
            className="element"
            id="scissors"
            onClick={handleClick}
            src="https://github.com/HassanKourani/rps-images/blob/main/scissors-removebg-preview.png?raw=true"
            alt="rock"
          />
        </div>
      </div>
      <div className="result">{res && <h3>{res}</h3>}</div>
    </div>
  );
};

export default Rps;
