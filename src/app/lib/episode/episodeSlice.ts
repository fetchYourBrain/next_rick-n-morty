import { getAllEpisodes, getEpisode, getMultipleEpisodes } from "@/api";
import { ApiInfo, ApiResponse } from "@/types/ApiResponse";
import { Episode } from "@/types/Episode";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type stateProps = {
  episodes: Episode[];
  info: ApiInfo | null;
  hasError: boolean;
  isLoading: boolean;
};

const initialState: stateProps = {
  episodes: [],
  info: null,
  hasError: false,
  isLoading: false,
};

export const fetchAllEpisodes = createAsyncThunk(
  "episodes/fetchAllEpisodes",
  async (params: { query?: string; noCache?: boolean }) => {
    try {
      const response = await getAllEpisodes(params.query, params.noCache);
      return response;
    } catch (error) {
      console.error("Failed to fetch episodes:", error);
      throw error;
    }
  }
);

export const fetchEpisodeData = createAsyncThunk(
  "episodes/fetchEpisode",
  async (id: string) => {
    const response = await getEpisode(id);
    return response;
  }
);

export const fetchMultipleEpisodes = createAsyncThunk(
  "episodes/fetchMultipleEpisodes",
  async (ids: string[]) => {
    const response = await getMultipleEpisodes(ids);
    return response;
  }
);

const episodeSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEpisodes.pending, (state) => {
        state.hasError = false;
        state.isLoading = true;
      })
      .addCase(
        fetchAllEpisodes.fulfilled,
        (state, action: PayloadAction<ApiResponse<Episode>>) => {
          state.hasError = false;
          state.isLoading = false;
          state.episodes = action.payload.results;
          state.info = action.payload.info;
        }
      )
      .addCase(fetchAllEpisodes.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
        state.episodes = [];
        state.info = null;
      });
  },
});

export default episodeSlice.reducer;
