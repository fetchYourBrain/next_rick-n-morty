import { fetchMultipleCharacters } from "@/app/lib/character/characterSlice";
import { fetchLocationData } from "@/app/lib/location/locationSlice";
import store from "@/app/lib/store";
import { CharacterCard } from "@/components/CharacterCard";
import { Character } from "@/types/Character";
import { Location } from "@/types/Location";
import { extractIds } from "@/utils/idExtractor";

const LocationPage = async ({ params }: { params: { id: string } }) => {
  const response = await store.dispatch(fetchLocationData(params.id));
  const location: Location = response.payload as Location; 

  const residentsIds = extractIds(location.residents);
  const residentsResponse = await store.dispatch(fetchMultipleCharacters(residentsIds as unknown as string[]));
  const residents: Character[] = Array.isArray(residentsResponse.payload) ? residentsResponse.payload : [residentsResponse.payload];

  const { name, type, dimension } = location;

  return (
    <div className="relative">
      <div className="sticky top-[82px] z-[1] bg-light-card-bg dark:bg-dark-card-bg mb-10 flex flex-col gap-3 p-4 border-b-2 border-light-divider dark:border-dark-divider  font-bold ">
        <h2 className="text-light-primary dark:text-dark-primary text-3xl">{name}</h2>
        
        <p>{type}</p>

        <div className="flex flex-col gap-3 md:flex-row md:justify-between">
          <p>{dimension === 'unknown' ? 'Unknown Dimension' : dimension}</p>
          <p className="font-normal">{residents.length} {residents.length === 1 ? 'yeresident' : 'residents'}</p>
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

export default LocationPage;
