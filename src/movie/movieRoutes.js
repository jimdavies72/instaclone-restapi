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
// Instructor's version of update and delete movie routes for reference
//movieRouter.patch("/movie", updateMovie);
//movieRouter.delete("/movie/:filterKey/:filterVal", deleteMovie);

module.exports = movieRouter;
