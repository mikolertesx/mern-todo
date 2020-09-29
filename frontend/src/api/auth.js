import axios from "axios";
const baseUrl = 'https://mikolertesx-simple-todos.herokuapp.com';

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

export {
  register,
  login
}