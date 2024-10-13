import { fetchMultipleCharacters } from "@/app/lib/character/characterSlice";
import { fetchEpisodeData } from "@/app/lib/episode/episodeSlice";
import store from "@/app/lib/store";
import { Character } from "@/types/Character";
import { Episode } from "@/types/Episode";
import Link from "next/link";

const EpisodePage = async ({ params }: { params: { id: string } }) => {
  const response = await store.dispatch(fetchEpisodeData(params.id));
  const episode: Episode = response.payload as Episode; 

  const characterIds = extractCharacterNumbers(episode.characters);
  const charactersResponse = await store.dispatch(fetchMultipleCharacters(characterIds as unknown as string[]));
  const characters = charactersResponse.payload as Character[];

  function extractCharacterNumbers(characters: string[]) {
    return characters.map(characterUrl => {
      const characterId = characterUrl.split('/').pop(); 
      return characterId ? Number(characterId) : null;
    });
  }

  const { name } = episode;
  const characterCount = characters.length;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{characterCount} {characterCount === 1 ? 'character' : 'characters'}</h2> 
      <ul>
        {characters.map((character: Character) => (
          <li key={character.id}>
            <Link href={`/characters/${character.id}`}>{character.name}</Link> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodePage;
