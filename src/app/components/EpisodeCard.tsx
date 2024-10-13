import { Episode } from '@/types/Episode';
import Link from 'next/link';

interface EpisodeCardProps {
  key?: number;
  episodeInfo: Episode;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({ episodeInfo }) => {
  const {id, name, air_date, episode } = episodeInfo;

  return (
    <Link href={`/episodes/${id}`}>
      <article className="w-full hover:bg-[#363A3A] text-white hover:text-[#39FF14] p-2">
        <div className="grid grid-cols-[45%_25%_30%]">
          <div className="flex items-center gap-2">
            <p>{id}.</p>
            <p>{name}</p>
          </div>
          <div className="flex items-center justify-start"> 
            <p>{air_date}</p>
          </div>
          <div className="flex items-center justify-end">
            <p>{episode}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};
