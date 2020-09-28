import React, { useState } from "react";
import Page from "../shared/page";
import styled from "styled-components";

import { register } from "../api/auth";

import {
  Form,
  FieldSet,
  BasicLabel,
  BasicInput,
  SubmitButton,
} from "../styled-components/form-components";

const RegisterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const RegisterPage = (props) => {
  // TODO Replace useState for text, for form management.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      const id = await register(username, password);
      console.log(id);
    }

  };

  const onUsernameChange = (usernameInput) => {
    setUsername(usernameInput.target.value);
  };

  const onPasswordChange = (passwordInput) => {
    setPassword(passwordInput.target.value);
  };

  const onConfirmPasswordChange = (confirmedPassword) => {
    setConfirmPassword(confirmedPassword.target.value);
  };

  return (
    <Page>
      <RegisterContent>
        <Form height="400px">
          <FieldSet>
            <BasicLabel htmlFor="user" margin="12px">
              User
            </BasicLabel>
            <BasicInput
              onChange={onUsernameChange}
              value={username}
              placeholder="User"
              autoComplete="username"
              margin="12px"
              name="user"
            />
          </FieldSet>
          <FieldSet>
            <BasicLabel htmlFor="password" margin="12px">
              Password
            </BasicLabel>
            <BasicInput
              onChange={onPasswordChange}
              value={password}
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              margin="12px"
              name="password"
            />
          </FieldSet>
          <FieldSet>
            <BasicLabel htmlFor="confirm-password" margin="12px">
              Confirm password
            </BasicLabel>
            <BasicInput
              onChange={onConfirmPasswordChange}
              value={confirmPassword}
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              margin="12px"
              name="confirm-password"
            />
          </FieldSet>
          <SubmitButton width="100%" onClick={onSubmit}>
            Register
          </SubmitButton>
        </Form>
      </RegisterContent>
    </Page>
  );
};

export default RegisterPage;
