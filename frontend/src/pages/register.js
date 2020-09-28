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

const RegisterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const RegisterPage = (props) => {
  return (
    <Page>
      <RegisterContent>
        <Form height="400px">
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
          <FieldSet>
            <BasicLabel htmlFor="confirm-password" margin="12px">
              Confirm password
            </BasicLabel>
            <BasicInput
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              margin="12px"
              name="confirm-password"
            />
          </FieldSet>
          <SubmitButton width="100%">Register</SubmitButton>
        </Form>
      </RegisterContent>
    </Page>
  );
};

export default RegisterPage;
