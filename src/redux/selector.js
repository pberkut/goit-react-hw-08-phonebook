import { createSelector } from '@reduxjs/toolkit';
import { handleFilterContacts } from 'utils/handleFilterContacts';

const getContacts = state => state.contacts.items;

const getIsLoading = state => state.contacts.isLoading;

const getError = state => state.contacts.error;

const getFilterValue = state => state.filter;

const getFilteredContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filterValue) => {
    return handleFilterContacts(contacts, filterValue);
  }
);

export {
  getContacts,
  getIsLoading,
  getError,
  getFilterValue,
  getFilteredContacts,
};
