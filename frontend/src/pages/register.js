import React, { useState } from "react";
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
  const userName = useState("");
  const password = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const json = await fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        'username': "Mikolertesx",
        'password': "guapon",
      })
    });
    const response = await json.json();
    console.log(response);
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
          <SubmitButton width="100%" onClick={onSubmit}>
            Register
          </SubmitButton>
        </Form>
      </RegisterContent>
    </Page>
  );
};

export default RegisterPage;
