import styled from 'styled-components';

export const Modal = styled.div``;

export const Form = styled.form`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  margin: 10px;
`;

export const FieldName = styled.p`
  color: var(--second-color);
  font-weight: bold;
  /* color: var(--first-color-dark); */
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 15px;
  border-color: var(--some-white-color);

  &:hover {
    border: 2px solid var(--second-color);
  }
`;

export const BtnAdd = styled.button`
  padding: 10px;
  background-color: var(--second-color);
  color: #fff;
  border: none;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: var(--accent-color);
  }
`;
