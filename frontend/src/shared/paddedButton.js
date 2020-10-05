import Theme from "./Theme";
import styled from "styled-components";

const styles = {
  primary: {
    background: Theme.primaryColor,
    color: "white",
  },
  secondary: {
    background: Theme.secondaryColor,
    color: "white",
  },
  danger: {
    background: Theme.dangerColor,
    color: "white",
  }
};

const paddedButton = styled.button`
  padding: 24px;
  color: ${(props) => styles[props.type].color};
  background: ${(props) => styles[props.type].background};
  border-radius: 5px;
  font-size: 1rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s;
  outline: none;

  &:hover {
    border: 1px solid ${(props) => styles[props.type].background};
    color: ${(props) => styles[props.type].background};
    background: ${(props) => styles[props.type].color};
  }
`;

paddedButton.defaultProps = {
  type: "primary",
};

export default paddedButton;
