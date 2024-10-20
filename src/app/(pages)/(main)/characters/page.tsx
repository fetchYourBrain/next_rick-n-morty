// import { CharacterList } from "@/components/CharacterList";
import { Pagination } from "@/components/Pagination";
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

const CharactersPage = async () => {
  const currentPage = 1;
  const characters = await getAllCharacters();

  return (
    <div>
      <CharacterSearch/>
      <Pagination info={characters.info} currentPage={currentPage} basePath="/characters" />
    </div>
  );
};

export default CharactersPage;

