import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage, Form } from './ContactForm.styled';
import { Notify } from 'notiflix';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
} from '@chakra-ui/react';

const INITIAL_VALUE = {
  name: '',
  number: '',
};

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be 3 characters or more')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  number: Yup.string()
    .min(5, 'Must be 5 characters or more')
    .max(30, 'Must be 30 characters or less')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, number }, actions) => {
    const isUniqueContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isUniqueNumber = contacts.some(contact => contact.number === number);

    if (isUniqueContact) {
      return Notify.failure(`Contact ${name} is already in contacts.`);
    }
    if (isUniqueNumber) {
      return Notify.failure(`Number ${number} is already in contacts.`);
    }

    dispatch(addContact({ name, number }));
    Notify.info(`${name} added to your Phonebook`);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUE}
      validationSchema={ContactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormControl>
          <FormLabel>
            Name
            <Field
              as={Input}
              name="name"
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              variant="filled"
            />
          </FormLabel>
          <ErrorMessage name="name" component="p" />
        </FormControl>

        <FormControl>
          <FormLabel>
            Number
            <Field
              as={Input}
              name="number"
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              variant="filled"
            />
          </FormLabel>
          <ErrorMessage name="number" component="p" />
        </FormControl>
        <Center>
          <Button type="submit" bg="gray.100">
            Add contact
          </Button>
        </Center>
      </Form>
    </Formik>
  );
};

export { ContactForm };
