'use client';
import { Location } from "@/types/Location";
import { LocationCard } from "./LocationCard";

interface LocationListProps {
  locations: Location[];
}

export const LocationList = ({ locations }: LocationListProps) => {
  if (!Array.isArray(locations)) {
    return <div>No locations found.</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      {locations.length === 0 ? (
        <div>No locations available.</div>
      ) : (
        locations.map((location) => (
            <LocationCard key={location.id} location={location} />
        ))
      )}
    </div>
  );
};
