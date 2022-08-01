const { Game, Score, User } = require('../models');

const resolvers = {
    Query: {
        score: async (parent, { user }) => {
            const params = user ? { user } : {};
            return Score.find(params);
        },
        scores: async () => {
            return Score.find();
        },
        game: async (parent, { user }) => {
            const params = user ? { user } : {};
            return Game.find(params);
        },
        user: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return User.find(params);
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
        createGame: async (parent, args) => {
            const game = await Game.create(args);
            return game;
        },
        updateGame: async (parent, { _id, clicks, autoClicker, multiClicker, passiveClicker, cafeState }) => {
            const game = await Game.findOneAndUpdate(
                { _id },
                {
                    $inc: {
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
        deleteGame: async (parent, { gameId }) => {
            const game = await Game.findOneAndDelete(
                { _id: gameId }
            );
            return game;
        },
        createScore: async (parent, args) => {
            const score = await Score.create(args);
            return score;
        },
        updateScore: async (parent, { _id, score, user }) => {
            const score = await Score.findOneAndUpdate(
                { _id },
                { $inc: { score, user }},
                { new: true },
            );
            return score;
        },
        resetScore: async (parent, { scoreId }) => {
            const score = await Score.findOneAndDelete(
                { _id: scoreId }
            );
            return score;
        },
    },
};

module.exports = resolvers;