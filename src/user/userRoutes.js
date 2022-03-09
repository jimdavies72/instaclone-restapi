const { Router } = require("express");
const {
  addUser,
  loginUser,
  listUsers,
  updateUser,
  deleteUser,
  updatePassword,
} = require("./userControllers");
const {
  hashPassword,
  decryptPassword,
  checkToken,
  validateEmail,
  validateUsername,
  updatePass,
} = require("../middleware");
const userRouter = Router();

userRouter.post(
  "/user",
  validateUsername,
  validateEmail,
  hashPassword,
  addUser
);
userRouter.post("/login", decryptPassword, loginUser);
userRouter.get("/user", checkToken, loginUser);
userRouter.get("/user/list", listUsers);
userRouter.put("/user", validateEmail, updateUser);
userRouter.delete("/user/:filterKey/:filterVal", deleteUser);
userRouter.patch("/user", hashPassword, checkToken, updatePassword);

module.exports = userRouter;
