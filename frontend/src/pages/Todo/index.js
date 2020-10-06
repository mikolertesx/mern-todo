import React, { useEffect, useState, useCallback } from "react";
import { Content } from "./components";
import { getName } from "../../api/auth";
import { addTodo, getTodos, removeTodo, updateTodo } from "../../api/todos";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import FloatingButton from "./components/FloatingButton";

export const TodoPage = (props) => {
  const [ToDos, setTodos] = useState([]);
  const [name, setName] = useState(null);

  const LogOff = (e) => {
    e.preventDefault();
    props.onChangeLogin(null);
  };

  const updateTodos = useCallback(async () => {
    const newTodos = await getTodos(props.token);
    setTodos(newTodos.todos);
  }, [props.token]);

  const updateName = useCallback(async () => {
    const newName = await getName(props.token);
    setName(newName.name);
  }, [props.token]);

  const handleAddTodo = async () => {
    const newTodo = {
      checked: false,
      id: null,
      text: "New reminder",
    };
    const addedToDo = await addTodo(props.token, newTodo.text);
    newTodo.id = addedToDo.id;

    const newTodos = [...ToDos];
    newTodos.push(newTodo);
    setTodos(newTodos);
  };

  const handleDeleteTodo = async (id) => {
    const TodoToDelete = ToDos.find((todo) => todo.id === id);
    // TODO Used deleted to do to handle errors.
    await removeTodo(props.token, TodoToDelete.id);
    const newTodos = [...ToDos].filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleUpdateTodo = async (id) => {
    const modifiedTodo = ToDos.find((todo) => todo.id === id);
    await updateTodo(props.token, id, modifiedTodo);
  };

  const handleInputChange = (event, id) => {
    const newTodos = [...ToDos];
    const modifiedTodo = newTodos.find((todo) => todo.id === id);
    modifiedTodo.text = event.target.value;
    setTodos(newTodos);
  };

  const handleCheckChange = (event, id) => {
    const newTodos = [...ToDos];
    const modifiedTodo = newTodos.find((todo) => todo.id === id);
    modifiedTodo.checked = event.target.checked;
    setTodos(newTodos);
  }

  useEffect(() => {
    updateTodos();
    updateName();

  }, [updateTodos, updateName]);

  return (
    <Content>
      <Sidebar onClick={LogOff} name={name} />
      <Main
        toDos={ToDos}
        deleteHandler={handleDeleteTodo}
        updateHandler={handleUpdateTodo}
        inputHandler={handleInputChange}
        checkHandler={handleCheckChange}
      />
      <FloatingButton onClick={handleAddTodo} />
    </Content>
  );
};

export default TodoPage;
