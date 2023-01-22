import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Shadow = styled.div`
  height: 5px;
  width: 100%;
  margin: 0;
  padding: 0;
  /* border: 1px solid var(--accent-color); */
  box-shadow: -5px 0 20px var(--accent-color), 5px 0 30px var(--accent-color),
    0 0 40px var(--accent-color);
`;

export const NameText = styled.p`
  text-align: center;
  color: var(--some-white-color);
  max-width: 100px;
  animation: marquee 5000ms infinite linear;

  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-200%);
    }
  }
`;

// export const Btn = styled.button`
//   margin: 10px;
//   padding: 10px;
//   background-color: var(--first-dark-color);
//   color: #fff;
//   border: 1px solid var(--accent-color);
//   transition: all 250ms ease-in-out;

//   &:hover {
//     color: var(--second-color);
//     background-color: var(--accent-color);
//   }
// `;
