const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  clicks: {
    type: Int,
    required: true,
  },
  autoClicker: {
    type: Boolean,
    required: true,
    default: false,
  },
  multiClicker: {
    type: Boolean,
    required: true,
    default: false,
  },
  passiveClicker: {
    type: Boolean,
    required: true,
    default: false,
  },
  cafeState: {
    type: Int,
    required: true,
  }
});

const Game = model('Game', gameSchema);

module.exports = Game;