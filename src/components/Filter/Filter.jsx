import PropTypes from 'prop-types';
import { FormField } from './Filter.styled';

import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selector';

export const Filter = ({ value, onChange }) => {
  const dispatch = useDispatch();

  const { filter } = useSelector(getFilter);

  const handleChange = e => {
    // console.log(e.target.value);
    dispatch(setFilter(e.target.value));
  };

  return (
    <FormField>
      Find contacts by name or phone:
      <input
        type="text"
        value={filter}
        title="Type name or phone"
        onChange={handleChange}
      />
    </FormField>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
