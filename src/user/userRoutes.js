const { Router } = require("express");
const { addUser, loginUser } = require("./userControllers");
const { hashPassword, decryptPassword, checkToken } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/login", decryptPassword, loginUser);
userRouter.get("/user", checkToken, loginUser);

module.exports = userRouter;
