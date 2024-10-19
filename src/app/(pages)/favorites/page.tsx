"use client";

import { loadFavoritesFromStorage } from "@/app/_lib/favorites/favoriteSlice";
import { useAppDispatch, useAppSelector } from "@/app/_lib/hooks";
import { CharacterList } from "@/components/CharacterList";
import { EpisodeList } from "@/components/EpisodeList";
import { LocationList } from "@/components/LocationList";
import { useEffect } from "react";

const Page = () => {
  const dispatch = useAppDispatch();
  const { characters, episodes, locations } = useAppSelector(
    (state) => state.favorites
  );
  useEffect(() => {
    dispatch(loadFavoritesFromStorage());
  }, [dispatch]);
  return (
    <section>
      <h2 className="text-3xl text-light-primary dark:text-dark-primary border-light-primary dark:border-dark-primary border-b py-3">
        Characters
      </h2>
      <div className="py-12">
        {characters ? (
          <CharacterList characters={characters} />
        ) : (
          <>
            You have no favorites, Morty! LLLLet's make someone who deserves it!
          </>
        )}
      </div>
      <h2 className="text-3xl text-light-primary dark:text-dark-primary border-light-primary dark:border-dark-primary border-b py-3">
        Episodes
      </h2>
      <div className="py-12">
        {characters ? (
          <EpisodeList episodes={episodes} />
        ) : (
          <>
            You have no favorites, Morty! LLLLet's make someone who deserves it!
          </>
        )}
      </div>
      <h2 className="text-3xl text-light-primary dark:text-dark-primary border-light-primary dark:border-dark-primary border-b py-3">
        Locations
      </h2>
      <div className="py-12">
        {characters ? (
          <LocationList locations={locations} />
        ) : (
          <>
            You have no favorites, Morty! LLLLet's make someone who deserves it!
          </>
        )}
      </div>
    </section>
  );
};

export default Page;
