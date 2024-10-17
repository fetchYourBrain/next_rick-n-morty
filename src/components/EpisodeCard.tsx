import { Episode } from "@/types/Episode";
import Link from "next/link";

interface EpisodeCardProps {
  key?: number;
  episodeInfo: Episode;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({ episodeInfo }) => {
  const { id, name, air_date, episode } = episodeInfo;

  const formatNameForURL = (name: string) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
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
      <article className="w-full bg-[#ffffff] dark:bg-[#262626] dark:text-dark-text text-light-text hover:font-bold hover:text-light-primary dark:hover:text-dark-primary transition-[font] ease-in p-2">
        <div className="flex flex-col md:grid md:grid-cols-[45%_25%_30%]">
          <div className="flex items-center gap-2">
            <p>{id}.</p>
            <p>{name}</p>
          </div>
          <div className="flex items-center justify-start">
            <p>{air_date}</p>
          </div>
          <div className="flex items-center md:justify-end">
            <p>{episode}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};
