import React, { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from "./pages/Signup";
import Game from "./pages/Game";
import Leaderboard from './pages/Leaderboard';
import ReactAudioPlayer from 'react-audio-player';
import song from './sounds/happy-journey-full.wav'
import speaker from './images/speaker.png';
import clearSpeaker from './images/clear-speaker.png';
import './style.css';

// using graphql
const httpLink = createHttpLink({
  uri: '/graphql',
});

// getting the login token
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// using apollo
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// setting up our routes
function App() {
  // setting up mute function for audio
  let [audio, setAudio] = useState(true);
  const sound = audio ? .1 : 0

  const mute = () => {
    if (audio) {
      setAudio(false)
    } else {
      setAudio(true)
    };
  };


  return (
    <ApolloProvider client={client}>
      <div className="container">
        <ReactAudioPlayer
          className={'player'}
          src={song}
          loop={true}
          autoPlay={true}
          volume={sound}
        />
        <Router>
          <Routes>
            <Route
              path="/game"
              element={<Game />}
            />
            <Route
              path="/"
              element={<Signup />}
            />
            <Route
              path="/leaderboard"
              element={<Leaderboard />}
            />
          </Routes>
        </Router>
        {audio ? <img src={speaker} alt='mute' onClick={mute} className='speaker'></img> : <img src={clearSpeaker} alt='unmute' onClick={mute} className='speaker'></img>}
      </div>
    </ApolloProvider>
  );
}

export default App;
