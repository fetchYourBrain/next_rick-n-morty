import { getAllLocations, getLocation } from "@/api";
import { Location } from "@/types/Location";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type stateProps = {
  locations: Location[];
  hasError: boolean;
  isLoading: boolean;
};

const initialState: stateProps = {
  locations: [],
  hasError: false,
  isLoading: false,
};

export const fetchAllLocations = createAsyncThunk(
  "locations/fetchAllLocations",
  async (query?: string) => {
    try {
      const response = await getAllLocations(query);
      return response;
    } catch (error) {
      console.error("Failed to fetch characters:", error);
      throw error;
    }
  }
);

export const fetchLocationData = createAsyncThunk(
  "locations/fetchLocationData",
  async (id: string) => {
    const response = await getLocation(id);
    return response;
  }
);

const locationSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllLocations.pending, (state) => {
        state.hasError = false;
        state.isLoading = true;
      })
      .addCase(
        fetchAllLocations.fulfilled,
        (state, action: PayloadAction<Location[]>) => {
          state.hasError = false;
          state.isLoading = false;
          state.locations = action.payload;
        }
      )
      .addCase(fetchAllLocations.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
        state.locations = [];
      });
  },
});

export default locationSlice.reducer;
