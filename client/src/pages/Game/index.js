import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import "./style.css";
import Nav from "../../components/Nav/index";
import ClickCounter from "../../components/ClickCounter";
import SaveGame from "../../components/SaveGame";
import Auth from "../../utils/auth";
import Signup from "../Signup";
import SubmitScore from "../../components/SubmitScore";
import { QUERY_GAME } from "../../utils/queries";
import CafeState from "../Cafe";

function Game() {
  // start by setting everything to base new game state
  let [count, setCount] = useState(0);
  let [auto, setAuto] = useState(false);
  let [multi, setMulti] = useState(false);
  let [passive, setPassive] = useState(false);
  let [cafe, setCafe] = useState(0);
  let [status, setStatus] = useState('');
  
  // using lazy query to call within function
  const [queryGame] = useLazyQuery(QUERY_GAME);

  // queries latest saved game and sets the variables to the state from the saved game
  const loadGame = async () => {
    const data = await queryGame({variables:{time:new Date()}});
    const {game} = data.data;
    if (game) {
      setCount(game.clicks);
      setAuto(game.autoClicker);
      setMulti(game.multiClicker);
      setPassive(game.passiveClicker);
      setCafe(game.cafeState);
      setStatus('Game loaded!');
    }
  };

  // sets everything to a new game state and updates status
  const deleteGame = () => {
    setCount(0);
    setAuto(false);
    setMulti(false);
    setPassive(false);
    setCafe(0);
    setStatus('New game created! Hit save game to overwrite or load game to retrieve previous game.');
  };

  // increments cafe
  const handleCafe = () => {
    if (cafe < 6) {
      setCafe(cafe + 1);
    }
  };

  // handles clicking on the avocado
  const handleClick = () => {
    // if multi power up is active, clicks are doubled
    if (multi) {
      setCount(count + 2);
    // otherwise one click increases count by one
    } else {
      setCount(count + 1);
    }

    // automatically updates cafe when the clicks hit certain numbers
    if (count === 10) {
      handleCafe();
      alert("cafe updated!");
    }
    if (count === 20) {
      handleCafe();
      alert("cafe updated!");
    }
    if (count === 30) {
      handleCafe();
      alert("cafe updated!");
    }
    if (count === 40) {
      handleCafe();
      alert("cafe updated!");
    }
    if (count === 50) {
      handleCafe();
      alert("cafe updated!");
    }
    if (count === 60) {
      handleCafe();
      alert("cafe updated!");
    }
  };

  // setting up an interval for the autoclicker power up
useEffect(() => {
    let interval;
    // every second the autoclicker adds one click
    if (auto) {
      interval = setInterval(() => {
        setCount(c=>c+1);
      }, 1000);
      
    }
    // leaving the page clears the interval
    return ()=>{
      clearInterval(interval);
    }
  }, [auto]);

  // when user passes 20 clicks, they can choose to active the autoclicker
  const handleAuto = () => {
    if (count > 20) {
      setAuto(true);
    }
    
  };

  // when user passes 40 clicks, they can choose to active the multiclicker
  const handleMulti = () => {
    if (count > 40) {
      setMulti(true);
    }
  };

  // powerup code to utilize in future development
  // const handlePassive = () => {
  //   setPassive(true);
  // };

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <Nav />

          <div className="">
            <div className="layout">
              <h4 className="status-text">{status}</h4>
              <h1 className="cafe-title">Cafe Clicker</h1>
              <ClickCounter count={count} handleClick={handleClick} />
              <div className="powerside">
                <div className="power-title">Power Ups</div>
                <div className="powerups">
                  <button className="power-btn" onClick={handleAuto}>AutoClicker (20)</button>
                  <button className="power-btn" onClick={handleMulti}>MultiClicker (40)</button>
                  {/* <button className="power-btn">Passive Clicker</button> */}
                </div>
              </div>
              <div className="gameside">
                <div className="game-funcs">
                  <SaveGame
                    setStatus={setStatus}
                    count={count}
                    auto={auto}
                    multi={multi}
                    passive={passive}
                    cafe={cafe}
                  />
                  <button className="load-game" onClick={loadGame}>
                    Load Game
                  </button>
                  <button className="load-game" onClick={deleteGame}>
                    New Game
                  </button>
                  <SubmitScore score={count}
                  setStatus={setStatus} />
                </div>
                <h2 className="how-title">Instructions:</h2>
                <div className="instructions">
                  <p className="how-play">
                    Click the avocado toast as many times as your fingers will
                    allow! As the clicks add up, you will
                    receive power ups to help you gain more clicks. To begin,
                    simply click the avocado toast and keep on clicking
                  </p>
                </div>
              </div>
            </div>
            <div className="caf-head">
              <div className="welcome">Welcome To Your Cafe</div>
            </div>
            <div className="cafe-container" id="view-cafe">
              <CafeState cafe={cafe} />
            </div>
          </div>
        </>
      ) : (
        <Signup />
      )}
    </div>
  );
}

export default Game;
