import { Location } from '@/types/Location';
import Link from 'next/link';

interface LocationCardProps {
  key?: number;
  location: Location;
}

export const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  const {id, name, type, dimension } = location;  

  const formatNameForUrl = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  const formattedSlug = formatNameForUrl(name);

  return (
    <Link href={`/locations/${id}?${formattedSlug}`}>
      <article className="w-full bg-[#ffffff] dark:bg-[#262626] light-text hover:font-bold hover:text-light-primary dark:hover:text-dark-primary transition-[font] ease-in p-2">
        <div className="flex flex-col md:grid md:grid-cols-[45%_25%_30%]">
          <div className="flex items-center gap-2">
              <p>{id}.</p>
              <p><span className="md:hidden inline">Name:</span> {name}</p>
          </div>

          <div className=""> 
              <p><span className="md:hidden inline">Type:</span> {type}</p>
          </div>

          <div className="flex items-center md:justify-end">
              <p><span className="md:hidden inline">Dimension:</span> {dimension === 'unknown' ? 'Unknown Dimension' : dimension}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};
