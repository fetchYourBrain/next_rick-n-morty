import { getEpisode, getMultipleCharacters } from "@/api";
import { CharacterCard } from "@/components/CharacterCard";
import { extractIds } from "@/helpers/extractId";
import { Character } from "@/types/Character";

const EpisodePage = async ({ params }: { params: { id: string } }) => {
  const episode = await getEpisode(params.id);
  const characterIds = extractIds(episode.characters);

  const characters: Character[] = await getMultipleCharacters(characterIds);

  const { name } = episode;
  const characterCount = Array.isArray(characters) ? characters.length : 1;

  return (
    <div>
      <h1 className="text-2xl font-bold">{name}</h1>
      <h2 className="text-xl font-bold mb-8">
        {characterCount} {characterCount === 1 ? "character" : "characters"}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
        {characters.map((character: Character) => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodePage;
