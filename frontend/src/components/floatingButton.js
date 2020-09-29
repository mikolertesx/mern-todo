import React from 'react';
import styled from 'styled-components';
import Theme from "../shared/theme";

const Button = styled.button`
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px solid ${Theme.whiteText};
  color: ${Theme.whiteText};
  font-size: 1.25rem;
  background-color: ${Theme.primaryColor};
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

const FloatingButton = (props) => {
  return <Button onClick={props.onClick}>
    {props.text}
  </Button>
}

export default FloatingButton;