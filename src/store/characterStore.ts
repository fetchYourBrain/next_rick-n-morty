import { makeAutoObservable } from 'mobx';
import { Character } from '@/types/character';

class CharacterStore {
  characters: Character[] = [];
  currentPage = 1;
  totalPages = 1;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setCharacters(characters: Character[]) {
    this.characters = [...this.characters, ...characters];
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }

  setTotalPages(pages: number) {
    this.totalPages = pages;
  }

  setLoading(loading: boolean) {
    this.isLoading = loading;
  }

  async fetchCharacters() {
    this.setLoading(true);
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.currentPage}`);
      const data = await response.json();
      this.setCharacters(data.results);
      this.setTotalPages(data.info.pages);
      this.setCurrentPage(this.currentPage + 1);
    } catch (error) {
      console.error('Ошибка при загрузке персонажей:', error);
    } finally {
      this.setLoading(false);
    }
  }
}

export const characterStore = new CharacterStore();