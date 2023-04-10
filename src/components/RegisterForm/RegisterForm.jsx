import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  Box,
  FormLabel,
  VStack,
  FormControl,
} from '@chakra-ui/react';
import { useState } from 'react';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Flex bg="gray.100" align="center" justify="center" h="90vh">
      <Box bg="white" p={6} rounded="md">
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
          <VStack spacing={3} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input id="username" type="text" name="name" variant="filled" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email </FormLabel>
              <Input id="email" type="email" name="email" variant="filled" />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="password">Password </FormLabel>
              <InputGroup size="md">
                <Input
                  id="password"
                  name="password"
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                  variant="filled"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button type="submit">Register</Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export { RegisterForm };
