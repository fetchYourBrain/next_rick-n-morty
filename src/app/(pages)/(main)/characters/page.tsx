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

const CharactersPage = async () => {
  const currentPage = 1;
  const characters = await getAllCharacters(currentPage)
  const info = characters.info;

  return (
    <div>
      <CharacterList characters={characters.results} />
      <Pagination info={info} currentPage={currentPage} basePath="/characters" />
    </div>
  );
};

export default CharactersPage;
