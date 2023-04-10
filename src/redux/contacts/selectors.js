import { createSelector } from '@reduxjs/toolkit';
import { handleFilterContacts } from 'utils/handleFilterContacts';

const selectContacts = state => state.contacts.items;

const selectIsLoading = state => state.contacts.isLoading;

const selectError = state => state.contacts.error;

const selectFilterValue = state => state.filter;

const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filterValue) => {
    return handleFilterContacts(contacts, filterValue);
  }
);

export {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilterValue,
  selectFilteredContacts,
};
