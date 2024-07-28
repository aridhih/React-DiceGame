import React from "react";
import dices from '../Assets/dices.png'
import "./StartGame.css";
const StartGame = ({Toggle}) => {
  return (
    <div>
      <div className="container">
      <div className="image">
          <img src={dices} alt="dices"/>
        </div>
        <div className="info">
          <h1>DICE GAME</h1>
          <button onClick={Toggle}>Play Now</button>
        </div>
      </div>
    </div>
  );
};

export default StartGame;
