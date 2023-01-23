import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: 20px 30px;

  @media screen and (min-width: 1300px) {
    margin-right: 200px;
  }
`;

export const Span = styled.span`
  margin: 0;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  text-align: right;
  color: var(--accent-color);

  animation: showDown 2000ms ease;

  @media screen and (min-width: 480px) {
    font-size: 50px;
  }
  @media screen and (min-width: 768px) {
    font-size: 100px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 180px;
  }

  @keyframes showDown {
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

export const Title = styled.p`
  margin: 0;
  text-align: right;
  text-transform: uppercase;
  font-size: 20px;
  color: var(--second-color);
  animation: showUp 2000ms ease;

  @media screen and (min-width: 480px) {
    font-size: 50px;
  }
  @media screen and (min-width: 768px) {
    font-size: 60px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 100px;
  }

  @keyframes showUp {
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

export const ListStyle = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 10px 20px;
  margin: 0;
  animation: show 2000ms ease-in-out;

  @media screen and (min-width: 1300px) {
    margin-right: 200px;
  }

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ItemStyle = styled.li`
  position: relative;
  padding-top: 2px;
  padding-right: 5px;
  list-style: none;
  margin: 10px;
  text-align: right;
`;
