const { Schema, model } = require('mongoose');
//this is our sore schema, everything associated with it and their data types
const scoreSchema = new Schema ({
  score: {
    type: Number,
    required: true,
  },
  user: {
    type: String,
    required: true,
  }
  
});
//setting our scoreSchema to a model and setting that model to a constant
const Score = model('Score', scoreSchema);
//exporting the score model
module.exports = Score;