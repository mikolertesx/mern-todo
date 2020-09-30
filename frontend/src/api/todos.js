import axios from "axios";
const baseUrl = process.env.REACT_APP_SERVER;

if (baseUrl === undefined) {
  throw new Error("No server was set in the REACT_APP_SERVER env.");
}

const addTodo = async (token, value) => {
  const url = `${baseUrl}/todos/add-todo`;
  const response = await axios.post(url, {
    token,
    value,
  });

  return response.data;
};

const removeTodo = async (token, todoId) => {
  const url = `${baseUrl}/todos/remove-todo`;
  const response = await axios.post(url, {
    token,
    todoId,
  });
  return response.data;
};

const updateTodo = async (token, todoId, properties) => {
  const url = `${baseUrl}/todos/update-todo`;

  if (properties["checked"] === null || properties["text"] === null) {
    throw new Error("No properties was provided on the ToDo.");
  }

  const response = await axios.patch(url, {
    token,
    todoId,
    properties,
  });

  return response.data;
};

const getTodos = async (token) => {
  const url = `${baseUrl}/todos/get-todos`;
  const response = await axios.post(url, {
    token,
  });
  return response.data;
};

export { addTodo, removeTodo, updateTodo, getTodos };
