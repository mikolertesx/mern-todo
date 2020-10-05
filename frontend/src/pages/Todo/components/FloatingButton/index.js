import React from 'react'
import Theme from '../../../../shared/Theme'
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  width: 64px;
  height: 64px;
  bottom: 32px;
  right: 32px;
  border: 3px solid ${Theme.secondaryColor};
  border-radius: 50%;
  background: ${Theme.primaryColor};
  color: white;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

  &:hover {
    background: white;
    color: ${Theme.secondaryColor};
    border-color: ${Theme.primaryColor};
  }
`;

const FloatingButton = ({onClick}) => {
  return (
    <Button onClick={onClick}>
      +
    </Button>
  );
}

export default FloatingButton;
