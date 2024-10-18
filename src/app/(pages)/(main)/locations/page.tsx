import { Metadata } from "next";
import { createMetaData } from "@/helpers/metadata";
import { Pagination } from "@/components/Pagination";
import { LocationList } from "@/components/LocationList";
import { getAllLocations } from "@/api";

export const metadata: Metadata = createMetaData({
  title: "Locations",
  description:
    "Discover the diverse and bizarre locations from across the multiverse of Rick and Morty. From Earth to distant dimensions—explore every corner!",
  url: "/locations",
});

const LocationsPage = async () => {
  const currentPage = 1;
  const locations = await getAllLocations(currentPage);
  const info = locations.info;

  return (
    <div>
      <div className="flex flex-col gap-4 overflow-y-auto">
        <div className="grid grid-cols-[45%_25%_30%] text-white font-medium pb-1 border-b-[1px] border-light-primary dark:border-dark-primary">
          <div className="text-light-primary dark:text-dark-primary font-bold">
            <h4>Location</h4>
          </div>
          <div className="text-light-primary dark:text-dark-primary font-bold hidden md:flex">
            <h4>Type</h4>
          </div>
          <div className="md:flex items-center justify-end text-light-primary dark:text-dark-primary font-bold hidden">
            <h4>Dimension</h4>
          </div>
        </div>
        <LocationList locations={locations.results} />
      </div>
      <Pagination info={info} currentPage={currentPage} basePath="/locations" />
    </div>
  );
};

export default LocationsPage;
