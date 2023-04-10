import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  Box,
  FormControl,
  FormLabel,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Flex bg="gray.100" align="center" justify="center" h="90vh">
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={handleSubmit} autoComplete="off">
          <VStack spacing={3} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="email">
                Email
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  variant="filled"
                />
              </FormLabel>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">
                Password
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
              </FormLabel>
            </FormControl>
            <Button type="submit" width="full">
              Log In
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export { LoginForm };
