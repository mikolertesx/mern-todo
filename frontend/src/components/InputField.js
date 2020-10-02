import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  margin: auto;
  margin-bottom: 24px;
`;

const Label = styled.label`
  font-family: 'Arial';
  display: block;
`;

const Input = styled.input`
  border-radius: 5px;
  border: 1px solid black;
  padding: 6px;
  margin: auto;
  width: 100%;
`;

const InputField = ({ title, text, onChange }) => {
  const fixedTitle = title || text;

  return (
    <InputContainer>
      <Label>{fixedTitle}</Label>
      <Input value={text} onChange={onChange} />
    </InputContainer>
  );
};

export default InputField;
