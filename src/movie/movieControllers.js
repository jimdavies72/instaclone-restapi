const Movie = require("./movieModel");

exports.addMovie = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(200).send({ movie: newMovie });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.listMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(200).send({ allMovies: movies });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const update = req.body;
    const options = { new: true };

    const movie = await Movie.findOneAndUpdate(filter, update, options);

    movie
      ? res.status(200).send({ movie })
      : res.status(404).send({ msg: `Movie: ${req.params.id} not found` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    result = await Movie.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      res.status(404).send({ msg: `Movie: ${req.params.id} not found` });
    } else {
      res.status(200).send({ msg: `Movie: ${req.params.id} has been removed` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
