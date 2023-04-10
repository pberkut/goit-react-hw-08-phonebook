import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchTasks } from 'redux/tasks/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { ContactForm } from '../components/ContactForm';
import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';
import { Wrapper } from 'components/Wrapper/Wrapper';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  // const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList /> */}
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
}
