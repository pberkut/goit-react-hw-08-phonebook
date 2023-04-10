import PropTypes from 'prop-types';
import { useState } from 'react';

import { MdDeleteForever, MdEdit, MdSave } from 'react-icons/md';
import {
  Button,
  ListItem,
  Label,
  Input,
  ButtonBlock,
  ContactBlock,
} from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/contacts/operations';

const ContactItem = ({ index, contact }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleEditContact = () => {
    if (!isEdit) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
      dispatch(editContact({ id: contact.id, name, number }));
    }
  };

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  const onSubmit = e => {
    if (e.key !== 'Enter') {
      return;
    }
    handleEditContact();
  };

  return (
    <ListItem>
      <span>{index + 1}.</span>
      <ContactBlock>
        {isEdit ? (
          <form onKeyDown={onSubmit}>
            <Label>
              Name:&nbsp;
              <Input
                name="name"
                value={name}
                onChange={handleChange}
                title="Edit name"
                type="text"
              />
            </Label>
            <Label>
              Number:&nbsp;
              <Input
                name="number"
                value={number}
                onChange={handleChange}
                title="Edit phone number"
                type="tel"
              />
            </Label>
          </form>
        ) : (
          <>
            <span>{name} :</span> &nbsp;
            <span>{number}</span>
          </>
        )}
      </ContactBlock>
      <ButtonBlock>
        <Button type="button" onClick={handleEditContact} role="Edit contact">
          {isEdit ? <MdSave /> : <MdEdit />}
        </Button>
        <Button
          type="button"
          onClick={handleDeleteContact}
          role="Delete contact"
        >
          <MdDeleteForever />
        </Button>
      </ButtonBlock>
    </ListItem>
  );
};

ContactItem.propTypes = {
  index: PropTypes.number.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export { ContactItem };
