// Import createSelector from reselect
import { createSelector } from '@reduxjs/toolkit';

// Define your original selectors without memoization
const selectIsLoggedInRaw = state => state.auth.isLoggedIn;
const selectUserRaw = state => state.auth.user;
const selectIsRefreshingRaw = state => state.auth.isRefreshing;

// Use raw selectors without memoization
export const selectIsLoggedIn = state => selectIsLoggedInRaw(state);

export const selectUser = state => selectUserRaw(state);

export const selectIsRefreshing = state => selectIsRefreshingRaw(state);

export const selectFilter = state => state.filter;
export const selectContacts = state => state.contacts.items;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterField) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterField.toLowerCase())
    )
);
