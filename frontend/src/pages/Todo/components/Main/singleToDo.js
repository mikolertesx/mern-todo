import React from "react";
import styled from "styled-components";
import Trash from "../../../../static/images/trash.png"

const Content = styled.div`
  border-bottom: 1px solid black;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckAndTextDiv = styled.div`
  display: flex;
  align-items: center;
`;

const DeleteDiv = styled.div`
  height: 32px;
  width: 32px;
  cursor: pointer;
`;

const DeleteImg = styled.img`
  height: 100%;
  width: 100%;
`;

const CheckBox = styled.input`
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin-right: 32px;
`;

const Text = styled.p`
  font-family: 'Arial';
  font-size: 1rem;
`;

const singleToDo = ({ text, checked }) => {
  return (
    <Content>
      <CheckAndTextDiv>
        <CheckBox type="checkbox" value={checked} />
        <Text>{text}</Text>
      </CheckAndTextDiv>
      <DeleteDiv>
        <DeleteImg src={Trash}/>
      </DeleteDiv>
    </Content>
  );
};

export default singleToDo;
