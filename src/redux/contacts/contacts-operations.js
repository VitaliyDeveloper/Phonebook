import axios from 'axios';
import { Notify } from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(
        'https://connections-api.herokuapp.com/contacts'
      );
      console.log(data);
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
      const { data } = await axios.post(
        `https://connections-api.herokuapp.com/contacts`,
        contact
      );
      Notify.success(` ${contact.name} added successfully`);

      return data;
    } catch (error) {
      Notify.failure(` ${contact.name} not added`);
      return rejectWithValue(error);
    }
  }
);

export const updateContacts = createAsyncThunk(
  'contacts/updateContacts',
  async (contact, { rejectWithValue }) => {
    try {
      await axios.put(
        `https://connections-api.herokuapp.com/contacts/${contact.id}`
      );
      console.log(contact.id);
      Notify.success(` ${contact.name} updated successfully`);
      return contact;
    } catch (error) {
      Notify.failure(` ${contact.name} not updated`);
      return rejectWithValue(error);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(
        `https://connections-api.herokuapp.com/contacts/${id}`
      );
      console.log(id);
      Notify.success(`Contact successfully removed`);
      return id;
    } catch (error) {
      Notify.failure(`Contact not removed`);
      return rejectWithValue(error);
    }
  }
);
