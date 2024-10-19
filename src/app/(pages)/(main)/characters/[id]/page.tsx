import { getAllCharacters, getCharacter, getMultipleEpisodes } from "@/api";
import { EpisodeCard } from "@/components/EpisodeCard";
import MakeFavorite from "@/components/MakeFavorite";
import { extractIds } from "@/helpers/extractId";
import { Episode } from "@/types/Episode";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60;
export const dynamic = "force-static";

const CharacterDetails = async ({ params }: { params: { id: string } }) => {
  const character = await getCharacter(params.id);
  const episodeIds = extractIds(character.episode);
  const episodesResponse: Episode[] = await getMultipleEpisodes(episodeIds);

  const episodes: Episode[] = Array.isArray(episodesResponse)
    ? episodesResponse
    : [episodesResponse];

  const { name, image, status, species, gender, origin, location } = character;

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
      <div className=" bg-light-card-bg dark:bg-dark-card-bg mb-4 flex flex-col gap-2 p-4 border-b-2 border-light-divider dark:border-dark-divider font-bold ">
        <h2 className="self-center text-light-primary dark:text-dark-primary text-3xl">
          {name}
        </h2>

        <div className="flex flex-col sm:flex-row">
          <div className="self-center">
            <Image src={image} alt={name} width={250} height={250} />
            <MakeFavorite item={character} type="characters" />
          </div>

          <div className="flex flex-col gap-2 justify-between w-full pt-4 mt-4 sm:mt-0 sm:ml-4 border-t-2 sm:pt-0 sm:border-t-0 sm:pl-4 sm:border-l-2 border-light-primary dark:border-dark-primary">
            <div className="flex flex-row justify-between">
              <p className="font-normal">Status: </p>
              <p>{status}</p>
            </div>

            <div className="flex flex-row justify-between">
              <p className="font-normal">Species: </p>
              <p>{species}</p>
            </div>

            <div className="flex flex-row justify-between">
              <p className="font-normal">Gender: </p>
              <p>{gender}</p>
            </div>

            <div className="flex flex-row justify-between">
              <p className="font-normal">Origin: </p>
              <p>{originLink}</p>
            </div>

            <div className="flex flex-row justify-between">
              <p className="font-normal">Location: </p>
              <p>{locationLink}</p>
            </div>

            <p className="font-medium text-center sm:text-right">
              Was in {episodeCount}{" "}
              {episodeCount === 1 ? "episode" : "episodes"}
            </p>
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

export async function generateStaticParams() {
  const response = await getAllCharacters();
  return response.results.map((character) => ({
    id: character.id.toString(),
  }));
}

export default CharacterDetails;
