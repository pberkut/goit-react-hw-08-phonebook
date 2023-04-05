import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact]() {},
    [deleteContact]() {},
    [editContact]() {},
  },
  // reducers: {
  //   addContact(state, action) {
  //     state.push(action.payload);
  //   },
  //   deleteContact(state, action) {
  //     const index = state.findIndex(contact => contact.id === action.payload);
  //     state.splice(index, 1);
  //   },
  //   editContact(state, action) {
  //     const index = state.findIndex(
  //       contact => contact.id === action.payload.id
  //     );
  //     state.splice(index, 1, action.payload);
  //   },
  // },
});

// export const { addContact, deleteContact, editContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
