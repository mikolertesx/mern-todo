import React from "react";
import { connectedPageTemplate as ConnectedPage, authRequiredTemplate as AuthedPage } from "./pageTemplate";
import LoginPage from "./Login";
import RegisterPage from "./Register";
import TodoPage from "./Todo";

// Don't require auth.
export { default as HomePage } from "./Home";

export const connectedLoginPage = () => (
  <ConnectedPage>
    <LoginPage />
  </ConnectedPage>
);

export const connectedRegisterPage = () => (
  <ConnectedPage>
    <RegisterPage />
  </ConnectedPage>
);

export const connectedToDoPage = () => (
  <AuthedPage>
    <TodoPage />
  </AuthedPage>
);
