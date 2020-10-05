import React from "react";
import { Content } from "./components";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import FloatingButton from "./components/FloatingButton";

export const TodoPage = (props) => {
  const LogOff = (e) => {
    e.preventDefault();
    props.onChangeLogin(null);
  }

  const ToDos = [
    { id: "213123124", text: "Reminder #1", checked: false },
    { id: "213123121", text: "Reminder #2", checked: true },
  ];

  return (
    <Content>
      <Sidebar onClick={LogOff}/>
      <Main toDos={ToDos}/>
      <FloatingButton />
    </Content>
  );
};

export default TodoPage;
