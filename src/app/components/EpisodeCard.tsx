import { Episode } from '@/types/Episode';
import Link from 'next/link';

interface EpisodeCardProps {
  key?: number;
  episodeInfo: Episode;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({ episodeInfo }) => {
  const {id, name, air_date, episode } = episodeInfo;

  const formatNameForURL = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  const formatEpisodeSlug = (episode: string) => {
    const seasonStr = episode.substring(1, 3); 
    const episodeStr = episode.substring(4, 6);
    
    return `season-${seasonStr}-episode-${episodeStr}`;
  };

  const formattedSlug = formatNameForURL(name);
  const episodeSlug = formatEpisodeSlug(episode);

  return (
    <Link href={`/episodes/${id}?${episodeSlug}?${formattedSlug}`}>
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
