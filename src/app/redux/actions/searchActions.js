import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGlobalSearchResults = createAsyncThunk(
  "posts/fetchGlobalSearchResults",
  async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://cms.drillbitplagiarismcheck.com/hr/cms/documents/gSearch?query=${query}`
      );
      console.log("response == ", response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
