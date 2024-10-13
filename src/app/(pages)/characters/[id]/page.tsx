import { fetchCharacterData } from "@/app/lib/character/characterSlice";
import { fetchMultipleEpisodes } from "@/app/lib/episode/episodeSlice";
import store from "@/app/lib/store";
import { Character } from "@/types/Character";
import { Episode } from "@/types/Episode";
import Link from "next/link";

const CharacterPage = async ({ params }: { params: { id: string } }) => {
  const response = await store.dispatch(fetchCharacterData(params.id));
  const character: Character = response.payload as Character; 

  const episodeIds = extractEpisodeIds(character.episode);
  const episodesResponse = await store.dispatch(fetchMultipleEpisodes(episodeIds as unknown as string[]));

  function extractEpisodeIds(episodes: string[]) {
    return episodes.map(episodeUrl => {
      const episodeId = episodeUrl.split('/').pop(); 
      return episodeId ? Number(episodeId) : null;
    });
  }

  const { name, status, species, gender, origin, location } = character;

  const episodes: Episode[] = Array.isArray(episodesResponse.payload)
    ? episodesResponse.payload
    : [episodesResponse.payload]; 

  const originLink = origin.name !== 'unknown' ? (
    <Link href={`/locations/${origin.url.split('/').pop()}`}>{origin.name}</Link>
  ) : (
    'unknown'
  );

  const locationLink = location.name !== 'unknown' ? (
    <Link href={`/locations/${location.url.split('/').pop()}`}>{location.name}</Link>
  ) : (
    'unknown'
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
      <h2>Episodes: {episodeCount} {episodeCount === 1 ? 'episode' : 'episodes'}</h2>
      <ul>
        {episodes.map(({ id, name }: Episode) => ( 
          <li key={id}>
            <Link href={`/episodes/${id}`}>{name}</Link>
          </li> 
        ))}
      </ul>
    </div>
  );
};

export default CharacterPage;
