const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  gameId: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    required: true,
  },
  userProfiles: {
    type: String,
    required: true,
  },
  virtualItems: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Game", GameSchema);
