import { Metadata } from "next";
import { createMetaData } from "@/helpers/metadata";
import { PaginationComponent } from "@/components/Pagination";
import { getAllEpisodes } from "@/api";
import DynamicEpisodeList from "@/components/DynamicEpisodeList";

export const metadata: Metadata = createMetaData({
  title: "Episodes",
  description:
    "Dive into the hilarious and unpredictable episodes of Rick and Morty. Discover your favorites!",
  url: "/episodes",
});

export const revalidate = 60;
export const dynamic = 'force-static';

const EpisodesPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;

  const episodes = await getAllEpisodes(currentPage);
  const info = episodes.info;

  return (
    <div>
      <DynamicEpisodeList episodes={episodes.results} />
      <PaginationComponent info={info} basePath="/episodes" />
    </div>
  );
};

export default EpisodesPage;
