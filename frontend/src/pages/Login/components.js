import Theme from "../../shared/Theme";
import styled from "styled-components";
import PaddedButton from "../../shared/paddedButton";
import InputField from "../../components/InputField";
import Background from "../../static/images/beach.jpg";
import {
  LoadingBanner,
  LoadingBannerTitle,
  ErrorP,
} from "../../shared/LoadingBanner";

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: url(${Background});
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

export const TitleInForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  width: 100%;
  height: 86px;
  background: ${Theme.primaryColor};
  color: white;
`;

export const TitleH1InForm = styled.h1`
  font-family: "Arial";
  font-weight: 200;
`;

export const Form = styled.form`
  overflow: hidden;
  background: white;
  max-width: 600px;
  width: 60%;
  height: 346px;
  border: 1px solid black;
  border-radius: 3px;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  transform: translateY(-25%);
  box-shadow: 12px 12px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const FormDiv = styled.div`
  width: 100%;
  padding: 12px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonSeparation = styled.div`
  width: 65%;
  margin: auto;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
`;

export const FormButtons = styled(PaddedButton)`
  flex-basis: 100%;
  margin: 12px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export { InputField, LoadingBanner, LoadingBannerTitle, ErrorP };
