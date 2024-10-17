import { fetchCharacterData } from "@/app/lib/character/characterSlice";
import { fetchMultipleEpisodes } from "@/app/lib/episode/episodeSlice";
import store from "@/app/lib/store";
import { EpisodeCard } from "@/components/EpisodeCard";
import { Character } from "@/types/Character";
import { Episode } from "@/types/Episode";
import { extractIds } from "@/utils/idExtractor";
import Link from "next/link";
import Image from 'next/image';
import { getAllCharacters } from "@/api";

export async function generateStaticParams() {
  const characters = await getAllCharacters();

  return characters.results?.map(character => ({
    id: character.id.toString(),
  })) || [];
}

const CharacterPage = async ({ params }: { params: { id: string } }) => {
  const response = await store.dispatch(fetchCharacterData(params.id));
  const character: Character = response.payload as Character; 

  const episodeIds = extractIds(character.episode);
  const episodesResponse = await store.dispatch(fetchMultipleEpisodes(episodeIds as unknown as string[]));

  const episodes: Episode[] = Array.isArray(episodesResponse.payload)
    ? episodesResponse.payload
    : [episodesResponse.payload]; 

  const { image, name, status, species, gender, origin, location } = character;

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

  return (
    <div>
      <div className="bg-light-card-bg dark:bg-dark-card-bg mb-4 flex flex-col gap-2 p-4 border-b-2 border-light-divider dark:border-dark-divider font-bold ">
        <h2 className="text-light-primary dark:text-dark-primary text-3xl">{name}</h2>

        <div className="flex flex-col gap-2 md:flex-row">
          <div className="mb-2 md:mb-0 md:mr-2">
            <Image 
              src={image}
              alt={name} 
              width={250} 
              height={250}
              className="pb-4 border-b-2 md:pb-0 md:border-b-0 md:pr-4 md:border-r-2 border-light-divider dark:border-dark-divider"
            />
          </div>

          <div className="flex flex-col gap-2 justify-between">
            <p><span className="font-normal">Status:</span> {status}</p> 

            <p><span className="font-normal">Species:</span> {species}</p>

            <p><span className="font-normal">Gender:</span> {gender}</p>

            <p><span className="font-normal">Origin:</span> {originLink}</p>

            <p><span className="font-normal">Location:</span> {locationLink}</p>

            <p className="font-medium">Was in {episodes.length} {episodes.length === 1 ? 'episode' : 'episodes'}</p>
          </div>
        </div>
      </div>

      <div className="relative z-0 mt-4">
        <ul className="flex flex-col gap-4">
          {episodes.map((episode: Episode) => ( 
            <li key={episode.id}>
              <EpisodeCard episodeInfo={episode} />
            </li> 
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterPage;
