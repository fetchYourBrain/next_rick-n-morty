import { fetchAllCharacters } from "@/app/lib/character/characterSlice";
import store from "@/app/lib/store";
import { Character } from "@/types/Character";
import { ApiResponse } from "@/types/ApiResponse";
import { PayloadAction } from "@reduxjs/toolkit";
import { CharacterList } from "@/components/CharacterList";
import { Pagination } from "@/components/Pagination";
import { Metadata } from "next";
import { createMetaData } from "@/helpers/metadata";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = createMetaData({
  title: "Characters",
  description:
    "Explore the wild and wacky multiverse of Rick and Morty through its iconic characters. Get to know your favorite heroes, villains, and creatures!",
  url: "/characters",
});

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
