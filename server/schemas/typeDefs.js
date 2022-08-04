const { gql } = require('apollo-server-express');

const typeDefs = gql`
#the object for score in graphql has the values id, score, and user associated with it and their data types
    type Score {
        _id: ID!
        score: Int!
        user: String!
    }
#the object for user in graphql has the values id and username associated with it and their data types
    type User {
        _id: ID!
        username: String!
        #password: String!
    }
#the object for authorization in graphql has the values of token and user associated with it and their data types
    type Auth {
        token: ID!
        user: User
    }
#the onject for game in graphql has all the following values through cafe state associated with it and their data types
    type Game {
        _id: ID!
        user: String!
        clicks: Int!
        autoClicker: Boolean!
        multiClicker: Boolean!
        passiveClicker: Boolean!
        cafeState: Int!
    }
 #the object for query in graphql has score, scores, game and user associated with it and their data types  
    type Query {
        score(user: String): Score
        scores: [Score]
        game(user: String, time: String): Game
        user(_id: ID!): User
    }
#the object for mutation in graphql has all of our mutations from resolvers and what is associated with them and their data types
    type Mutation {
        createUser(
            username: String!,
            password: String!,
        ): Auth
        login(username: String!, password: String!): Auth
        createGame(
            clicks: Int!,
            autoClicker: Boolean!,
            multiClicker: Boolean!,
            passiveClicker: Boolean!,
            cafeState: Int!
        ): Game
        updateGame(
            clicks: Int!,
            autoClicker: Boolean!,
            multiClicker: Boolean!,
            passiveClicker: Boolean!,
            cafeState: Int!
        ): Game
        deleteGame(
            _id: String!
        ): Game
        createScore(
            score: Int!,
        ): Score
        updateScore(
            _id: String!,
            score: Int!,
            user: String!,
        ): Score
        resetScore(
            _id: String!
        ): Score
    }

`;
//exporting our typedefs
module.exports = typeDefs;