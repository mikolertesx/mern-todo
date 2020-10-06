import React, { useEffect, useState } from "react";
import { Content } from "./components";
import { getTodos } from "../../api/todos";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import FloatingButton from "./components/FloatingButton";

export const TodoPage = (props) => {
  const [ToDos, setTodos] = useState([]);

  const LogOff = (e) => {
    e.preventDefault();
    props.onChangeLogin(null);
  };

  useEffect(() => {
    async function updateTodos() {
      const newTodos = await getTodos(props.token);
      setTodos(newTodos);
    }
    updateTodos();
  }, [props.token]);


  return (
    <Content>
      <Sidebar onClick={LogOff} />
      <Main toDos={ToDos} />
      <FloatingButton />
    </Content>
  );
};

export default TodoPage;
