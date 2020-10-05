import React, { useState } from "react";
import {
  Content,
  FormButtons,
  Form,
  FormDiv,
  TitleInForm,
  TitleH1InForm,
  InputField,
  ButtonSeparation,
  ErrorP,
  LoadingBanner,
  LoadingBannerTitle
} from "./components";
import { login } from "../../api/auth";

const LoginPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!username) {
      return setError("No username was provided.");
    }
    if (!password) {
      return setError("No password was provided.");
    }
    setLoading(true);
    const LoginResult = await login(username, password);
    setLoading(false);
    if (!LoginResult.token) {
      return setError(LoginResult.message || 'Server didn\'t reply');
    }
  }

  return (
    <Content>
      {loading && <LoadingBanner>
          <LoadingBannerTitle>Loading...</LoadingBannerTitle>
        </LoadingBanner>}
      <Form onSubmit={onSubmit}>
        <TitleInForm>
          <TitleH1InForm>Access your account</TitleH1InForm>
        </TitleInForm>
        <FormDiv>
          <InputField
            title="Username"
            text={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
          <InputField
            title="Password"
            text={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            autoComplete="current-password"
          />
        <ErrorP>{error}</ErrorP>
        </FormDiv>
        <ButtonSeparation>
          <FormButtons type="primary">Login</FormButtons>
          <FormButtons type="secondary">Or register</FormButtons>
        </ButtonSeparation>
      </Form>
    </Content>
  );
};

export default LoginPage;
