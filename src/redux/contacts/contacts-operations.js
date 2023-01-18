import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63be8b79e348cb07621194bc.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`contacts`, contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateContacts = createAsyncThunk(
  'contacts/updateContacts',
  async (contact, { rejectWithValue }) => {
    try {
      await axios.put(`contacts/${contact.id}`, contact);
      // console.log(contact);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
