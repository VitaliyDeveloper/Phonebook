import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  text-decoration: none;
  background-color: var(--first-color-dark);
  /* box-shadow: 0 0 10px var(--first-color-dark); */
  box-sizing: border-box;
  margin-bottom: -50px;
  padding: 20px;
`;

export const FooterAddress = styled.address`
  text-align: center;
  color: var(--accent-color);
`;

export const FooterCopy = styled.p`
  text-align: center;
  color: var(--some-white-color);
`;
