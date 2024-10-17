import { fetchMultipleCharacters } from "@/app/lib/character/characterSlice";
import { fetchEpisodeData } from "@/app/lib/episode/episodeSlice";
import store from "@/app/lib/store";
import { CharacterCard } from "@/components/CharacterCard";
import { Character } from "@/types/Character";
import { Episode } from "@/types/Episode";
import { extractIds } from "@/utils/idExtractor";
import Link from "next/link";

const EpisodePage = async ({ params }: { params: { id: string } }) => {
  const response = await store.dispatch(fetchEpisodeData(params.id));
  const episodeInfo: Episode = response.payload as Episode; 

  const characterIds = extractIds(episodeInfo.characters);
  const charactersResponse = await store.dispatch(fetchMultipleCharacters(characterIds as unknown as string[]));
  const characters = charactersResponse.payload as Character[];

  const { name, air_date, episode } = episodeInfo;

  return (
    <div className="relative">
      <div className="sticky top-[82px] z-[1] bg-light-card-bg dark:bg-dark-card-bg mb-10 flex flex-col gap-3 p-4 border-b-2 border-light-divider dark:border-dark-divider  font-bold ">
        <h2 className="text-light-primary dark:text-dark-primary text-3xl">{name}</h2>
        <p>{air_date}</p>
        <div className="flex flex-col md:flex-row md:justify-between gap-2">
          <p>{episode}</p>
          <p className="font-normal">{characters.length} {characters.length === 1 ? 'character' : 'characters'}</p>
        </div>
      </div>

      <div className="relative z-0">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
          {characters.map((character: Character) => (
            <li key={character.id}>
              <Link href={`/characters/${character.id}`}><CharacterCard character={character} /></Link> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EpisodePage;
