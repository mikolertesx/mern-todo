import React, { useState } from "react";
import {withRouter} from "react-router-dom";

import { mapDispatchToProps, mapStateToProps } from "../store/reducers/auth";
import { connect } from "react-redux";

import Page from "../shared/page";
import styled from "styled-components";

import { login } from "../api/auth";

import {
  Form,
  FieldSet,
  BasicLabel,
  BasicInput,
  SubmitButton,
} from "../styled-components/form-components";

const LoginContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoginPage = (props) => {
  // TODO Replace useState for text, for form management.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (usernameInput) => {
    setUsername(usernameInput.target.value);
  };

  const onPasswordChange = (passwordInput) => {
    setPassword(passwordInput.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await login(username, password);

    if (response.token) {
      props.onChangeLogin(true ,response.token);
      props.history.push('/todos');
    }
  };

  return (
  <Page>
      <LoginContent>
        <Form height="304px">
          <FieldSet>
            <BasicLabel htmlFor="user" margin="12px">
              User
            </BasicLabel>
            <BasicInput
              value={username}
              onChange={onUsernameChange}
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
              value={password}
              onChange={onPasswordChange}
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              margin="12px"
              name="password"
            />
          </FieldSet>
          <SubmitButton width="100%" onClick={onSubmit}>
            Login
          </SubmitButton>
        </Form>
      </LoginContent>
    </Page>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));
