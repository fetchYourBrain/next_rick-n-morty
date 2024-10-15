import { getAllCharacters, getCharacter, getMultipleCharacters } from "@/api";
import { Character } from "@/types/Character";
import { ApiInfo, ApiResponse } from "@/types/ApiResponse";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type stateProps = {
  characters: Character[];
  info: ApiInfo | null;
  hasError: boolean;
  isLoading: boolean;
};

const initialState: stateProps = {
  characters: [],
  info: null,
  hasError: false,
  isLoading: false,
};

export const fetchAllCharacters = createAsyncThunk(
  "characters/fetchAllCharacters",
  async (params: { query?: string; noCache?: boolean }) => {
    try {
      const response = await getAllCharacters(params.query, params.noCache);
      return response;
    } catch (error) {
      console.error("Failed to fetch characters:", error);
      throw error;
    }
  }
);

export const fetchCharacterData = createAsyncThunk(
  "characters/fetchCharacterData",
  async (id: string) => {
    try {
      const response = await getCharacter(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchMultipleCharacters = createAsyncThunk(
  "characters/fetchMultipleCharacters",
  async (ids: string[]) => {
    const response = await getMultipleCharacters(ids);
    return response;
  }
);

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCharacters.pending, (state) => {
        state.hasError = false;
        state.isLoading = true;
      })
      .addCase(
        fetchAllCharacters.fulfilled,
        (state, action: PayloadAction<ApiResponse<Character>>) => {
          state.hasError = false;
          state.isLoading = false;
          state.characters = action.payload.results;
          state.info = action.payload.info;
        }
      )
      .addCase(fetchAllCharacters.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
        state.characters = [];
        state.info = null;
      });
  },
});

export default characterSlice.reducer;
