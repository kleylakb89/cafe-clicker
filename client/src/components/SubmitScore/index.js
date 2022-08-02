import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_SCORE, UPDATE_SCORE } from '../../utils/mutations';
import ClickCounter from '../ClickCounter';
 
export default function SubmitScore() {
  const [score, setScore] = useState(0);

  const [addScore, {error}] = useMutation(CREATE_SCORE);
}