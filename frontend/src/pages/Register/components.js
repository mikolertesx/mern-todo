import styled from "styled-components";
import Theme from "../../shared/Theme";
import InputField from "../../components/InputField";
import paddedButton from "../../shared/paddedButton";
import {
  LoadingBanner,
  LoadingBannerTitle,
  ErrorP,
} from "../../shared/LoadingBanner";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form`
  overflow: hidden;
  background: white;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.5);
  width: 80%;
  max-width: 560px;
  margin: auto;
`;

export const FormTitleContainer = styled.div`
  background: ${Theme.primaryColor};
  color: white;
  width: 100%;
  padding: 32px;
`;

export const FormTitle = styled.h1`
  font-size: 1.5rem;
  font-family: Arial;
  text-align: center;
`;

export const FormContainer = styled.div`
  padding: 24px;
`;

export const FormButton = styled(paddedButton)`
  margin: 0 24px;
`;

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 64px;
`;

export { InputField, LoadingBanner, LoadingBannerTitle, ErrorP };
