import { fetchAllEpisodes } from "@/app/lib/episode/episodeSlice";
import store from "@/app/lib/store";
import { Episode } from "@/types/Episode";
import { ApiResponse } from "@/types/ApiResponse";
import { PayloadAction } from "@reduxjs/toolkit";
import { EpisodeList } from "@/components/EpisodeList";
import { Pagination } from "@/components/Pagination";
import { createMetaData } from "@/helpers/metadata";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = createMetaData({
  title: "Episodes",
  description:
    "Dive into the hilarious and unpredictable episodes of Rick and Morty. Discover your favorites!",
  url: "/episodes",
});


const EpisodesPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const currentPage = Number(searchParams.page) || 1;
  const response = await store.dispatch(fetchAllEpisodes({ 
    query: `page=${currentPage}`, 
    noCache: true 
  })) as PayloadAction<ApiResponse<Episode>>;

  const episodes: Episode[] = response.payload.results;
  const info = response.payload.info;

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
        <EpisodeList episodes={episodes} />
      </div>

      <Pagination info={info} currentPage={currentPage} basePath="/episodes" />
    </div>
  );
};

export default EpisodesPage;
