import { GlobalStyle } from './GlobalStyles';
import Container from './Container';
import Section from './Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Wrapper from './Wrapper';
// import { useLocalStorage } from 'hooks/useLocalStorage';

export const App = () => {
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
            <ContactList />
          </Section>
        </Wrapper>
      </Container>
    </>
  );
};
