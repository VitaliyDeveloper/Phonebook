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
  background-color: rgba(15, 65, 125, 0.55);
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
  max-width: 450px;
  background: rgba(255, 255, 255, 1);
  position: relative;
  margin: 0 20px;
  padding: 50px 10px;
  max-height: calc(100vh - 20px);
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
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

export const BtnContainer = styled.div`
  display: flex;
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
