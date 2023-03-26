// import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import ContactItem from '../ContactItem';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selector';

const ContactList = ({ onEditContact }) => {
  const visibleContacts = useSelector(getFilteredContacts);

  console.log('get', visibleContacts);

  return (
    <div>
      <List>
        {visibleContacts.map((contact, idx) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            index={idx}
            onEditContact={onEditContact}
          />
        ))}
      </List>
    </div>
  );
};

export default ContactList;
