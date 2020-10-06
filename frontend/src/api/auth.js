import axios from "axios";
const baseUrl = process.env.REACT_APP_SERVER;

if (baseUrl === undefined) {
  throw new Error('No server was set in the REACT_APP_SERVER env.');
}

const register = async (username, password) => {
  const url = `${baseUrl}/auth/register`;
  const response = await axios.post(url, {
    username,
    password
  });

  return response.data;
}

const login = async(username, password) => {
  const url = `${baseUrl}/auth/login`;
  const response = await axios.post(url, {
    username,
    password
  });

  return response.data;
}

const getName = async(token) => {
  const url = `${baseUrl}/auth/name`;
  const response = await axios.post(url, {
    token: token
  });
  return response.data;
}

export {
  register,
  login,
  getName
}