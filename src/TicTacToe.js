import { useEffect, useState } from "react";
const TicTacToe = () => {
  const [box1, setBox1] = useState("");
  const [box2, setBox2] = useState("");
  const [box3, setBox3] = useState("");
  const [box4, setBox4] = useState("");
  const [box5, setBox5] = useState("");
  const [box6, setBox6] = useState("");
  const [box7, setBox7] = useState("");
  const [box8, setBox8] = useState("");
  const [box9, setBox9] = useState("");
  const [num, setNum] = useState(0);
  const [res, setRes] = useState(null);
  function Checker() {
    let letter = "";
    if (num % 2 === 0) {
      letter = "X";
    } else {
      letter = "O";
    }
    //console.log(letter);
    return letter;
  }
  const reset = () => {
    setBox1("");
    setBox2("");
    setBox3("");
    setBox4("");
    setBox5("");
    setBox6("");
    setBox7("");
    setBox8("");
    setBox9("");
    setNum(0);
    setTimeout(() => {
      setRes(null);
    }, 2000);
  };
  const Winner = () => {
    if (box1 === "X" && box2 === "X" && box3 === "X") {
      setRes("X is the Winner");
      console.log("Winner");
      reset();
    } else if (box4 === "X" && box5 === "X" && box6 === "X") {
      setRes("X is the Winner");
      console.log("Winner");
      reset();
    } else if (box7 === "X" && box8 === "X" && box9 === "X") {
      setRes("X is the Winner");
      console.log("Winner");
      reset();
    } else if (box1 === "X" && box4 === "X" && box7 === "X") {
      setRes("X is the Winner");
      console.log("Winner");
      reset();
    } else if (box2 === "X" && box5 === "X" && box8 === "X") {
      setRes("X is the Winner");
      console.log("Winner");
      reset();
    } else if (box3 === "X" && box6 === "X" && box9 === "X") {
      setRes("X is the Winner");
      console.log("Winner");
      reset();
    } else if (box1 === "X" && box5 === "X" && box9 === "X") {
      setRes("X is the Winner");
      console.log("Winner");
      reset();
    } else if (box3 === "X" && box5 === "X" && box7 === "X") {
      setRes("X is the Winner");
      console.log("Winner");
      reset();
    }
    // check O is Winner
    else if (box1 === "O" && box2 === "O" && box3 === "O") {
      setRes("O is the Winner");
      console.log("Winner");
      reset();
    } else if (box4 === "O" && box5 === "O" && box6 === "O") {
      setRes("O is the Winner");
      console.log("Winner");
      reset();
    } else if (box7 === "O" && box8 === "O" && box9 === "O") {
      setRes("O is the Winner");
      console.log("Winner");
      reset();
    } else if (box1 === "O" && box4 === "O" && box7 === "O") {
      setRes("O is the Winner");
      console.log("Winner");
      reset();
    } else if (box2 === "O" && box5 === "O" && box8 === "O") {
      setRes("O is the Winner");
      console.log("Winner");
      reset();
    } else if (box3 === "O" && box6 === "O" && box9 === "O") {
      setRes("O is the Winner");
      console.log("Winner");
      reset();
    } else if (box1 === "O" && box5 === "O" && box9 === "O") {
      setRes("O is the Winner");
      console.log("Winner");
      reset();
    } else if (box3 === "O" && box5 === "O" && box7 === "O") {
      setRes("O is the Winner");
      console.log("Winner");
      reset();
    } else if (
      box1.innerHTML !== "" &&
      box2.innerHTML !== "" &&
      box3.innerHTML !== "" &&
      box4.innerHTML !== "" &&
      box5.innerHTML !== "" &&
      box6.innerHTML !== "" &&
      box7.innerHTML !== "" &&
      box8.innerHTML !== "" &&
      box9.innerHTML !== "" &&
      num === 9
    ) {
      setRes("Draw");
      reset();
    }
  };
  const handleClick = (command, e) => {
    //console.log(e.target.innerText);
    //console.log(command);
    if (e.target.innerText === "") {
      if (command === "setBox1") {
        setBox1(Checker);
      } else if (command === "setBox2") {
        setBox2(Checker);
      } else if (command === "setBox3") {
        setBox3(Checker);
      } else if (command === "setBox4") {
        setBox4(Checker);
      } else if (command === "setBox5") {
        setBox5(Checker);
      } else if (command === "setBox6") {
        setBox6(Checker);
      } else if (command === "setBox7") {
        setBox7(Checker);
      } else if (command === "setBox8") {
        setBox8(Checker);
      } else if (command === "setBox9") {
        setBox9(Checker);
      }
      const count = num + 1;
      setNum(count);
      //console.log(num);
    }
  };
  useEffect(() => {
    Winner();
  });
  return (
    <div className="tictactoe">
      <div className="game-title">
        <h2>Tic Tac Toe </h2>
      </div>

      <div className="game">
        <div className="rows" id="row1">
          <div
            className="box"
            id="b1"
            onClick={(e) => handleClick("setBox1", e)}
          >
            {box1}
          </div>
          <div
            className="box"
            id="b2"
            onClick={(e) => handleClick("setBox2", e)}
          >
            {box2}
          </div>
          <div
            className="box"
            id="b3"
            onClick={(e) => handleClick("setBox3", e)}
          >
            {box3}
          </div>
        </div>
        <div className="rows" id="row2">
          <div
            className="box"
            id="b4"
            onClick={(e) => handleClick("setBox4", e)}
          >
            {box4}
          </div>
          <div
            className="box"
            id="b5"
            onClick={(e) => handleClick("setBox5", e)}
          >
            {box5}
          </div>
          <div
            className="box"
            id="b6"
            onClick={(e) => handleClick("setBox6", e)}
          >
            {box6}
          </div>
        </div>
        <div className="rows" id="row3">
          <div
            className="box"
            id="b7"
            onClick={(e) => handleClick("setBox7", e)}
          >
            {box7}
          </div>
          <div
            className="box"
            id="b8"
            onClick={(e) => handleClick("setBox8", e)}
          >
            {box8}
          </div>
          <div
            className="box"
            id="b9"
            onClick={(e) => handleClick("setBox9", e)}
          >
            {box9}
          </div>
        </div>
        {res && <h2>{res}</h2>}
        {/* {setTimeout(setRes(null), 1000)} */}
      </div>
    </div>
  );
};

export default TicTacToe;
