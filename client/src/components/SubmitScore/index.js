import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_SCORE, UPDATE_SCORE } from '../../utils/mutations';
import ClickCounter from '../ClickCounter';
 
export default function SubmitScore({score}) {
  const [addScore, {error}] = useMutation(CREATE_SCORE);

  const saveScore = async (event) => {
    event.preventDefault();

    try {
      const data = await addScore({
        variables: {
          score,

        }
      })
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  return <button className="game-btn" onClick={saveScore}>Submit Score</button>
}