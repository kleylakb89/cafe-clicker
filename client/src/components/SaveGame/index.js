import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_GAME, UPDATE_GAME } from '../../utils/mutations';
import { QUERY_GAME } from '../../utils/queries';

export default function SaveGame({count, auto, multi, passive, cafe}) {
    const {loading, data} = useQuery(QUERY_GAME);
    const [createGame] = useMutation(CREATE_GAME);
    const [updateGame] = useMutation(UPDATE_GAME);

    const handleSave = async (event) => {
        event.preventDefault();
        if (!data.game) {
            try {
                const data = await createGame({
                    variables: {
                        clicks: count,
                        autoClicker: auto,
                        multiClicker: multi,
                        passiveClicker: passive,
                        cafeState: cafe
                    }
                });
                console.log(data);
            } catch (err) {
                console.error(err);
            }
        } else {
            try {
                const data = await updateGame({
                    variables: {
                        clicks: count,
                        autoClicker: auto,
                        multiClicker: multi,
                        passiveClicker: passive,
                        cafeState: cafe
                    }
                });
                console.log(data);
            } catch (err) {
                console.error(err);
            }

        }
    }
    return (<button className="game-btn" onClick={handleSave}>Save Game</button>)
}