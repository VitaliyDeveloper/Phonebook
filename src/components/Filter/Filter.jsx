import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsSlice';
import {
  FilterContainer,
  FilterLabel,
  FilterText,
  FilterInput,
} from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterContainer>
      <FilterLabel>
        <FilterText>Search contacts</FilterText>
        <FilterInput
          type="text"
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;
