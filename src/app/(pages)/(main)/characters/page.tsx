import { PaginationComponent } from "@/components/Pagination";
import { Metadata } from "next";
import { createMetaData } from "@/helpers/metadata";
import { getAllCharacters } from "@/api";
import CharacterSearch from "@/components/CharacterSearch";

export const metadata: Metadata = createMetaData({
  title: "Characters",
  description:
    "Explore the wild and wacky multiverse of Rick and Morty through its iconic characters. Get to know your favorite heroes, villains, and creatures!",
  url: "/characters",
});

export const revalidate = 60;
export const dynamic = 'force-static';

const CharactersPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  const characters = await getAllCharacters(`?page=${currentPage}`);

  return (
    <div>
      <CharacterSearch />
      <PaginationComponent info={characters.info} basePath="/characters" />
    </div>
  );
};

export default CharactersPage;
