import React, { useEffect, useState } from "react";
import Page from "../shared/page";
import TodoItem from "../components/todoItem";

import { mapDispatchToProps, mapStateToProps } from "../store/reducers/auth";
import { connect } from "react-redux";

import { getTodos, updateTodo, removeTodo, addTodo } from "../api/todos";

import FloatingButton from "../components/floatingButton";

const TodosPage = (props) => {
  const [todos, setTodos] = useState([
  ]);

  useEffect(() => {
    getTodos(props.authToken).then(newTodos => {
      setTodos(newTodos.todos);
    })
  }, [props.authToken]);

  const onCheckChanged = (event, index) => {
    const newTodos = [...todos];
    const filteredTodo = newTodos.filter(todo => todo.id === index)[0];
    filteredTodo.checked = event.target.checked;
    updateTodo(props.authToken, index, {
      checked: filteredTodo.checked,
      text: filteredTodo.text,
    })
    setTodos(newTodos);
  };

  const onDelete = (index) => {
    const todoIndex = todos.findIndex(todo => todo.id === index);
    const newTodos = todos.filter((_, index) => index !== todoIndex);

    removeTodo(props.authToken, todos[todoIndex].id);
    setTodos(newTodos);
  };

  const onTextChange = (event, index) => {
    const newText = event.target.value;
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.id === index);
    newTodos[todoIndex].text = newText;
    setTodos(newTodos);
  };

  const onTextUpdate = (event, index) => {
    const newTodos = [...todos];
    const filteredTodo = newTodos.filter(todo => todo.id === index)[0];
    filteredTodo.text = event.target.value;
    updateTodo(props.authToken, index, {
      checked: filteredTodo.checked,
      text: filteredTodo.text,
    })
    setTodos(newTodos);
  };

  const createToDo = async (text, checked) => {
    const todo = await addTodo(props.authToken, text);
    
    const todoMap = {
      id: todo.id,
      text: text,
      checked: checked
    }

    const newTodos = [...todos];
    newTodos.push(todoMap);
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
        onTextUpdate={(event) => onTextUpdate(event, index)}
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
        todos.map((item) => renderToDo(item.id, item.text, item.checked))
      ) : (
        <p>Add some todos</p>
      )}
    </Page>
  );
};

// export default TodosPage;
export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);