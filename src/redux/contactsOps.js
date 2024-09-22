import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66ef24873ed5bb4d0bf2e746.mockapi.io/";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_,thunkAPI) => {
try {
        const res = await axios.get("/contacts");
        return res.data;
} catch (error) {
   return thunkAPI.rejectWithValue();
}
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
    async (newContact, thunkAPI) => {
      try {
          const res = await axios.post('/contacts', newContact);
          return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue();
      }
  }
);

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
    try {
        const res = await axios.delete(`/contacts/${id}`);
        return res.data;
    } catch (error) {
         return thunkAPI.rejectWithValue();
    }
});



