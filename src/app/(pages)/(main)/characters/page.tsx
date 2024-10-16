import { fetchAllCharacters } from "@/app/lib/character/characterSlice";
import { CharacterList } from "@/app/components/CharacterList"; 
import { Pagination } from "@/app/components/Pagination";
import store from "@/app/lib/store";
import { Character } from "@/types/Character";
import { ApiResponse } from "@/types/ApiResponse";
import { PayloadAction } from "@reduxjs/toolkit";

export const dynamic = 'force-dynamic';

const CharactersPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const currentPage = Number(searchParams.page) || 1;
  const response = await store.dispatch(fetchAllCharacters({ 
    query: `page=${currentPage}`, 
    noCache: true 
  })) as PayloadAction<ApiResponse<Character>>;

  const characters: Character[] = response.payload.results;
  const info = response.payload.info;

  return (
    <div>
      <CharacterList characters={characters} />
      <Pagination info={info} currentPage={currentPage} basePath="/characters" />
    </div>
  );
};

export default CharactersPage;
