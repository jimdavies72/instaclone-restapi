const { Router } = require("express");
const { addUser, loginUser } = require("./userControllers");
const { hashPassword, decryptPassword } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/login", decryptPassword, loginUser);

module.exports = userRouter;
