import React from "react";
import Page from "../shared/page";
import styled from "styled-components";

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
  const onSubmit = async (e) => {
    e.preventDefault();

    const json = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "Mikolertesx",
        password: "guapon",
      }),
    });
    const response = await json.json();
    console.log(response);
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

export default LoginPage;
