import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
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

// export const FilterCintact = styled(NavLink)``;
