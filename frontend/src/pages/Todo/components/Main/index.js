import React from "react";
import { Content, FreeDiv, FreeDivP } from "./components";
import SingleToDo from "./singleToDo";

const MainContent = ({
  toDos,
  deleteHandler,
  updateHandler,
  inputHandler,
  checkHandler,
}) => {
  return (
    <Content>
      {toDos !== null && toDos.length ? (
        toDos.map((todo) => (
          <SingleToDo
            text={todo.text}
            checked={todo.checked}
            onTextChanged={(event) => inputHandler(event, todo.id)}
            onCheckChanged={(event) => checkHandler(event, todo.id)}
            key={todo.id}
            onDelete={() => deleteHandler(todo.id)}
            onUpdate={() => updateHandler(todo.id)}
          />
        ))
      ) : (
        <FreeDiv>
          <FreeDivP>You've finished your schedule!</FreeDivP>
        </FreeDiv>
      )}
    </Content>
  );
};

export default MainContent;
