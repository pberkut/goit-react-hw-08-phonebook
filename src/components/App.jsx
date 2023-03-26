import { GlobalStyle } from './GlobalStyles';
import Container from './Container';
import Section from './Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Wrapper from './Wrapper';
// import { useLocalStorage } from 'hooks/useLocalStorage';

export const App = () => {
  // * const editContact = updateContact => {
  //   setContacts(prevContacts => {
  //     return prevContacts.map(contact => {
  //       if (contact.id === updateContact.id) {
  //         const newContact = { ...contact, ...updateContact };
  //         return newContact;
  //       }
  //       return contact;
  //     });
  //   });
  // };

  // * const setFilterContacts = event => setFilter(event.currentTarget.value);

  // const filteredContacts = getFilteredArray(contacts, filter);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Wrapper>
          <Section title="Phonebook">
            <ContactForm />
          </Section>
          <Section title="Search">
            <Filter />
          </Section>
          <Section title="Contacts">
            <ContactList
            // onEditContact={editContact}
            />
          </Section>
        </Wrapper>
      </Container>
    </>
  );
};
