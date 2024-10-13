import { getAllCharacters, getCharacter, getMultipleCharacters } from "@/api";
import { Character } from "@/types/Character";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type stateProps = {
  characters: Character[];
  hasError: boolean;
  isLoading: boolean;
};

const initialState: stateProps = {
  characters: [],
  hasError: false,
  isLoading: false,
};

export const fetchAllCharacters = createAsyncThunk(
  "characters/fetchAllCharacters",
  async () => {
    try {
      const response = await getAllCharacters();
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
        (state, action: PayloadAction<Character[]>) => {
          state.hasError = false;
          state.isLoading = false;
          state.characters = action.payload;
        }
      )
      .addCase(fetchAllCharacters.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
        state.characters = [];
      });
  },
});

export default characterSlice.reducer;
