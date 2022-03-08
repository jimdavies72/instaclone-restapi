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

// Andy's version of update Movie and Delete Move....
exports.updateMovieAB = async (req, res) => {
  try {
    const updatedMovie = await Movie.updateOne(
      { [req.body.filterKey]: req.body.filterVal },
      { [req.body.updateKey]: req.body.updateVal }
    );
    if (updatedMovie.modifiedCount > 0) {
      res.status(200).send({ msg: "Successfully updated movie" });
    } else {
      throw new Error("Did not update");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.deleteMovieAB = async (req, res) => {
  try {
    const deletedMovie = await Movie.deleteOne({
      [req.params.filterKey]: req.params.filterVal,
    });
    if (deletedMovie.deletedCount > 0) {
      res.status(200).send({ msg: "Successfully deleted movie" });
    } else {
      throw new Error("Did not delete");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
