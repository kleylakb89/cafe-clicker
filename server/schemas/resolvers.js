const { Game, Score, User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    //these are the queries(or get methods) for score, scores, game, and user
    Query: {
        score: async (parent, { user }) => {
            return await Score.findOne({ user });
        },
        scores: async () => {
            return await Score.find();
        },
        game: async (parent, args, {user}) => {
            console.log(user)
            return await Game.findOne({ user: user.username });
        },
        user: async (parent, { _id }) => {
            return await User.findById(_id);
        },
    },
    Mutation: {
        //mutation for creating a user
        createUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        //mutation for logging in
        login: async (parent, { username, password }) => {
            const profile = await User.findOne({ username });
            //if there is no user with that username it throws an error message
            if (!profile) {
              throw new AuthenticationError('No profile with this username found!');
            }
            //if there is a user with that username we compare the password that is associated with that user to the password that is entered
            const correctPw = await profile.isCorrectPassword(password);
            //if the password is incorrect it throws an error message
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
            //this is grabbing a token and associating it with the profile of the user that is logging in
            const token = signToken(profile);
            return { token, profile };
        },
        //mutation for creating a game
        createGame: async (parent, args, {user}) => {
            const game = await Game.create({...args, user: user.username});
            return game;
        },
        //this will be the mutation for updating a game and all the parameters that are included in the update
        updateGame: async (parent, { clicks, autoClicker, multiClicker, passiveClicker, cafeState }, {user}) => {
            console.log({clicks, autoClicker, multiClicker, passiveClicker, cafeState});
            const game = await Game.findOneAndUpdate(
                { user: user.username },
                {
                    $set: {
                        clicks,
                        autoClicker,
                        multiClicker,
                        passiveClicker,
                        cafeState
                    },
                },
                { new: true },
            );
            return game;
        },
        //mutation for deleting a game
        deleteGame: async (parent, { _id }) => {
            const game = await Game.findOneAndDelete(
                { _id }
            );
            return game;
        },
        //this is creating a score and associating it with the user that is logged in 
        createScore: async (parent, args, {user}) => {
            const score = await Score.create({...args, user: user.username});
            return score;
        },
        //this is updating the score and associating it with the user that is logged in
        updateScore: async (parent, { _id, score, user }) => {
            const upScore = await Score.findOneAndUpdate(
                { _id },
                { $set: { score, user }},
                { new: true },
            );
            return upScore;
        },
        //this mutation resets the score back to zero
        resetScore: async (parent, { _id }) => {
            const score = await Score.findOneAndDelete(
                { _id }
            );
            return score;
        },
    },
};
//exporting our resolvers
module.exports = resolvers;