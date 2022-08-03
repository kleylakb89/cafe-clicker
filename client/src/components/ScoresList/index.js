import React from 'react';

const ScoresList = ({scores}) => {
  if (!scores.length) {
    return <p>No Scores Yet</p>;
  }

  const arr = [...scores];
  arr.sort((a, b) => {
    return b.score - a.score;
  });

  if (arr.length > 10) {
    while (arr.length > 10) {
      arr.pop();
    }
  }


  return (
    <ol>
      {arr.map((score) => (
        <li key={score._id}><span className="score-color">{score.score}</span>:  {score.user}</li>
      ))}
    </ol>
  )
};

export default ScoresList;