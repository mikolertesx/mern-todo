import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../shared/paddedButton";

const Content = styled.header`
  width: 100%;
`;

const Card = styled.div`
  width: 95%;
  max-width: 1200px;
  padding: 24px;
  margin: auto;
  margin-top: 12px;
  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.6);
`;

const CardTitle = styled.h1`
  font-family: "Arial";
  text-align: center;
  margin-bottom: 12px;
`;

const CardDescription = styled.p`
  max-width: 400px;
  margin: auto;
`;

const ButtonsDiv = styled.div`
  margin: auto;
  margin-top: 12px;
  display: flex;
  justify-content: center;
`;

const HeaderButton = styled(Button)`
  margin: 12px;

  &:hover {
    transform: scale(1.25);
  }
`;

const Header = () => {
  return (
    <Content>
      <Card>
        <CardTitle>Welcome to your ToDos!</CardTitle>
        <CardDescription>
          Find a place to order and organize your ideas for free and sync them
          across devices!!!
        </CardDescription>
        <ButtonsDiv>
          <Link to="/register">
            <HeaderButton>Register yourself</HeaderButton>
          </Link>
          <Link to="/login">
            <HeaderButton type="secondary">Login with your account</HeaderButton>
          </Link>
        </ButtonsDiv>
      </Card>
    </Content>
  );
};

export default Header;
