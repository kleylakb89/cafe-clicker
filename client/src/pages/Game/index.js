import React, { useState } from "react";
import "./style.css";
import Nav from "../../components/Nav/index";
import ClickCounter from '../../components/ClickCounter';
import Avac1 from "../../images/Avac1.png";

function Game() {
  let [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count + 1));
  };


  return (
    <div>
      <Nav />
      <div className="game-space">
        <div className="layout">
          <div className="container-fluid"></div>
          <h1 className="cafe-title">Cafe Clicker</h1>
          <ClickCounter count={count} handleClick={handleClick} />
          <div className="power-title">Power Ups</div>
          <div className="powerups">
            <button className="power-btn">AutoClicker</button>
            <button className="power-btn">MultiClicker</button>
            <button className="power-btn">Passive Clicker</button>
          </div>
          <div className="game-funcs">
            <button className="game-btn">Save Game</button>
            <button className="game-btn">Submit Score</button>
          </div>

          <h2 className="how-title">Instructions:</h2>
          <div className="instructions">
            <p className="how-play">Click the avocado toast as many times as your fingers will allow! As the week goes by, and the clicks add up, you will receive power ups to help you gain more clicks.
              To begin, simply click the avocado toast and keep on clicking</p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Game;