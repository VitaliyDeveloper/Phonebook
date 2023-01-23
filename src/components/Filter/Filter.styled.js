import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--first-color-dark);
  animation: showUp 1500ms ease;

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

export const FilterLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const FilterText = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--second-color);
  margin-right: 20px;
`;

export const FilterInput = styled.input`
  outline: none;
  height: 20px;
  border: 3px solid var(--second-color);
  border-radius: 5px;
  outline: none;
  width: 300px;
  font-size: 20px;
  padding: 10px;
`;
