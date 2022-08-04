import React from 'react';

const ScoresList = ({scores}) => {
  // component for returning the top ten high scores
  if (!scores.length) {
    return <p>No Scores Yet</p>;
  }

  // copy the queried scores into an array to be sorted by highest
  const arr = [...scores];
  arr.sort((a, b) => {
    return b.score - a.score;
  });

  // if array is longer than ten, pops the scores from the array until only ten remain
  if (arr.length > 10) {
    while (arr.length > 10) {
      arr.pop();
    }
  }


  return (
    <ol className='o-list'>
      {arr.map((score) => (
        <li key={score._id}><span className="score-color">{score.score}</span>:  {score.user}</li>
      ))}
    </ol>
  )
};

export default ScoresList;