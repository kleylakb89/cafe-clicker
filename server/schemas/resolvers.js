const { Game, Score, User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        score: async (parent, { user }) => {
            return await Score.findOne({ user });
        },
        scores: async () => {
            return await Score.find();
        },
        game: async (parent, { user }) => {
            return await Game.findOne({ user });
        },
        user: async (parent, { _id }) => {
            return await User.findById(_id);
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const profile = await User.findOne({ username });
      
            if (!profile) {
              throw new AuthenticationError('No profile with this username found!');
            }
      
            const correctPw = await profile.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }

            const token = signToken(profile);
            return { token, profile };
        },
        createGame: async (parent, args, {user}) => {
            const game = await Game.create({...args, user: user.username});
            return game;
        },
        updateGame: async (parent, { _id, clicks, autoClicker, multiClicker, passiveClicker, cafeState }) => {
            const game = await Game.findOneAndUpdate(
                { _id },
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
        deleteGame: async (parent, { _id }) => {
            const game = await Game.findOneAndDelete(
                { _id }
            );
            return game;
        },
        createScore: async (parent, args) => {
            const score = await Score.create(args);
            return score;
        },
        updateScore: async (parent, { _id, score, user }) => {
            const upScore = await Score.findOneAndUpdate(
                { _id },
                { $set: { score, user }},
                { new: true },
            );
            return upScore;
        },
        resetScore: async (parent, { _id }) => {
            const score = await Score.findOneAndDelete(
                { _id }
            );
            return score;
        },
    },
};

module.exports = resolvers;