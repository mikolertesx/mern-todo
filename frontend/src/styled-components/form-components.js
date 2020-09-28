import styled from "styled-components";
import Theme from "../shared/theme";

const SubmitButton = styled.button`
  padding: ${props => props.size || 12}px;
  width: ${props => props.width || 'auto'};
  display: block;
  font-size: 1.25rem;
  background-color: ${Theme.primaryColor};
  color: ${Theme.whiteText};
  border: 0;
  margin: ${props => props.margin!== null ? props.margin:0};
  margin-top: auto;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${Theme.whiteText};
    color: ${Theme.primaryColor};
  }
`;

const BasicLabel = styled.label`
  font-family: 'arial';
  margin-left: ${props => props.margin!== null ? props.margin:0}
`;

const BasicInput = styled.input`
  padding: 12px;
  display: block;
  font-size: 1.25rem;
  background-color: ${Theme.whiteText};
  border-radius: 3px;
  margin: ${props => props.margin!== null ? props.margin:0};

  &:hover {
    background-color: ${Theme.whiteText};
    color: ${Theme.darkColor};
  }
`;

const FieldSet = styled.div`
  margin-bottom: 12px;
`;

const Form = styled.form`
  border: 1px solid black;
  border-radius: 3px;
  height: ${(props) => props.height || "auto"};
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &:first-child {
    padding-top: 12px;
  }
`;

export {
  SubmitButton,
  BasicInput,
  BasicLabel,
  FieldSet,
  Form,
}