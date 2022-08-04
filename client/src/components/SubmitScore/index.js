import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_SCORE } from '../../utils/mutations';
 
export default function SubmitScore({score, setStatus}) {
  const [addScore] = useMutation(CREATE_SCORE);
  const saveScore = async (event) => {
    event.preventDefault();

    // saves score to database
    try {
      const data = await addScore({
        variables: {
          score
        }
      })
      setStatus('Game successfully submitted!');
    } catch (err) {
      console.error(err);
    }
  }
  return <button className="game-btn" onClick={saveScore}>Submit Score</button>
}