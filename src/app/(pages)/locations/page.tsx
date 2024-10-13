import { fetchAllLocations } from "@/app/lib/location/locationSlice";
import { LocationList } from "@/app/components/LocationList"; 
import store from "@/app/lib/store";
import { Location } from "@/types/Location";

const LocationsPage = async () => {
  const response = await store.dispatch(fetchAllLocations());

  const locations: Location[] = Array.isArray(response.payload) ? response.payload : []; 
    
  return (
    <div>
    <h2 className="text-white font-mono text-3xl md:text-4xl lg:text-5xl mb-4">
      Database of locations:
    </h2>
    <div className="flex flex-col gap-4 overflow-y-auto">
      <div className="grid grid-cols-[45%_25%_30%] text-white font-medium pb-1 border-b-[1px] border-[#39FF14]">
        <div className="flex items-center gap-2">
          <h4>Location</h4>
        </div>
        <div className="flex items-center justify-start">
          <h4>Type</h4>
        </div>
        <div className="flex items-center justify-end">
          <h4>Dimension</h4>
        </div>
      </div>
        <LocationList locations={locations} />
      </div>
    </div>
  );
};
  
export default LocationsPage;
