const { Router } = require("express");
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
  searchMovies,
  listMyMovies,
} = require("./movieControllers");
const movieRouter = Router();

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.put("/movie/", updateMovie);
movieRouter.delete("/movie/:filterKey/:filterVal", deleteMovie);
movieRouter.post("/movie/search", searchMovies);
movieRouter.post("/mymovies", listMyMovies);

module.exports = movieRouter;
