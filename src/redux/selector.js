import { createSelector } from '@reduxjs/toolkit';
import { handleFilterContacts } from 'utils/handleFilterContacts';

const getContacts = state => state.contacts;

const getFilterValue = state => state.filter;

const getFilteredContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filterValue) => {
    return handleFilterContacts(contacts, filterValue);
  }
);

export { getContacts, getFilterValue, getFilteredContacts };
