import { CharacterList } from "@/components/CharacterList";
import { Pagination } from "@/components/Pagination";
import { Metadata } from "next";
import { createMetaData } from "@/helpers/metadata";
import { getAllCharacters } from "@/api";

export const metadata: Metadata = createMetaData({
  title: "Characters",
  description:
    "Explore the wild and wacky multiverse of Rick and Morty through its iconic characters. Get to know your favorite heroes, villains, and creatures!",
  url: "/characters",
});

const CharactersPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const currentPage = Number(searchParams.page) || 1;
  const characters = await getAllCharacters()
  const info = characters.info;

  return (
    <div>
      <CharacterList characters={characters.results} />
      <Pagination info={info} currentPage={currentPage} basePath="/characters" />
    </div>
  );
};
export async function generateStaticParams() {
  const characters = await getAllCharacters();
  const totalPages = Math.ceil(characters.info.count);
  
  return Array.from({ length: totalPages }, (_, index) => ({
    page: (index + 1).toString(),
  }));
}

export default CharactersPage;
