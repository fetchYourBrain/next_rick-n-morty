import { Location } from '@/types/Location';
import Link from 'next/link';

interface LocationCardProps {
  key?: number;
  location: Location;
}

export const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  const {id, name, type, dimension } = location;  

  return (
    <Link href={`/locations/${id}`}>
      <article className="w-full hover:bg-[#363A3A] text-white hover:text-[#39FF14] p-2">
        <div className="grid grid-cols-[45%_25%_30%]">
          <div className="flex items-center gap-2">
              <p>{id}.</p>
              <p>{name}</p>
          </div>

          <div className="flex items-center justify-start"> 
              <p>{type}</p>
          </div>

          <div className="flex items-center justify-end">
              <p>{dimension === 'unknown' ? 'Unknown Dimension' : dimension}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};
