import React, {useState} from 'react';
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
import Nav from './components/Nav'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Router>
          <Routes>
            <Route
              path="/login"
              element={<Signup />}
            />
            <Route
              path="/"
              element={<Game />}
            />
            <Route
              path="/leaderboard"
              element={<Leaderboard />}
            />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
