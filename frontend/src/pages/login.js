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
          <SubmitButton width="100%">Register</SubmitButton>
        </Form>
      </LoginContent>
    </Page>
  );
};

export default LoginPage;
