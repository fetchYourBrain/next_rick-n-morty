import { Metadata } from "next";
import { createMetaData } from "@/helpers/metadata";
import { PaginationComponent } from "@/components/Pagination";
import DynamicLocationList from "@/components/DynamicLocationList"; 
import { getAllLocations } from "@/api";

export const metadata: Metadata = createMetaData({
  title: "Locations",
  description:
    "Discover the diverse and bizarre locations from across the multiverse of Rick and Morty. From Earth to distant dimensions—explore every corner!",
  url: "/locations",
});

export const revalidate = 60;
export const dynamic = 'force-static';

const LocationsPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;

  const locations = await getAllLocations(currentPage);
  const info = locations.info;

  return (
    <div>
      <DynamicLocationList locations={locations.results} />
      <PaginationComponent info={info} basePath="/locations" />
    </div>
  );
};

export default LocationsPage;
