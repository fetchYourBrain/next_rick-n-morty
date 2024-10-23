import { ApiResponse } from "./types/ApiResponse";
import { Character } from "./types/Character";
import { Episode } from "./types/Episode";
import { Location } from "./types/Location";

const BASE_URL = 'https://rickandmortyapi.com/api'

// function wait(delay: number): Promise<void> {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// }

export function get<T>(url: string): Promise<T> {
  const fullURL = BASE_URL + url;

  return fetch(fullURL, { cache: 'no-store' }).then((res) => res.json());
}

export const getAllCharacters = (query = ' ') => 
  get<ApiResponse<Character>>(`/character${`${query}`}`);

export const getAllEpisodes = (page: number = 1) => 
  get<ApiResponse<Episode>>(`/episode?page=${page}`);

export const getAllLocations = (page: number = 1) => 
  get<ApiResponse<Location>>(`/location?page=${page}`);

export const getEpisode = (id: string) => get<Episode>(`/episode/${id}`);

export const getLocation = (id: string) => get<Location>(`/location/${id}`);

export const getCharacter = (id: string) => get<Character>(`/character/${id}`);

export const getMultipleEpisodes = (ids: string[]) => get<Episode[]>(`/episode/${ids.join(',')}`);

export const getMultipleCharacters = (ids: string[]) => get<Character[]>(`/character/${ids.join(',')}`);
