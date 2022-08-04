const { Schema, model } = require('mongoose');
//this is our game schema, every object associated with gameSchema and all of their data types
const gameSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
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
    type: Number,
    required: true,
  }
});
//setting our gameSchema to a model and setting that model to a constant
const Game = model('Game', gameSchema);
//exporting our game model
module.exports = Game;