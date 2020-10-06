import React from "react";
import { Content } from "./components";
import SingleToDo from "./singleToDo";

const MainContent = ({ toDos }) => {
  return (
    <Content>
      {toDos !== null && toDos.length ? (
        toDos.map((todo) => (
          <SingleToDo text={todo.text} checked={todo.checked} key={todo.id} />
        ))
      ) : (
        <p>There's nothing to do.</p>
      )}
    </Content>
  );
};

export default MainContent;
