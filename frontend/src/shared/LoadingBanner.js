import styled from 'styled-components';

export const ErrorP = styled.p`
  color: red;
  font-family: 'Arial';
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const LoadingBanner = styled.div`
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingBannerTitle = styled.h1`
  font-size: 2.5rem;
  font-family: 'Arial';
  font-weight: thin;
  color: white;
`;