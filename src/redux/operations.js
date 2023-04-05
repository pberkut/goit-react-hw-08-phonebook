import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6401106b3779a862625182f2.mockapi.io/api/v1';

const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const addContact = createAsyncThunk('contacts/addContact');

const deleteContact = createAsyncThunk();

const editContact = createAsyncThunk();

export { fetchContacts, addContact, deleteContact, editContact };
