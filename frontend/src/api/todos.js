import axios from "axios";
const baseUrl = process.env.REACT_APP_SERVER;

if (baseUrl === undefined) {
  throw new Error('No server was set in the REACT_APP_SERVER env.');
}

const addTodo = async (username, password, value) => {
  const url = `${baseUrl}/todos/add-todo`;
  const response = await axios.post(url, {
    username,
    password,
    value
  });

  return response.data;
}

const removeTodo = async (username, password, id) => {
  const url = `${baseUrl}/todos/remove-todo`;
  const response = await axios.delete(url, {
    username,
    password,
    id
  });

  return response.data;
}

const updateTodo = async (username, password, id, properties) => {
  const url = `${baseUrl}/todos/update-todo`;

  if (!properties['checked'] || !properties['text']) {
    throw new Error('No properties was provided on the ToDo.');
  }

  const response = await axios.patch(url, {
    username,
    password,
    id,
    properties
  });

  return response.data;
}

const getTodos = async(username, password) => {
  const url = `${baseUrl}/todos/get-todos`;
  const response = await axios.post(url, {
    username,
    password
  });

  console.log(response.data);
  return response.data;
}

export {
  addTodo,
  removeTodo,
  updateTodo,
  getTodos
}