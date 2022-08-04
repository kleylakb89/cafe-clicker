import React from 'react';
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
  return (
    <ApolloProvider client={client}>
      <div className="container">
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
      </div>
    </ApolloProvider>
  );
}

export default App;
