import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  /* border: 1px solid #727272; */
  /* border-radius: 5px; */
  animation: show 1000ms ease;

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 50px;
`;

export const ShiftLeft = styled.span`
  font-weight: bold;
  font-size: 70px;
  color: var(--accent-color);
  animation: shiftLeft 1500ms ease-in-out;

  @keyframes shiftLeft {
    0% {
      transform: translate(-120%, 0px);
      opacity: 0;
    }
    100% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }
`;

export const ShiftRight = styled.span`
  color: var(--second-color);
  animation: shiftRight 1500ms ease-in-out;

  @keyframes shiftRight {
    0% {
      transform: translate(120%, 0px);
      opacity: 0;
    }
    100% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }
`;

export const Label = styled.label`
  margin: 10px;
`;
