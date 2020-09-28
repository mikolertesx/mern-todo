import axios from "axios";
// axios.defaults.baseURL = process.env.REACT_APP_URL;
console.log(process.env);
const baseUrl = process.env.REACT_APP_URL;

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