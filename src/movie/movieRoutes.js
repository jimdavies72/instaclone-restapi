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
// Andys version of update and delte movie routes
//movieRouter.patch("/movie", updateMovie);
//movieRouter.delete("/movie/:filterKey/:filterVal", deleteMovie);

module.exports = movieRouter;
