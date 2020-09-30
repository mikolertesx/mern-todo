import React, { useEffect, useState } from "react";
import Page from "../shared/page";
import TodoItem from "../components/todoItem";

import { getTodos } from "../api/todos";

import FloatingButton from "../components/floatingButton";

const TodosPage = (props) => {
  const [todos, setTodos] = useState([
  ]);

  useEffect(() => {
  }, []);

  const onCheckChanged = (event, index) => {
    const newTodos = [...todos];
    newTodos[index].checked = event.target.checked;
    setTodos(newTodos);
  };

  const onDelete = (index) => {
    const newTodos = todos.filter((_value, i) => (i === index ? false : true));
    setTodos(newTodos);
  };

  const onTextChange = (event, index) => {
    const newText = event.target.value;
    const newTodos = [...todos];
    newTodos[index].value = newText;
    setTodos(newTodos);
  };

  const createToDo = (text, checked) => {
    const toDo = {
      value: text,
      checked: checked,
    };

    const newTodos = [...todos];
    newTodos.push(toDo);
    setTodos(newTodos);
  };

  const renderToDo = (index, text, checked) => {
    return (
      <TodoItem
        text={text}
        key={index}
        checked={checked}
        onCheckedChange={(event) => onCheckChanged(event, index)}
        onTextChange={(event) => onTextChange(event, index)}
        onDelete={() => onDelete(index)}
      />
    );
  };

  return (
    <Page>
      <FloatingButton
        text="+"
        onClick={() => createToDo("New Reminder", false)}
      />
      {todos.length !== 0 ? (
        todos.map((item, index) => renderToDo(index, item.text, item.checked))
      ) : (
        <p>Add some todos</p>
      )}
    </Page>
  );
};

export default TodosPage;
