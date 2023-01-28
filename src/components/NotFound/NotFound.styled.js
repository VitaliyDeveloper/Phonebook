import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const ErrorName = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  color: var(--accent-color);
  font-size: 100px;
  margin: 20px;

  animation: shiftLeft 1500ms ease-in-out;

  @keyframes shiftLeft {
    0% {
      transform: translate(0px, -120%);
      opacity: 0;
    }
    100% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }
`;

export const ErrorCode = styled.p`
  color: var(--second-color);
  font-size: 80px;
  margin: 20px;

  animation: shiftRight 1500ms ease-in-out;

  @keyframes shiftRight {
    0% {
      transform: translate(0px, 120%);
      opacity: 0;
    }
    100% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }
`;
