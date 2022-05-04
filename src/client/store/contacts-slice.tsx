import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import Contact from "../models/Contact";

const API_URL = 'http://localhost:3000/api/v1';

type ContactState = {
  error: string,
  status: string,
  msg: string,
  name: string
}

const initialState: ContactState = {
  error: '',
  status: '',
  msg: '',
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
    contactRequestSuccess(state: ContactState, action: PayloadAction<string>) {
      state.msg = action.payload;
      state.status = 'success';
    },
    contactRequestFail(state: ContactState, action: PayloadAction<string>) {
      state.msg = action.payload;
      state.status = 'error';
    }
  }
});

const contactActions = contactsSlice.actions;

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
        msg: string
      } = await response.json();
      if (!response.ok) {
        throw new Error(responseData.msg);
      }
      const { 
        msg
      } = responseData;
      dispatch(contactActions.contactRequestSuccess(msg));
    } catch (error: any) {
      dispatch(contactActions.contactRequestFail(error));
    }
  }
}

export default contactsSlice;