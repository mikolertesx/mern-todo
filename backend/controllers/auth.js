const User = require("../models/User");

const authRegister = async (req, res) => {
  const request = req.body;
  const { username, password } = request;
  const newUser = await User.create({
    username,
    password,
  });

  if (newUser) {
    return res.send({
      id: newUser.id,
    });
  }

  return res.send({
    message: "Error",
  });
};

const authLogin = async (req, res) => {
  const request = req.body;
  console.log(req.body);
  const { username, password } = request;
  const user = await User.findOne({ username });
  if (user) {
    console.log(user.password, password);
    if (user.password === password) {
      return res.send({
        message: "Logged in.",
        id: user.id,
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
