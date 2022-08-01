import React, { useState } from "react";
import "./style.css";
import Nav from "../../components/Nav/index";
import Avac1 from "../../images/Avac1.png";

function Game() {
  return (
    <div>
      <Nav />
      <div className="game-space">
        <div className="layout">
          <div className="container-fluid"></div>
          <h1 className="cafe-title">Cafe Clicker</h1>
          <div className="my-auto">
            <img src={Avac1} alt="Avacado" width="700px" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;