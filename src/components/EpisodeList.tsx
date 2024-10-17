'use client';
import { Episode } from "@/types/Episode";
import { EpisodeCard } from "./EpisodeCard";

interface EpisodeListProps {
  episodes: Episode[];
}

export const EpisodeList = ({ episodes }: EpisodeListProps) => {
  if (!Array.isArray(episodes)) {
    return <div>No episodes found.</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      {episodes.length === 0 ? (
        <div>No episodes available.</div>
      ) : (
        episodes.map((episode) => (
          <EpisodeCard key={episode.id} episodeInfo={episode} />
        ))
      )}
    </div>
  );
};
