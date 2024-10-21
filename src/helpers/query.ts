import { getAllCharacters, getAllEpisodes, getAllLocations } from "@/api";

export const searchCharacters = async (query: string) => {
  const { results } = await getAllCharacters();
  return results.filter((character) =>
    character.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const searchEpisodes = async (query: string) => {
  const { results } = await getAllEpisodes();
  return results.filter((episode) =>
    episode.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const searchLocations = async (query: string) => {
  const { results } = await getAllLocations();
  return results.filter((location) =>
    location.name.toLowerCase().includes(query.toLowerCase())
  );
};