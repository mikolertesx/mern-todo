const User = require("../models/User");
const ToDo = require("../models/ToDo");
const authToken = require("../utils/auth");

// TODO Replace username and password with tokens.
// const getUser = async (username, password) => {
//   const user = await User.findOne({ username });
//   if (!user) {
//     return null;
//   }
//   if (user.password !== password) {
//     return null;
//   } else {
//     return user;
//   }
// };

const getUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    return null;
  } else {
    return user;
  }
};

const noUserFound = async (res) => {
  return res.send({
    message: "No user was found.",
  });
};

const addTodo = async (req, res) => {
  const request = req.body;
  const { token, value } = request;
  const { id } = authToken.readToken(token);
  const user = await getUserById(id);

  if (!user) {
    return noUserFound(res);
  }

  const newTodo = await ToDo.create({
    user: user.id,
    text: value,
    checked: false,
  });

  res.send({
    id: newTodo.id,
  });
};

const removeToDo = async (req, res) => {
  const request = req.body;
  const { token, todoId } = request;
  const { id } = authToken.readToken(token);
  const user = await getUserById(id);

  if (!user) {
    return noUserFound(res);
  }

  const todo = await ToDo.findByIdAndDelete(todoId);
  // todo itself may be null, and not contain the id property.
  const response = todo ? { todoId } : { message: "Couldn't delete ToDo" };
  res.send(response);
};

const updateToDo = async (req, res) => {
  const request = req.body;
  const { token, todoId, properties } = request;
  const { checked, text } = properties;
  const {id} = authToken.readToken(token);
  const user = await getUserById(id);

  if (!user) {
    return noUserFound(res);
  }

  const todo = await ToDo.findById(todoId);
  if (!todo) {
    return res.send({
      message: "No Todo was found.",
    });
  }

  todo.text = text;
  todo.checked = checked;
  const actualTodo = await todo.save();

  return res.send({
    id: actualTodo.id,
  });
};

const getTodos = async (req, res) => {
  const request = req.body;
  const { token } = request;
  const { id } = authToken.readToken(token);
  const user = await getUserById(id);

  if (!user) {
    return noUserFound(res);
  }

  const todos = await ToDo.find({ user: user.id });

  if (todos.length === 0) {
    return res.send({
      todos: [],
    });
  } else {
    const mappedTodos = todos.map((todo) => {
      return { id: todo.id, text: todo.text, checked: todo.checked };
    });
    return res.send({
      todos: mappedTodos,
    });
  }
};

module.exports = {
  addTodo,
  removeToDo,
  updateToDo,
  getTodos,
};
