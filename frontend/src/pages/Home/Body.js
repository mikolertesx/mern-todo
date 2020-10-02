import React from "react";
import styled from "styled-components";

import RegisterIcon from "../../static/svg/register.svg"
import LoginIcon from "../../static/svg/login.svg"
import ManageIcon from "../../static/svg/manage.svg"

const Content = styled.div`
  background: rgba(0, 0, 0, 0.1);
  margin-top: 12px;
  padding-top: 64px;
  padding-bottom: 64px;
`;

const Header = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 12px;
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-family: "Arial";
  font-weight: 200;
  margin-bottom: 6px;
`;

const HeaderP = styled.p`
  font-size: 1.2rem;
  margin-left: 5px;
  margin-bottom: 32px;
`;

const FeaturesDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
  margin: auto;
  
  @media(max-width: 768px) {
    width: 85%;
    flex-direction: column;
  }
`;

const Feature = styled.div`
    margin: 12px;
    flex-basis: 30%;
    flex-grow: 0;
    border-radius: 4px;
    padding: 24px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
`;

const FeatureTitle = styled.h2`
    font-size: 1.2rem;
    text-align: center;
`;


const FeatureIcon = styled.img`
  display: block;
  height: 64px;
  margin: auto;
`;

const FeatureP = styled.p`
  width: 80%;
  margin: auto;
  margin-top: 48px;
`

const Body = () => {
  return (
    <Content>
      <Header>
        <HeaderTitle>How it works.</HeaderTitle>
        <HeaderP>Pretty simple actually.</HeaderP>
      </Header>
      <FeaturesDiv>
          <Feature>
              <FeatureIcon src={RegisterIcon}/>
              <FeatureTitle>Register</FeatureTitle>
              <FeatureP>As simple as putting an email and password</FeatureP>
          </Feature>
          <Feature>
          <FeatureIcon src={LoginIcon}/>
              <FeatureTitle>Login</FeatureTitle>
              <FeatureP>Using the same email and password, access all your devices!!!</FeatureP>
          </Feature>
          <Feature>
          <FeatureIcon src={ManageIcon}/>
              <FeatureTitle>Manage</FeatureTitle>
              <FeatureP>Add and Remove Todos at your hearts joy!!!</FeatureP>
          </Feature>
      </FeaturesDiv>
    </Content>
  );
};

export default Body;
