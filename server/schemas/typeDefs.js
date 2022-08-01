const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Score {
        _id: ID!
        score: Int!
        user: String!
    }

    type User {
        _id: ID!
        username: String!
        password: String!
    }

    type Game {
        _id: ID!
        user: String!
        clicks: Int!
        autoClicker: Boolean!
        multiClicker: Boolean!
        passiveClicker: Boolean!
        cafeState: Int!
    }
    
    type Query {
        score(user: String): Score
        scores: [Score]
        game(user: String): Game
        user(_id: String): User
    }

    type Mutation {
        createUser(
            username: String!,
            password: String!,
        ): User
        createGame(
            clicks: Int!,
            autoClicker: Boolean!,
            multiClicker: Boolean!,
            passiveClicker: Boolean!,
            cafeState: Int!
        ): Game
        updateGame(
            _id: String!,
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
            user: String!,
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

module.exports = typeDefs;