import { getAllLocations, getLocation } from "@/api";
import { ApiInfo, ApiResponse } from "@/types/ApiResponse";
import { Location } from "@/types/Location";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type stateProps = {
  locations: Location[];
  info: ApiInfo | null;
  hasError: boolean;
  isLoading: boolean;
};

const initialState: stateProps = {
  locations: [],
  info: null,
  hasError: false,
  isLoading: false,
};

export const fetchAllLocations = createAsyncThunk(
  "locations/fetchAllLocations",
  async (params: { query?: string; noCache?: boolean }) => {
    try {
      const response = await getAllLocations(params.query, params.noCache);
      return response;
    } catch (error) {
      console.error("Failed to fetch locations:", error);
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
        (state, action: PayloadAction<ApiResponse<Location>>) => {
          state.hasError = false;
          state.isLoading = false;
          state.locations = action.payload.results;
          state.info = action.payload.info;
        }
      )
      .addCase(fetchAllLocations.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
        state.locations = [];
        state.info = null;
      });
  },
});

export default locationSlice.reducer;
