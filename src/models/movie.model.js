const mongoose = require("mongoose");

const MovieModel = mongoose.model(
  "Movie",
  mongoose.Schema(
    {
      name: {
        type: String,
      },
      genre: {
        type: String,
      },
      descr: {
        type: String,
      },
      director: {
        type: String,
      },
      actors: {
        type: String,
      },
      year: {
        type: Number,
      },
      runtime: {
        type: Number,
      },
      rating: {
        type: Number,
      },
      votes: {
        type: Number,
      },
      revenue: {
        type: Number,
      },
      score: {
        type: Number,
      },
    },
    { timestamps: true }
  )
);

module.exports = MovieModel;
