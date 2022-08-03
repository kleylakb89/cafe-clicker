import React, { useState } from "react";
import { useQuery } from '@apollo/client';
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
import { QUERY_GAME } from '../../utils/queries';
import CafeState from "../Cafe";


function Game() {
  
  let [count, setCount] = useState(0);
  let [auto, setAuto] = useState(false);
  let [multi, setMulti] = useState(false);
  let [passive, setPassive] = useState(false);
  let [cafe, setCafe] = useState(0);
  
  const {loading, data} = useQuery(QUERY_GAME);

  const loadGame = () => {
    if (data.game) {
      setCount(data.game.clicks);
      setAuto(data.game.autoClicker);
      setMulti(data.game.multiClicker);
      setPassive(data.game.passiveClicker);
      setCafe(data.game.cafeState);
    }
  };

  const deleteGame = () => {
    setCount(0);
    setAuto(false);
    setMulti(false);
    setPassive(false);
    setCafe(0)
};
  
  const handleCafe = () => {
    if (cafe < 6) {
      setCafe((cafe + 1));
    }
  };
  const handleClick = () => {
    setCount((count + 1));
    if (count === 5) {
      handleCafe();
      alert("cafe updated!")
    }
    if (count === 10) {
      handleCafe();
      alert("cafe updated!")

    }
    if (count === 15) {
      handleCafe();
      alert("cafe updated!")

    }
    if (count === 20) {
      handleCafe();
      alert("cafe updated!")

    }
    if (count === 25) {
      handleCafe();
      alert("cafe updated!")

    }
    if (count === 30) {
      handleCafe();
      alert("cafe updated!")

    }
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


  return (
    <div>
      {Auth.loggedIn() ? (
        <>
      <Nav cafe={cafe}/>
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
            <button className="load-game" onClick={loadGame}>Load Game</button>
            <button className="load-game" onClick={deleteGame}>New Game</button>
            <SubmitScore score={count}/>
          </div>

          <h2 className="how-title">Instructions:</h2>
          <div className="instructions">
            <p className="how-play">Click the avocado toast as many times as your fingers will allow! As the week goes by, and the clicks add up, you will receive power ups to help you gain more clicks.
              To begin, simply click the avocado toast and keep on clicking</p>

          </div>

      <div>
        <CafeState cafe={cafe}/>
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