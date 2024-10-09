'use client';
import { Character } from "@/types/Character";
import { CharacterCard } from "./CharacterCard";

interface CharacterListProps {
  characters: Character[];
}

export const CharacterList = ({ characters }: CharacterListProps) => {
  if (!Array.isArray(characters)) {
    return <div>No characters found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:items-center lg:grid-cols-3 gap-8">
      {characters.length === 0 ? (
        <div>No characters available.</div>
      ) : (
        characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))
      )}
    </div>
  );
};
