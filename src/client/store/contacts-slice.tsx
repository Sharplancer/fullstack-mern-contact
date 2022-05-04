import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import Contact from "../models/Contact";

const API_URL = 'http://localhost:3000/api/v1';

type ContactState = {
  error: string,
  list: Contact[],
  status: string,
  name: string
}

const initialState: ContactState = {
  error: '',
  list: [],
  status: '',
  name: ''
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    contactRequest(state: ContactState, action: PayloadAction<{ name: string }>) {
      state.error = '';
      state.status = 'pending';
      state.name = action.payload.name;
    },
    setContacts(state: ContactState, action: PayloadAction<{ contacts: Contact[]}>) {
      state.list = action.payload.contacts;
      state.status = 'success';
    },
    addNewContact(state: ContactState, action: PayloadAction<Contact>) {
      state.list.push(action.payload);
      state.status = 'success';
    },
    contactsFail(state: ContactState, action: PayloadAction<string>) {
      state.error = action.payload;
      state.status = 'error';
    }
  }
});

const contactActions = contactsSlice.actions;

export const fetchContacts = () => {
  return async (dispatch: Dispatch) => {
    dispatch(contactActions.contactRequest({ name: 'LIST' }));
    try {
      const response = await fetch(`${API_URL}/contacts`, {
        method: 'GET'
      });
      const responseData: {
        contacts: Contact[],
        message: string
      } = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || response.statusText);
      }
      const { contacts } = responseData;
      dispatch(contactActions.setContacts({ contacts }));
    } catch (error) {
      dispatch(contactActions.contactsFail('error'))
    }
  }
}

export const addContact = (firstName:  string, lastName: string, email: string, message: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(contactActions.contactRequest({ name: 'ADD' }));
    try {
      const response = await fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({firstName, lastName, email, message}),
      });
      const responseData: {
        contact: Contact,
        message: string
      } = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || response.statusText);
      }
      const { 
        contact
      } = responseData;
      dispatch(contactActions.addNewContact(contact));
    } catch (error) {
      dispatch(contactActions.contactsFail('error'))
    }
  }
}

export default contactsSlice;