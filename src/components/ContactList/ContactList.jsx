// import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { List } from './ContactList.styled';
import ContactItem from '../ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selector';
import { getFilteredArray } from 'utils/getFilteredArray';

const ContactList = ({ onEditContact }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const getVisibleContacts = useMemo(
    () => getFilteredArray(contacts, filter),
    [contacts, filter]
  );

  return (
    <div>
      <List>
        {getVisibleContacts.map((contact, idx) => (
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

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       phone: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   // onDeleteContact: PropTypes.func.isRequired,
// };

export default ContactList;
