'use client'
import { useEffect, useState } from "react";
import { useAppSelector } from "@/app/_lib/hooks";
import { getAllCharacters } from "@/api";
import { CharacterList } from "./CharacterList";
import { Character } from "@/types/Character";

const CharacterSearch = () => {
  const searchQuery = useAppSelector((state) => state.filter.searchQuery);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await getAllCharacters(searchQuery);
      setCharacters(response.results);
    };

    fetchCharacters();
  }, [searchQuery]);

  return <CharacterList characters={characters} />;
};

export default CharacterSearch;
