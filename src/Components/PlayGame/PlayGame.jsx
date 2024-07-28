import React, { useState } from "react";
import "./PlayGame.css";
import d1 from "../Assets/dic_1.png";
import d2 from "../Assets/dic_2.png";
import d3 from "../Assets/dice_3.png";
import d4 from "../Assets/dice_4.png";
import d5 from "../Assets/dice_5.png";
import d6 from "../Assets/dice_6.png";
import Rules from "../Rules/Rules";

const PlayGame = () => {
  const buttons = [1, 2, 3, 4, 5, 6];
  const  [score, setScore] = useState(0);
  const [selectedNo, setSelectedNo] = useState();
  const [rollDice, setRollDice] = useState(d1);
  const [isSelected, setIsSelected] = useState(false);
  const[ruleButtonText, setRuleButtonText] = useState("Show Rules");
  const [showRules, setShowRules] = useState(false);


  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 7);
  };

  const reset = () =>{
    setScore(0);
  }

  const roll = () => {
    if (isSelected) {
      const randomNo = generateRandomNumber();
      if (randomNo === 1) {
        setRollDice(d1);
      } else if (randomNo === 2) {
        setRollDice(d2);
      } else if (randomNo === 3) {
        setRollDice(d3);
      } else if (randomNo === 4) {
        setRollDice(d4);
      } else if (randomNo === 5) {
        setRollDice(d5);
      } else if (randomNo === 6) {
        setRollDice(d6);
      }

      if(randomNo === selectedNo){

          setScore(score + selectedNo);
      }else if(score > 0){
        setScore(score - 1);
      }


    } else {
      alert("Please Select Number");
    }
  };
  
const showRule=()=>{
  ruleButtonText === "Show Rules"? setRuleButtonText("Hide Rules"): setRuleButtonText("Show Rules");
  setShowRules(!showRules);
}

  return (
    <div className="body">
      <div className="outter">
        <div className="score">
          <h1>{score}</h1>
          <p>Total Score</p>
        </div>
        <div className="selection">
          <div className="slectionButtons">
            {buttons.map((value, i) => (
              <button
                style={{
                  backgroundColor: selectedNo === value ? "Black" : "white",
                  color: selectedNo === value ? "white" : "black",
                }}
                key={i}
                onClick={() => {
                  setSelectedNo(value);
                  setIsSelected(true);
                }}
              >
                {value}
              </button>
            ))}
          </div>
          <div className="selectionText">
            <h5>Select Number</h5>
          </div>
        </div>
      </div>
      <div className="gambling">
        <img src={rollDice} alt="dice-roller" onClick={roll} />
        <p>Click on Dice to roll</p>
        <button onClick={reset}>Reset Score</button>
        <br />
        <button onClick={showRule}>{ruleButtonText}</button>
      </div>
      { showRules ? <Rules/> : <div></div> }
      <p className="footer">HIH</p>
    </div>
  );
};

export default PlayGame;
