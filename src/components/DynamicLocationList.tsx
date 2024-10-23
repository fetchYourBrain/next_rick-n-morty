'use client';

import { LocationList } from "./LocationList";
import { Location } from "@/types/Location";

interface DynamicLocationListProps {
  locations: Location[];
}

const DynamicLocationList: React.FC<DynamicLocationListProps> = ({ locations }) => {
  return (
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
      <LocationList locations={locations} />
    </div>
  );
};

export default DynamicLocationList;