import React from 'react';

const ScoresList = ({scores}) => {
  if (!scores.length) {
    return <p>No Scores Yet</p>;
  }

  const arr = [...scores];
  arr.sort((a, b) => {
    return b.score - a.score;
  });


  return (
    <ol>
      {arr.map((score) => (
        <li key={score._id}>{score.score}: {score.user}</li>
      ))}
    </ol>
  )
};

export default ScoresList;