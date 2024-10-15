import { Character } from "./types/Character";
import { Episode } from "./types/Episode";
import { Location } from "./types/Location";

const BASE_URL = 'https://rickandmortyapi.com/api'

// function wait(delay: number): Promise<void> {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// }

function get<T>(url: string): Promise<T> {
  const fullURL = BASE_URL + url;

  return fetch(fullURL)
    .then((res) => res.json())
    .then((data) => data.results ? data.results : data);
}

export const getAllCharacters = (query?: string) => get<Character[]>(`/character${query && `?${query}`}`);
export const getAllEpisodes = (query?: string) => get<Episode[]>(`/episode${query && `?${query}`}`);
export const getAllLocations = (query?: string) => get<Location[]>(`/location${query && `?${query}`}`);

export const getEpisode = (id: string) => get<Episode>(`/episode/${id}`);
export const getLocation = (id: string) => get<Location>(`/location/${id}`);
export const getCharacter = (id: string) => get<Character>(`/character/${id}`);

export const getMultipleEpisodes = (ids: string[]) => get<Episode[]>(`/episode/${ids.join(',')}`);
export const getMultipleCharacters = (ids: string[]) => get<Character[]>(`/character/${ids.join(',')}`);
