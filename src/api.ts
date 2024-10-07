import { Character } from "./types/Character";

const BASE_URL = 'https://rickandmortyapi.com/api'

// function wait(delay: number): Promise<void> {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// }

function get<T>(url: string): Promise<T> {
  const fullURL = BASE_URL + url

  return fetch(fullURL)
    .then((res) => res.json()).then((data) => data.results);
}

export const getAllCharacters = () => get<Character[]>("/character");