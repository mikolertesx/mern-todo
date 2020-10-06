import React from "react";
import { connectedPageTemplate as ConnectedPage, authRequiredTemplate as AuthedPage } from "./pageTemplate";
import LoginPage from "./Login";
import RegisterPage from "./Register";
import TodoPage from "./Todo";

// Don't require auth.
export { default as HomePage } from "./Home";

export const connectedLoginPage = () => (
  <ConnectedPage onFailUrl="/todos">
    <LoginPage/>
  </ConnectedPage>
);

export const connectedRegisterPage = () => (
  <ConnectedPage onFailUrl="/todos">
    <RegisterPage />
  </ConnectedPage>
);

export const connectedToDoPage = () => (
  <AuthedPage onFailUrl="/login">
    <TodoPage />
  </AuthedPage>
);
