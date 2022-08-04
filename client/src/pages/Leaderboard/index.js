import React from "react";
import { useQuery } from '@apollo/client';
import "./style.css";
import Nav from "../../components/Nav"
import { QUERY_SCORES } from '../../utils/queries';
import ScoresList from '../../components/ScoresList';

function Leaderboard() {
  // queries scores to load as a top ten list after passing the values to ScoresList
  const {loading, data} = useQuery(QUERY_SCORES);
  const scores = data?.scores || [];

  return (
    <>
      <Nav />
      <div className="game-space">
        <div className="layout">
          <h1 className="cafe-title">Leader Board</h1>
          <div className="score-list">
          <ScoresList scores={scores} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;