import { getAllEpisodes, getEpisode, getMultipleEpisodes } from "@/api";
import { Episode } from "@/types/Episode";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type stateProps = {
  episodes: Episode[];
  hasError: boolean;
  isLoading: boolean;
};

const initialState: stateProps = {
  episodes: [],
  hasError: false,
  isLoading: false,
};

export const fetchAllEpisodes = createAsyncThunk(
  "episodes/fetchAllEpisodes",
  async () => {
    try {
      const response = await getAllEpisodes();
      return response;
    } catch (error) {
      console.error("Failed to fetch characters:", error);
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
        (state, action: PayloadAction<Episode[]>) => {
          state.hasError = false;
          state.isLoading = false;
          state.episodes = action.payload;
        }
      )
      .addCase(fetchAllEpisodes.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
        state.episodes = [];
      });
  },
});

export default episodeSlice.reducer;
