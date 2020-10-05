import React, { useState } from "react";
import {
  Content,
  Form,
  FormTitleContainer,
  FormTitle,
  FormContainer,
  FormButtonContainer,
  FormButton,
  InputField,
  ErrorP,
  LoadingBanner,
  LoadingBannerTitle
} from "./components";
import { register } from "../../api/auth";

const RegisterPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChange = (event, updateFunction) => {
    updateFunction(event.target.value);
  };

  const onSubmit = async (event)=> {
    event.preventDefault();
    setLoading(true);
    setError("");

    if (!username || !password || !confirmPassword) {
      setLoading(false);
      return setError("You should fill all the spaces.");
    }

    if (password !== confirmPassword) {
      setLoading(false);
      return setError("Both passwords should match");
    }

    const registerResult = await register(username, password);
    setLoading(false);
    
    if (!registerResult.token) {
      setError(registerResult.message || 'Server didn\'t answer.');
    }
  };

  return (
    <Content>
      {isLoading && <LoadingBanner>
          <LoadingBannerTitle>Loading...</LoadingBannerTitle>
        </LoadingBanner>}
      <Form onSubmit={onSubmit}>
        <FormTitleContainer>
          <FormTitle>Register with ToDos!!!</FormTitle>
        </FormTitleContainer>
        <FormContainer>
          <InputField
            title="Username"
            text={username}
            onChange={(e) => onChange(e, setUsername)}
            autoComplete="off"
          />
          <InputField
            title="Password"
            text={password}
            onChange={(e) => onChange(e, setPassword)}
            type="password"
            autoComplete="off"
          />
          <InputField
            title="Confirm password"
            text={confirmPassword}
            onChange={(e) => onChange(e, setConfirmPassword)}
            type="password"
            autoComplete="off"
          />
          {error && <ErrorP>{error}</ErrorP>}
          <FormButtonContainer>
            <FormButton>Register</FormButton>
          </FormButtonContainer>
        </FormContainer>
      </Form>
    </Content>
  );
};

export default RegisterPage;
