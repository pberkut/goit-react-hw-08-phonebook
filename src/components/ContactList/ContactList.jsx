import { List } from './ContactList.styled';
import { ContactItem } from '../ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <List>
        {visibleContacts.map((contact, idx) => (
          <ContactItem key={contact.id} contact={contact} index={idx} />
        ))}
      </List>
    </div>
  );
};

export { ContactList };
