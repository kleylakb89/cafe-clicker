const { Schema, model } = require('mongoose');

const scoreSchema = new Schema ({
  score: {
    type: Int,
    required: true,
  },
  user: {
    type: String,
    required: true,
  }
  
});

const Score = model('Score', scoreSchema);

module.exports = Score;