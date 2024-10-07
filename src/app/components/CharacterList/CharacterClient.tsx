'use client'
import { Character } from "@/types/Character";
import { CharacterCard } from "../CharacterCard";
import { useAppSelector } from "@/app/lib/hooks";

interface Props {
    characters: Character[];
}

const CharacterClientList:React.FC<Props> = ({ characters }) => {
    const sortField = useAppSelector((state) => state.filter.sortField)
  return (
    <>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </>
  );
};

export default CharacterClientList;
