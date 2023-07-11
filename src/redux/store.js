import { configureStore } from '@reduxjs/toolkit';
import { filterReducerSlice } from './filterSlice/filterSlice';
import { contactsSliceReduser } from './contactListSlice/contactListSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSliceReduser,
    filter: filterReducerSlice,
  },
});
