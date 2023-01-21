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
`;

export const Title = styled.p`
  margin: 0;
  text-align: right;
  text-transform: uppercase;
  font-size: 80px;
  color: var(--second-color);
  animation: showUp 2000ms ease;

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

export const Span = styled.span`
  margin: 0;
  font-weight: bold;
  font-size: 150px;
  text-transform: uppercase;
  text-align: right;
  color: var(--accent-color);
  animation: showDown 2000ms ease;

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

export const ListStyle = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 10px 20px;
  margin: 0;
  animation: show 2000ms ease-in-out;

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
