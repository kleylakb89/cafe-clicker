import React, { useState } from "react";
import "./style.css";
import Nav from "../../components/Nav/index";
import ClickCounter from '../../components/ClickCounter';

function Game() {
  return (
    <div>
      <Nav />
      <div className="game-space">
        <div className="layout">
          <div className="container-fluid"></div>
          <h1 className="cafe-title">Cafe Clicker</h1>
          <ClickCounter />
          <div className="power-title">Power Ups</div>
          <div className="powerups">
            <button className="power-btn">Butter Me Up</button>
            <button className="power-btn">Add Garlic </button>
            <button className="power-btn">Holy Shit Thats Good</button>
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