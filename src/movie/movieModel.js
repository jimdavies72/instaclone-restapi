const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  actors: {
    type: Array,
  },
});

const Movie = new mongoose.model("Movie", movieSchema);

module.exports = Movie;
