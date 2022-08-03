import React from "react";
import { useQuery } from '@apollo/client';
import "./style.css";
import Nav from "../../components/Nav/index";
import { QUERY_SCORES } from '../../utils/queries';
import ScoresList from '../../components/ScoresList';

function Leaderboard() {
  const {loading, data} = useQuery(QUERY_SCORES);
  const scores = data?.scores || [];

  return (
    <div>
      <Nav />
      <div className="game-space">
        <div className="layout">
          <h1 className="cafe-title">Leader Board</h1>
          <ScoresList scores={scores} />
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;