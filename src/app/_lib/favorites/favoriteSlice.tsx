import { Character } from "@/types/Character";
import { Episode } from "@/types/Episode";
import { Location } from "@/types/Location";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavoritesState = {
  characters: Character[];
  episodes: Episode[];
  locations: Location[];
};

const initialState: FavoritesState = {
  characters: [],
  episodes: [],
  locations: [],
};

type FavoritePayload<T> = {
  item: T;
  type: "characters" | "episodes" | "locations";
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addItemToFavorites: (
      state,
      action: PayloadAction<FavoritePayload<Character | Episode | Location>>
    ) => {
      const { item, type } = action.payload;

      switch (type) {
        case "characters":
          if (!state.characters.some(character => character.id === item.id)) {
            state.characters.push(item as Character);
          }
          break;

        case "episodes":
          if (!state.episodes.some(episode => episode.id === item.id)) {
            state.episodes.push(item as Episode);
          }
          break;

        case "locations":
          if (!state.locations.some(location => location.id === item.id)) {
            state.locations.push(item as Location);
          }
          break;

        default:
          return;
      }

      localStorage.setItem("favorites", JSON.stringify(state));
    },

    removeItemFromFavorites: (
      state,
      action: PayloadAction<{ id: number; type: "characters" | "episodes" | "locations" }>
    ) => {
      const { id, type } = action.payload;

      switch (type) {
        case "characters":
          state.characters = state.characters.filter(item => item.id !== id);
          break;

        case "episodes":
          state.episodes = state.episodes.filter(item => item.id !== id);
          break;

        case "locations":
          state.locations = state.locations.filter(item => item.id !== id);
          break;

        default:
          return;
      }

      localStorage.setItem("favorites", JSON.stringify(state));
    },

    loadFavoritesFromStorage: (state) => {
      const storedItems = localStorage.getItem("favorites");
      if (storedItems) {
        const parsedItems = JSON.parse(storedItems);
        state.characters = parsedItems.characters || [];
        state.episodes = parsedItems.episodes || [];
        state.locations = parsedItems.locations || [];
      }
    },
  },
});
    
export const {
  addItemToFavorites,
  removeItemFromFavorites,
  loadFavoritesFromStorage,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
