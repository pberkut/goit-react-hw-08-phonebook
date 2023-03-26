import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ErrorMessage,
  FormField,
  Field,
  Button,
  Form,
} from './ContactForm.styled';
import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selector';

const INITIAL_VALUE = {
  name: '',
  phone: '',
};

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be 3 characters or more')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  phone: Yup.string()
    .min(5, 'Must be 5 characters or more')
    .max(30, 'Must be 30 characters or less')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = ({ name, phone }, actions) => {
    const isUniqueContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isUniquePhone = contacts.some(contact => contact.phone === phone);

    if (isUniqueContact) {
      return Notify.failure(`Contact ${name} is already in contacts.`);
    }
    if (isUniquePhone) {
      return Notify.failure(`Phone ${phone} is already in contacts.`);
    }

    dispatch(addContact({ id: nanoid(2), name, phone }));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUE}
      validationSchema={ContactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormField>
          Name:
          <Field
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="p" />
        </FormField>
        <FormField>
          Phone:
          <Field
            name="phone"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="phone" component="p" />
        </FormField>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
