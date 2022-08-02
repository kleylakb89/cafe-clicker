import React, { useState } from "react";
import "./style.css";
import Nav from "../../components/Nav/index";

function Leaderboard() {
  return (
    <div>
      <Nav />
      <div className="game-space">
        <div className="layout">
          <h1 className="cafe-title">Leader Board</h1>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;