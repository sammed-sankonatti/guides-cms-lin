import { createSlice } from "@reduxjs/toolkit";
import { fetchGlobalSearchResults } from "../actions/searchActions";

const initialState = {
  searchResults: null,
  loading: false,
  error: null,
};

// Create the slice
const searchSlice = createSlice({
  name: "globalsearch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGlobalSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGlobalSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(fetchGlobalSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default searchSlice.reducer;
