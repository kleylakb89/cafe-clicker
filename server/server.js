//pulling in all of our dependencies to get our back end up and running
const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');

//bringing in our destructured type defs and resolvers
const { typeDefs, resolvers } = require('./schemas');
//creating an express application
const app = express();
//requiring our connection to the mongoose database
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
//setting our server to a new instance of apollo server
const server = new ApolloServer({
  //bringing in our auth middleware, typedefs, and resolvers into the apollo server
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
//starting our apollo server and passing it our typedefs and resolvers
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  //once our server and database is up and running it will display the following console logs
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);
