import { GlobalStyle } from './GlobalStyles';
import Container from './Container';
import Section from './Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Wrapper from './Wrapper';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
            {error && <b>Error: {error}</b>}
            {isLoading && <p>Request in progress...</p>}

            <ContactList />
          </Section>
        </Wrapper>
      </Container>
    </>
  );
};
