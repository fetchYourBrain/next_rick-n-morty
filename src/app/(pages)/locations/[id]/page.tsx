import { getAllLocations, getLocation, getMultipleCharacters } from "@/api";
import { CharacterCard } from "@/components/CharacterCard";
import { extractIds } from "@/helpers/extractId";
import { Character } from "@/types/Character";

export const revalidate = 60;
export const dynamic = 'force-static';

const LocationPage = async ({ params }: { params: { id: string } }) => {
  const location = await getLocation(params.id);
  const residentsIds = extractIds(location.residents);

  const residentsResponse = await getMultipleCharacters(residentsIds);

  const residents: Character[] = Array.isArray(residentsResponse)
    ? residentsResponse
    : [residentsResponse];

  const residentsCount = residents.length;

  return (
    <div>
      <h1 className="text-2xl font-bold">{location.name}</h1>
      <h2 className="text-xl font-bold mb-8">
        Residents: {residentsCount < 2 ? "1" : `${residentsCount} `} resident{residentsCount !== 1 && 's'}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
        {residents.map((resident: Character) => (
          <li key={resident.id}>
            <CharacterCard character={resident} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function generateStaticParams() {
  const response = await getAllLocations();
  return response.results.map((location) => ({
    id: location.id.toString(),
  }));
}


export default LocationPage;
