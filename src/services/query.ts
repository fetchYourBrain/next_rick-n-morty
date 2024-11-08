import { getAllCharacters, getAllEpisodes, getAllLocations } from "@/api";
import { SearchResult } from "@/types/SearchResults";
import { Character } from "@/types/Character";
import { Episode } from "@/types/Episode";
import { Location } from "@/types/Location";

const searchItems = async <T extends SearchResult>(
  query: string, 
  fetchFunction: () => Promise<{ results: T[] }>
): Promise<T[]> => {
  const { results } = await fetchFunction();
  return results.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const searchCharacters = (query: string) =>
  searchItems<Character>(query, getAllCharacters);

export const searchEpisodes = (query: string) =>
  searchItems<Episode>(query, getAllEpisodes);

export const searchLocations = (query: string) =>
  searchItems<Location>(query, getAllLocations);