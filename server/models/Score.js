const { Schema, model } = require('mongoose');

const scoreSchema = new Schema ({
  score: {
    type: Int,
    required: true,
  },
});

const Score = model('Score', scoreSchema);

module.exports = Score;