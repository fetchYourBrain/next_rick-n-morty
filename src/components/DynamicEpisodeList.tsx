'use client';

import { EpisodeList } from "@/components/EpisodeList";
import { Episode } from "@/types/Episode";

interface DynamicEpisodeListProps {
  episodes: Episode[];
}

const DynamicEpisodeList: React.FC<DynamicEpisodeListProps> = ({ episodes }) => {
  return (
    <div className="flex flex-col gap-4 overflow-y-auto">
      <div className="grid grid-cols-[45%_25%_30%] text-white font-medium pb-1 border-b-[1px] border-light-primary dark:border-dark-primary">
        <div className="text-light-primary dark:text-dark-primary font-bold hidden md:flex">
          <h4>Title</h4>
        </div>
        <div className="text-light-primary dark:text-dark-primary font-bold hidden md:flex">
          <h4>Date</h4>
        </div>
        <div className="text-light-primary dark:text-dark-primary font-bold md:justify-end flex">
          <h4>Episode</h4>
        </div>
      </div>
      <EpisodeList episodes={episodes} />
    </div>
  );
};

export default DynamicEpisodeList;