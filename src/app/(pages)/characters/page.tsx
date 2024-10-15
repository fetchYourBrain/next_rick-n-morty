import { fetchAllCharacters } from "@/app/lib/character/characterSlice";
import { CharacterList } from "@/app/components/CharacterList"; 
import store from "@/app/lib/store";
import { Character } from "@/types/Character";

const CharactersPage = async () => {
  const response = await store.dispatch(fetchAllCharacters('?page=42'));

  const characters: Character[] = Array.isArray(response.payload) ? response.payload : []; 
    
  return (
    <div>
      <CharacterList characters={characters} />
    </div>
  );
};

export default CharactersPage;
