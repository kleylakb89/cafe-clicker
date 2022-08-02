import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_GAME } from '../../utils/mutations';
import Auth from '../../utils/auth';

export default function SaveGame({count, auto, multi, passive, cafe}) {
    const [createGame, {error}] = useMutation(CREATE_GAME);

    console.log(Auth.getProfile);
    const handleSave = async (event) => {
        event.preventDefault();
        
        try {
            const data = await createGame({
                variables: {
                    clicks: count,
                    autoClicker: auto,
                    multiClicker: multi,
                    passiveClicker: passive,
                    cafeState: cafe
                }
            })
        } catch (err) {
            console.error(err);
        }
    }
    return (<button className="game-btn" onClick={handleSave}>Save Game</button>)
}