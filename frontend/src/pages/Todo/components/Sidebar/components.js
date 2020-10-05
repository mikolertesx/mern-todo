import styled from 'styled-components';
import paddedButton from "../../../../shared/paddedButton";
import theme from '../../../../shared/Theme';

export const Content = styled.div`
  width: 30%;
  min-width: 280px;
  max-width: 305px;
  height: 100%;
  overflow: hidden;
  background: ${theme.secondaryColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media(max-width: 600px) {
    width: 200px;
    min-width: unset;
  }
`;

export const ProfileDiv = styled.div`
  width: 164px;
  height: 164px;
  border-radius: 50%;
  background: gray;
  margin: auto;
  margin-top: 24px;
  overflow: hidden;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

  @media(max-width: 600px) {
    width: 80px;
    height: 80px;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  padding: 12px;
`;

export const ProfileName = styled.h1`
  font-family: 'Arial';
  color: white;
  font-weight: 200;
  font-size: 2.5rem;
  text-align: center;
  margin-top: 24px;

  @media(max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const ProfileInfo = styled.div``;

export const LeaveButton = styled(paddedButton)`
  width: 80%;
  margin: auto;
  /* margin-top: auto; */
  margin-bottom: 24px;
`;