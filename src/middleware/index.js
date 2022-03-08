const bcrypt = require("bcryptjs");

const User = require("../user/userModel");
const saltRounds = parseInt(process.env.SALT_ROUNDS);

exports.hashPassword = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.decryptPassword = async (req, res, next) => {
  try {
    req.user = await User.findOne({ username: req.body.username });
    if (
      req.user &&
      (await bcrypt.compare(req.body.password, req.user.password))
    ) {
      next();
    } else {
      throw new Error("Incorrect credentials supplied");
    }
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};
