import React from 'react';
import { useMutation,  useLazyQuery } from '@apollo/client';
import { CREATE_GAME, UPDATE_GAME } from '../../utils/mutations';
import { QUERY_GAME } from '../../utils/queries';

export default function SaveGame({count, auto, multi, passive, cafe, setStatus}) {
    // utilized useLazyQuery so query can be made within the following function
    const [queryGame] = useLazyQuery(QUERY_GAME);
    const [createGame] = useMutation(CREATE_GAME);
    const [updateGame] = useMutation(UPDATE_GAME);

    const handleSave = async (event) => {
        event.preventDefault();
        const data = await queryGame({variables:{time:new Date()}});
        const {game} = data.data;
        // if no game exists, creates a new save for the user
        if (!game) {
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
                setStatus('Game successfully created!');
            } catch (err) {
                console.error(err);
            }
        // if there is an existing game associated with the user, updates that game
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
                setStatus('Game successfully updated!')
            } catch (err) {
                console.error(err);
            }

        }
    }
    return (<button className="game-btn" onClick={handleSave}>Save Game</button>)
}