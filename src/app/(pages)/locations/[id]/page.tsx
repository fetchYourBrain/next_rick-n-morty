import { getAllLocations, getLocation, getMultipleCharacters } from "@/api";
import { CharacterCard } from "@/components/CharacterCard";
import { extractIds } from "@/helpers/extractId";
import { Character } from "@/types/Character";

const LocationPage = async ({ params }: { params: { id: string } }) => {
  const location = await getLocation(params.id);
  const residentsIds = extractIds(location.residents);

  const residentsResponse = await getMultipleCharacters(residentsIds);

  const residents: Character[] = Array.isArray(residentsResponse)
    ? residentsResponse
    : [residentsResponse];

  const { name, type, dimension } = location;

  const residentsCount = residents.length;

  return (
    <div className="relative">
    <div className="sticky top-[82px] z-[1] bg-light-card-bg dark:bg-dark-card-bg mb-10 flex flex-col gap-3 p-4 border-b-2 border-light-divider dark:border-dark-divider  font-bold ">
      <h2 className="text-light-primary dark:text-dark-primary text-3xl">{name}</h2>
      
      <p>{type}</p>

      <div className="flex flex-col gap-3 md:flex-row md:justify-between">
        <p>{dimension === 'unknown' ? 'Unknown Dimension' : dimension}</p>
        <p className="text-xl font-bold mb-8">
          Residents: {residentsCount < 2 ? "1" : `${residentsCount} `} resident{residentsCount !== 1 && 's'}
        </p>
      </div>
    </div>

    <div className="relative z-0">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
        {residents.map((resident: Character) => (
          <li key={resident.id}>
            <CharacterCard character={resident} />
          </li>
        ))}
      </ul>
      </div>
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
