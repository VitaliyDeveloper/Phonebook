import styled from 'styled-components';
import { RiCloseCircleLine } from 'react-icons/ri';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.55);
  animation-name: appear;
  animation-duration: 300ms;
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalDialog = styled.div`
  width: 100%;
  max-width: 550px;
  background: var(--second-color);
  position: relative;
  margin: 0 20px;
  max-height: calc(100vh - 40px);
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: slide-in;
  animation-duration: 0.5s;
  @keyframes slide-in {
    from {
      transform: translateY(-150px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Label = styled.label`
  margin: 10px;
`;

export const FieldName = styled.p`
  color: var(--some-white-color);
  font-weight: bold;
  /* color: var(--first-color-dark); */
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 15px;
  border-color: var(--some-white-color);

  &:hover {
    border: 2px solid var(--accent-color);
  }
`;

export const BtnAdd = styled.button`
  padding: 10px;
  background-color: var(--second-color);
  color: #fff;
  border: 1px solid var(--accent-color);
  transition: all 250ms ease-in-out;

  &:hover {
    color: var(--second-color);
    background-color: var(--accent-color);
  }
`;

export const Close = styled(RiCloseCircleLine)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: var(--some-white-color);

  &:hover {
    color: var(--accent-color);
  }
`;
