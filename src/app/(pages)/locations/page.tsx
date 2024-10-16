import { fetchAllLocations } from "@/app/lib/location/locationSlice";
import { LocationList } from "@/app/components/LocationList"; 
import { Pagination } from "@/app/components/Pagination";
import store from "@/app/lib/store";
import { Location } from "@/types/Location";
import { ApiResponse } from "@/types/ApiResponse";
import { PayloadAction } from "@reduxjs/toolkit";
import { PageJumper } from "@/app/components/PageJumper";
import { Metadata } from "next";
import { createMetaData } from "@/helpers/metadata";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = createMetaData({
  title: "Locations",
  description:
    "Discover the diverse and bizarre locations from across the multiverse of Rick and Morty. From Earth to distant dimensions—explore every corner!",
  url: "/locations",
});

const LocationsPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const currentPage = Number(searchParams.page) || 1;
  const response = await store.dispatch(fetchAllLocations({ 
    query: `page=${currentPage}`, 
    noCache: true 
  })) as PayloadAction<ApiResponse<Location>>;

  const locations: Location[] = response.payload.results;
  const info = response.payload.info;
    
  return (
    <div>
      <h2 className="text-white font-mono text-3xl md:text-4xl lg:text-5xl mb-4">
        Database of locations:
      </h2>
      <PageJumper info={info} currentPage={currentPage} basePath="/locations" />  
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
      <Pagination info={info} currentPage={currentPage} basePath="/locations" />
    </div>
  );
};
  
export default LocationsPage;
