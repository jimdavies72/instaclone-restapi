const { Router } = require("express");
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
} = require("./movieControllers");
const movieRouter = Router();

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.put("/movie/:id", updateMovie);
movieRouter.delete("/movie/:id", deleteMovie);

module.exports = movieRouter;
