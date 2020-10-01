import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../shared/theme";

const TodoDiv = styled.div`
  border-bottom: 1px solid black;
  padding: 24px;
  padding-bottom: 6px;
`;

const TodoInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoP = styled.div`
  font-family: "Arial";
`;

const TodoDelete = styled.button`
  background-color: ${Theme.secondaryColor};
  border: 0px;
  border-radius: 4px;
  margin-top: 12px;
  width: 32px;
  height: 32px;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

const TodoInput = styled.input`
  width: 80%;
  padding: 12px;
`;

const TodoItem = (props) => {
  const [editMode, setEditMode] = useState(false);

  const switchModes = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  return (
    <TodoDiv>
      <TodoInfo>
        {!editMode ? (
          <TodoP onClick={switchModes}>{props.text}</TodoP>
        ) : (
          <TodoInput
            type="text"
            value={props.text}
            onChange={props.onTextChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                props.onTextUpdate(event);
                switchModes();
              }
            }}
          />
        )}
        <input
          type="checkbox"
          checked={props.checked}
          onChange={props.onCheckedChange}
        />
      </TodoInfo>
      <TodoDelete onClick={props.onDelete} />
    </TodoDiv>
  );
};

export default TodoItem;
