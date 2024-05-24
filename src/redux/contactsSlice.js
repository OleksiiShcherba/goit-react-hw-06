import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactInitialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactInitialState,
  reducers: {
    addContact(state, action) {
      state.items.push({ ...action.payload, id: nanoid() });
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
export const contactsSelector = (state) => state.contacts.items;
