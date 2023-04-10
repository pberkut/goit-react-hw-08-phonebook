import { InputStyled } from './Filter.styled';

import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/contacts/filterSlice';
import { useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/contacts/selectors';
import { FormControl, VStack, Input, FormLabel } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilterValue);

  const handleSetFilter = e => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <VStack spacing={2} align="flex-start">
      <FormControl>
        <FormLabel>
          Find contacts by name or number
          <InputStyled
            as={Input}
            type="text"
            value={filter}
            title="Enter name or number"
            onChange={handleSetFilter}
            variant="filled"
          />
        </FormLabel>
      </FormControl>
    </VStack>
  );
};

export { Filter };
