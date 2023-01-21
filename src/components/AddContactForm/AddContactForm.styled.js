import styled from 'styled-components';

export const Form = styled.form`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: show 1500ms ease;

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Label = styled.label`
  margin: 10px;
`;
