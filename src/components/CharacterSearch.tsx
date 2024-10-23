'use client'

import { useEffect, useState } from "react";
import { useAppSelector } from "@/app/_lib/hooks";
import { getAllCharacters } from "@/api";
import { CharacterList } from "./CharacterList";
import { Character } from "@/types/Character";
import { useSearchParams } from 'next/navigation';

const CharacterSearch = () => {
  const searchQuery = useAppSelector((state) => state.filter.searchQuery);
  const [characters, setCharacters] = useState<Character[]>([]);
  const searchParams = useSearchParams();
  
  const currentPage = searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1;

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await getAllCharacters(`?name=${searchQuery}&page=${currentPage}`);
      setCharacters(response.results);
    };

    fetchCharacters();
  }, [searchQuery, currentPage]);

  return <CharacterList characters={characters} />;
};

export default CharacterSearch;