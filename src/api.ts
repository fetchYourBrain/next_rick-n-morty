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

function get<T>(url: string, noCache = false): Promise<ApiResponse<T>> {
  const fullURL = BASE_URL + url;
  const options: RequestInit = noCache ? { cache: 'no-store' } : {};

  return fetch(fullURL, options).then((res) => res.json());
}

export const getAllCharacters = (query?: string, noCache = false) => 
  get<Character>(`/character${query && `?${query}`}`, noCache);
export const getAllEpisodes = (query?: string, noCache = false) => 
  get<Episode>(`/episode${query && `?${query}`}`, noCache);
export const getAllLocations = (query?: string, noCache = false) => 
  get<Location>(`/location${query && `?${query}`}`, noCache);

export const getEpisode = (id: string) => get<Episode>(`/episode/${id}`);
export const getLocation = (id: string) => get<Location>(`/location/${id}`);
export const getCharacter = (id: string) => get<Character>(`/character/${id}`);

export const getMultipleEpisodes = (ids: string[]) => get<Episode[]>(`/episode/${ids.join(',')}`);
export const getMultipleCharacters = (ids: string[]) => get<Character[]>(`/character/${ids.join(',')}`);
