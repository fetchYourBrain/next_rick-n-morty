import { fetchAllEpisodes } from "@/app/lib/episode/episodeSlice";
import { EpisodeList } from "@/app/components/EpisodeList";
import store from "@/app/lib/store";
import { Episode } from "@/types/Episode";

const EpisodesPage = async () => {
  const response = await store.dispatch(fetchAllEpisodes());

  const episodes: Episode[] = Array.isArray(response.payload)
    ? response.payload
    : [];

  return (
    <div>
      <h2 className="text-white font-mono text-3xl md:text-4xl lg:text-5xl mb-4">
        Database of episodes:
      </h2>
      <div className="flex flex-col gap-4 overflow-y-auto">
        <div className="grid grid-cols-[45%_25%_30%] text-white font-medium pb-1 border-b-[1px] border-[#39FF14]">
          <div className="flex items-center gap-2">
            <h4>Episode</h4>
          </div>
          <div className="flex items-center justify-start">
            <h4>Date</h4>
          </div>
          <div className="flex items-center justify-end">
            <h4>Episode</h4>
          </div>
        </div>
        <EpisodeList episodes={episodes} />
      </div>
    </div>
  );
};

export default EpisodesPage;
