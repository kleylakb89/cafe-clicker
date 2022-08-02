import React, { useState } from "react";
import "./style.css";
import Nav from "../../components/Nav/index";
import ClickCounter from '../../components/ClickCounter';
import AutoClicker from '../../components/AutoClicker';
import MultiClicker from '../../components/MultiClicker';
import PassiveClicker from '../../components/PassiveClicker';
import SaveGame from "../../components/SaveGame";
import Auth from '../../utils/auth';
import Signup from "../Signup";
import SubmitScore from "../../components/SubmitScore";


function Game() {
  let [count, setCount] = useState(0);
  let [auto, setAuto] = useState(false);
  let [multi, setMulti] = useState(false);
  let [passive, setPassive] = useState(false);
  let [cafe, setCafe] = useState(0);

  const handleClick = () => {
    setCount((count + 1));
  };
  const handleAuto = () => {
    setAuto(true);
  };
  const handleMulti = () => {
    setMulti(true);
  };
  const handlePassive = () => {
    setPassive(true);
  };
  const handleCafe = () => {
    if (cafe < 6) {
      setCafe((cafe + 1));
    }
  };


  return (
    <div>
      {Auth.loggedIn() ? (
        <>
      <Nav />
      <div className="game-space">
        <div className="layout">
          <h1 className="cafe-title">Cafe Clicker</h1>
          <ClickCounter count={count} handleClick={handleClick} />
          <div className="power-title">Power Ups</div>
          <div className="powerups">
            <button className="power-btn">AutoClicker</button>
            <button className="power-btn">MultiClicker</button>
            <button className="power-btn">Passive Clicker</button>
          </div>
          <div className="game-funcs">
            <SaveGame count={count} auto={auto} multi={multi} passive={passive} cafe={cafe}/>
            <SubmitScore score={count}/>
          </div>

          <h2 className="how-title">Instructions:</h2>
          <div className="instructions">
            <p className="how-play">Click the avocado toast as many times as your fingers will allow! As the week goes by, and the clicks add up, you will receive power ups to help you gain more clicks.
              To begin, simply click the avocado toast and keep on clicking</p>

          </div>

        </div>
      </div>
      </>) : (
        <Signup />
      )}
    </div>
  );
}

export default Game;