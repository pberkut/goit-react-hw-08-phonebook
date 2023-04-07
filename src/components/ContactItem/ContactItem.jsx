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
import { deleteContact, editContact } from 'redux/operations';

const ContactItem = ({ index, contact }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
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
      dispatch(editContact({ id: contact.id, name, phone }));
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
              Phone:&nbsp;
              <Input
                name="phone"
                value={phone}
                onChange={handleChange}
                title="Edit phone number"
                type="tel"
              />
            </Label>
          </form>
        ) : (
          <>
            <span>{name} :</span> &nbsp;
            <span>{phone}</span>
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
    phone: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
