import { FormField, InputStyled } from './Filter.styled';

import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/contacts/filterSlice';
import { useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/contacts/selectors';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilterValue);

  const handleSetFilter = e => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <FormField>
      Find contacts by name or number:
      <InputStyled
        type="text"
        value={filter}
        title="Type name or number"
        onChange={handleSetFilter}
      />
    </FormField>
  );
};

export { Filter };
