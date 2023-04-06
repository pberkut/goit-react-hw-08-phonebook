import { FormField } from './Filter.styled';

import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/selector';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilterValue);

  const handleSetFilter = e => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <FormField>
      Find contacts by name or phone:
      <input
        type="text"
        value={filter}
        title="Type name or phone"
        onChange={handleSetFilter}
      />
    </FormField>
  );
};

export default Filter;
