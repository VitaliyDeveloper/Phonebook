import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.p`
  margin: 0;
  text-align: right;
  text-transform: uppercase;
  font-size: 100px;
  width: auto;
  color: var(--second-color);
  text-shadow: 0 0 20px #666666;
`;

export const Span = styled.span`
  margin: 0;
  font-weight: bold;

  font-size: 150px;
  text-transform: uppercase;
  text-align: right;
  color: var(--accent-color);
  text-shadow: 0 0 20px #666666;
`;
