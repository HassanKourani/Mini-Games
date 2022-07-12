import { useState, useEffect } from "react";
import { array as arr } from "./words";

const Wordle = () => {
  const [l0, setL0] = useState("");
  const [l1, setL1] = useState("");
  const [l2, setL2] = useState("");
  const [l3, setL3] = useState("");
  const [l4, setL4] = useState("");
  const [l5, setL5] = useState("");
  const [l6, setL6] = useState("");
  const [l7, setL7] = useState("");
  const [l8, setL8] = useState("");
  const [l9, setL9] = useState("");
  const [l10, setL10] = useState("");
  const [l11, setL11] = useState("");
  const [l12, setL12] = useState("");
  const [l13, setL13] = useState("");
  const [l14, setL14] = useState("");
  const [l15, setL15] = useState("");
  const [l16, setL16] = useState("");
  const [l17, setL17] = useState("");
  const [l18, setL18] = useState("");
  const [l19, setL19] = useState("");
  const [l20, setL20] = useState("");
  const [l21, setL21] = useState("");
  const [l22, setL22] = useState("");
  const [l23, setL23] = useState("");
  const [l24, setL24] = useState("");
  const [array] = useState(arr);
  const [random] = useState(Math.floor(Math.random() * array.length));
  const [count, setCount] = useState(0);
  const [word] = useState(array[random].split(""));
  const [input, setInput] = useState("");
  const letters = document.querySelectorAll(".letter"); //should be changed
  //console.log(word);
  //console.log(letters[0]);

  //const random = Math.floor(Math.random() * array.length);

  const Check = (guess, letter, node) => {
    //console.log(guess, letter, node, word);
    if (guess === letter) {
      letters[node].style.backgroundColor = "rgb(153, 214, 153)";
    } else if (word.includes(guess)) {
      letters[node].style.backgroundColor = "rgb(201, 201, 125)";
    } else if (!word.includes(guess)) {
      letters[node].style.backgroundColor = "rgb(168, 168, 168)";
    }
  };

  const handleClick = (e) => {
    let guess = input.split("");
    if (guess.length === 5) {
      //   for (let i = 0; i < 5; i++) {
      //     for (let j = 0; j < 5; j++) {
      //       if (count === i) {
      //         arr[i][j](guess[j]);
      //         Check(guess[j], word[j], i * i + j);
      //       }
      //     }
      //   }
      if (count === 0) {
        setL0(guess[0]);
        Check(guess[0], word[0], 0);
        setL1(guess[1]);
        Check(guess[1], word[1], 1);
        setL2(guess[2]);
        Check(guess[2], word[2], 2);
        setL3(guess[3]);
        Check(guess[3], word[3], 3);
        setL4(guess[4]);
        Check(guess[4], word[4], 4);
      } else if (count === 1) {
        setL5(guess[0]);
        Check(guess[0], word[0], 5);
        setL6(guess[1]);
        Check(guess[1], word[1], 6);
        setL7(guess[2]);
        Check(guess[2], word[2], 7);
        setL8(guess[3]);
        Check(guess[3], word[3], 8);
        setL9(guess[4]);
        Check(guess[4], word[4], 9);
      } else if (count === 2) {
        setL10(guess[0]);
        Check(guess[0], word[0], 10);
        setL11(guess[1]);
        Check(guess[1], word[1], 11);
        setL12(guess[2]);
        Check(guess[2], word[2], 12);
        setL13(guess[3]);
        Check(guess[3], word[3], 13);
        setL14(guess[4]);
        Check(guess[4], word[4], 14);
      } else if (count === 3) {
        setL15(guess[0]);
        Check(guess[0], word[0], 15);
        setL16(guess[1]);
        Check(guess[1], word[1], 16);
        setL17(guess[2]);
        Check(guess[2], word[2], 17);
        setL18(guess[3]);
        Check(guess[3], word[3], 18);
        setL19(guess[4]);
        Check(guess[4], word[4], 19);
      } else if (count === 4) {
        setL20(guess[0]);
        Check(guess[0], word[0], 20);
        setL21(guess[1]);
        Check(guess[1], word[1], 21);
        setL22(guess[2]);
        Check(guess[2], word[2], 22);
        setL23(guess[3]);
        Check(guess[3], word[3], 23);
        setL24(guess[4]);
        Check(guess[4], word[4], 24);
      }
      const num = count + 1;
      setCount(num);
      setInput("");
    }
    if (input === word.join("")) {
      console.log("WIN");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }

    // console.log(guess);
    // console.log(word);
  };
  if (count === 5) {
    console.log("LOSE");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  return (
    <div className="Wordle">
      <div className="game-title">
        <h2>Wordle</h2>
      </div>
      <div className="game">
        {/* word 1 */}
        <div className="word">
          <div className="letter">{l0}</div>
          <div className="letter">{l1}</div>
          <div className="letter">{l2}</div>
          <div className="letter">{l3}</div>
          <div className="letter">{l4}</div>
        </div>
        {/* word 2 */}
        <div className="word">
          <div className="letter">{l5}</div>
          <div className="letter">{l6}</div>
          <div className="letter">{l7}</div>
          <div className="letter">{l8}</div>
          <div className="letter">{l9}</div>
        </div>
        {/* word 3 */}
        <div className="word">
          <div className="letter">{l10}</div>
          <div className="letter">{l11}</div>
          <div className="letter">{l12}</div>
          <div className="letter">{l13}</div>
          <div className="letter">{l14}</div>
        </div>
        {/* word 2 */}
        <div className="word">
          <div className="letter">{l15}</div>
          <div className="letter">{l16}</div>
          <div className="letter">{l17}</div>
          <div className="letter">{l18}</div>
          <div className="letter">{l19}</div>
        </div>
        {/* word 5 */}
        <div className="word">
          <div className="letter">{l20}</div>
          <div className="letter">{l21}</div>
          <div className="letter">{l22}</div>
          <div className="letter">{l23}</div>
          <div className="letter">{l24}</div>
        </div>
        <div className="input-btn">
          <input
            type="text"
            className="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ENTER YOUR WORD"
          />
          <button className="btn" onClick={handleClick}>
            Try
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wordle;
