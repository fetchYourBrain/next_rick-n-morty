import { getAllEpisodes, getEpisode, getMultipleCharacters } from "@/api";
import { CharacterCard } from "@/components/CharacterCard";
import { extractIds } from "@/helpers/extractId";
import { Character } from "@/types/Character";

const EpisodePage = async ({ params }: { params: { id: string } }) => {
  const episodeInfo = await getEpisode(params.id);
  const characterIds = extractIds(episodeInfo.characters);
  const characters: Character[] = await getMultipleCharacters(characterIds);

  const { name, air_date, episode } = episodeInfo;
  const characterCount = characters.length;

  return (
    <div className="relative">
      <div className="sticky top-[82px] z-[1] bg-light-card-bg dark:bg-dark-card-bg mb-10 flex flex-col gap-3 p-4 border-b-2 border-light-divider dark:border-dark-divider  font-bold ">
        <h2 className="text-light-primary dark:text-dark-primary text-3xl">{name}</h2>
        
        <p>{air_date}</p>
        <div className="flex flex-col md:flex-row md:justify-between gap-2">
          <p>{episode}</p>

          <p className="font-normal">{characterCount} {characterCount === 1 ? "character" : "characters"}</p>
        </div>
      </div>

      <div className="relative z-0">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
          {characters.map((character: Character) => (
            <li key={character.id}>
              <CharacterCard character={character} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const response = await getAllEpisodes();
  return response.results.map((episode) => ({
    id: episode.id.toString(),
  }));
}

export default EpisodePage;
