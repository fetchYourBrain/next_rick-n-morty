import { EpisodeList } from "@/components/EpisodeList";
import { Pagination } from "@/components/Pagination";
import { createMetaData } from "@/helpers/metadata";
import { Metadata } from "next";
import { getAllEpisodes } from "@/api";


export const metadata: Metadata = createMetaData({
  title: "Episodes",
  description:
    "Dive into the hilarious and unpredictable episodes of Rick and Morty. Discover your favorites!",
  url: "/episodes",
});



const EpisodesPage = async () => {
  const currentPage = 1;
  const episodes = await getAllEpisodes(currentPage) 
  const info = episodes.info;

  return (
    <div>
      <div className="flex flex-col gap-4 overflow-y-auto">
        <div className="grid grid-cols-[45%_25%_30%] text-white font-medium pb-1 border-b-[1px] border-light-primary dark:border-dark-primary">
          <div className=" text-light-primary dark:text-dark-primary font-bold hidden md:flex">
            <h4>Title</h4>
          </div>
          <div className="text-light-primary dark:text-dark-primary font-bold hidden md:flex">
            <h4>Date</h4>
          </div>
          <div className="text-light-primary dark:text-dark-primary font-bold md:justify-end flex">
            <h4>Episode</h4>
          </div>
        </div>
        <EpisodeList episodes={episodes.results} />
      </div>

      <Pagination info={info} currentPage={currentPage} basePath="/episodes" />
    </div>
  );
};

export default EpisodesPage;
