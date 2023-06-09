import { configureStore } from '@reduxjs/toolkit';

import { contactsSlice } from './contacts/contactsSlice';

export const store = configureStore({
  reducer: { phonebook: contactsSlice.reducer },
});
