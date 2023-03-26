import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: '11', name: 'Emely Franecki', phone: '72121qw323' },
  { id: '12', name: 'Cora Schroeder', phone: '631-388-4506' },
  { id: '13', name: 'Albertha MacGyver', phone: '403-390-2243511' },
  { id: '14', name: 'Retta Wolf', phone: '697-193-0763' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
