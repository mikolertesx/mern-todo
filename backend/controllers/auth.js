const User = require("../models/User");
const authToken = require("../utils/auth");

const authRegister = async (req, res) => {
  const request = req.body;
  const { username, password } = request;
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
    message: "Error",
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
