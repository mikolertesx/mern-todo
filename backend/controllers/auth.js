const User = require("../models/User");
const authToken = require("../utils/auth");

const authRegister = async (req, res) => {
  const request = req.body;
  const { username, password } = request;
  const previousUser = await User.findOne({'username': username});
  if (previousUser) {
    return res.send({
      message: "This user already exists."
    });
  }

  const newUser = await User.create({
    username,
    password,
  });
  
  if (newUser) {
    const tokenId = authToken.createToken(newUser.id);
    return res.send({
      token: tokenId,
    });
  }

  return res.send({
    message: "Something went wrong, you should try later.",
  });
};

const authLogin = async (req, res) => {
  const request = req.body;
  const { username, password } = request;
  const user = await User.findOne({ username });
  if (user) {
    if (user.password === password) {
      const tokenId = authToken.createToken(user.id);
      return res.send({
        message: "Logged in.",
        token: tokenId,
      });
    } else {
      return res.send({
        message: "Incorrect password.",
      });
    }
  } else {
    return res.send({
      message: `No user named ${username} found.`,
    });
  }
};

module.exports = {
  authRegister,
  authLogin,
};
