import { fetchMultipleCharacters } from "@/app/lib/character/characterSlice";
import { fetchLocationData } from "@/app/lib/location/locationSlice";
import store from "@/app/lib/store";
import { CharacterCard } from "@/components/CharacterCard";
import { Character } from "@/types/Character";
import { Location } from "@/types/Location";
import Link from "next/link";

const LocationPage = async ({ params }: { params: { id: string } }) => {
  const response = await store.dispatch(fetchLocationData(params.id));
  const location: Location = response.payload as Location; 

  const residentsIds = extractResidentsIds(location.residents);
  const residentsResponse = await store.dispatch(fetchMultipleCharacters(residentsIds as unknown as string[]));
  const residents: Character[] = Array.isArray(residentsResponse.payload) ? residentsResponse.payload : [residentsResponse.payload];

  function extractResidentsIds(residents: string[]) {
    return residents.map(residentUrl => {
      const residentId = residentUrl.split('/').pop(); 
      return residentId ? Number(residentId) : null;
    });
  }

  const residentsCount = residents.length;

  return (
    <div>
      <h1 className="text-2xl font-bold">{location.name}</h1>
      <h2 className="text-xl font-bold mb-8">Residents: {residentsCount} {residentsCount === 1 ? 'resident' : 'residents'}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
        {residents.map((resident: Character) => (
          <li key={resident.id}>
            <Link href={`/characters/${resident.id}`}><CharacterCard character={resident} /></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationPage;
