import { getAllCharacters, getCharacter, getMultipleEpisodes } from "@/api";
import { EpisodeCard } from "@/components/EpisodeCard";
import { extractIds } from "@/helpers/extractId";
import { Episode } from "@/types/Episode";
import Link from "next/link";

export const revalidate = 60;
export const dynamic = 'force-static';


const CharacterDetails = async ({ params }: { params: { id: string } }) => {
  const character = await getCharacter(params.id);
  const episodeIds = extractIds(character.episode);
  const episodes: Episode[] = await getMultipleEpisodes(episodeIds);

  const { name, status, species, gender,  origin, location } = character; 


  const originLink =
    origin.name !== "unknown" ? (
      <Link href={`/locations/${origin.url.split("/").pop()}`}>
        {origin.name}
      </Link>
    ) : (
      "unknown"
    );

  const locationLink =
    location.name !== "unknown" ? (
      <Link href={`/locations/${location.url.split("/").pop()}`}>
        {location.name}
      </Link>
    ) : (
      "unknown"
    );

  const episodeCount = episodes.length;

  return (
    <div>
      <h1>{name}</h1>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
      <p>Origin: {originLink}</p>
      <p>Location: {locationLink}</p>
      <h2 className="text-xl font-bold mb-8">
        Episodes: {episodeCount} {episodeCount === 1 ? "episode" : "episodes"}
      </h2>
      <ul className="flex flex-col gap-4">
        {episodes ? (episodes.map((episode: Episode) => (
          <li key={episode.id}>
            <EpisodeCard episodeInfo={episode} />
          </li>
        ))) : (<>There is no episodes</>)}
      </ul>
    </div>
  );
};

export async function generateStaticParams() {
  const response = await getAllCharacters();
  return response.results.map((character) => ({
    id: character.id.toString(),
  }));
}

export default CharacterDetails;
