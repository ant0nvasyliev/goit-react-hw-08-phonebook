import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import {
  fetchContacts,
  AddContacts,
  DeleteContacts,
} from './contactsOperations';

const toastLoading = toast.loading('', { position: 'top-right' });
const onPending = state => {
  state.isLoading = true;
  toast.loading('Waiting...', { id: toastLoading, position: 'top-left' });
};

const onRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  toast.dismiss(toastLoading);
  toast.error(state.error);
};
const onFulfilled = (state, action) => {
  toast.dismiss(toastLoading);
  state.isLoading = false;
  state.items = action.payload;
  state.error = null;
};
const onAddFulfilled = (state, action) => {
  toast.dismiss(toastLoading);
  toast.success('Contact is added!', {
    id: toastLoading,
    position: 'top-right',
  });

  return {
    ...state,
    items: [...state.items, action.payload],
    error: null,
  };
};
const onDeleteFulfilled = (state, action) => {
  toast.dismiss(toastLoading);
  toast.success('Contact deleted...', {
    id: toastLoading,
    position: 'top-right',
  });
  // toast.success('Contact deleted');
  return {
    ...state,
    items: state.items.filter(contact => contact.id !== action.payload.id),
  };
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, onPending)
      .addCase(fetchContacts.fulfilled, onFulfilled)
      .addCase(fetchContacts.rejected, onRejected)
      .addCase(AddContacts.pending, onPending)
      .addCase(AddContacts.fulfilled, onAddFulfilled)
      .addCase(AddContacts.rejected, onRejected)
      .addCase(DeleteContacts.pending, onPending)
      .addCase(DeleteContacts.fulfilled, onDeleteFulfilled)
      .addCase(DeleteContacts.rejected, onRejected);
  },
});

export const getContacts = state => state.contacts.items;
