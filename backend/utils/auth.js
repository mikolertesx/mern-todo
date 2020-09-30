const jwt = require("jsonwebtoken");

const createToken = (id) => {
  const secret = process.env.SECRET;

  const token = jwt.sign({
    id,
  }, secret);

  return token;
};

const readToken = (token) => {
  const decodedToken = jwt.decode(token);
  return decodedToken;
}

const readTokenJson = (token) => {
  const decodedToken = jwt.decode(token);
  return JSON.parse(decodedToken);
}

module.exports = {
  createToken,
  readToken,
  readTokenJson
}