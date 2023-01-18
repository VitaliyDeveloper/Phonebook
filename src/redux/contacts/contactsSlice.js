import {
  fetchContacts,
  deleteContacts,
  addContacts,
  updateContacts,
} from './contacts-operations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      })
      .addCase(updateContacts.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items[index] = payload;
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContacts.pending,
          addContacts.pending,
          updateContacts.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContacts.fulfilled,
          addContacts.fulfilled,
          updateContacts.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContacts.rejected,
          addContacts.rejected,
          updateContacts.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: {
//     [fetchContacts.pending]: state => {
//       state.isLoading = true;
//     },
//     [fetchContacts.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.items = payload;
//       state.error = null;
//     },
//     [fetchContacts.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },
//     [deleteContacts.pending]: state => {
//       state.isLoading = true;
//     },
//     [deleteContacts.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = null;
//       state.items = state.filter(({ id }) => id !== payload);
//     },
//     [deleteContacts.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },
//     [addContacts.pending]: state => {
//       state.isLoading = true;
//     },
//     [addContacts.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = null;
//       state.items = [...state.items, payload];
//     },
//     [addContacts.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },
//   },
// });

// export default contactsSlice.reducer;
