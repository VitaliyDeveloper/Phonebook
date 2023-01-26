import styled from 'styled-components';

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Span = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  border-radius: 50%;
  position: relative;
  -webkit-animation: loader 0.9s 0.35s ease alternate infinite;
  animation: loader 0.9s 0.35s ease alternate infinite;
  margin: -20px auto 0;

  &:after,
  &:before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    animation: loader 0.9s ease alternate infinite;
    -webkit-animation: loader 0.9s ease alternate infinite;
  }
  &:before {
    left: -60px;
    animation-delay: 0.2s;
  }

  &:after {
    right: -60px;
    animation-delay: 0.5s;
  }

  @keyframes loader {
    0% {
      box-shadow: 0 50px 0 -50px var(--accent-color);
    }
    100% {
      box-shadow: 0 50px 0 var(--accent-color);
    }
  }

  @-webkit-keyframes loader {
    0% {
      box-shadow: 0 50px 0 -50px var(--accent-color);
    }
    100% {
      box-shadow: 0 50px 0 var(--accent-color);
    }
  }
`;
