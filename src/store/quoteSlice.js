import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk action creator for asynchronous increment
export const fetchQuote = createAsyncThunk("quote/fetchRandom", async () => {
  try {
    const response = await fetch("https://api.quotable.io/random");
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error; // Throw the error to trigger the "rejected" action
  }
});

const initialState = {
  quote: null,
  status: "idle",
  error: null,
   tags: null,
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.quote = action.payload;
        state.tags = action.payload.tags;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer;
