"use client";
import {
  addItemToFavorites,
  loadFavoritesFromStorage,
  removeItemFromFavorites,
} from "@/app/_lib/favorites/favoriteSlice";
import { useAppDispatch, useAppSelector } from "@/app/_lib/hooks";
import { Character } from "@/types/Character";
import { Episode } from "@/types/Episode";
import { Location } from "@/types/Location";
import clsx from "clsx";
import { useEffect } from "react";

interface PropsInterface {
  item: Episode | Character | Location;
  type: "characters" | "episodes" | "locations";
}

const MakeFavorite: React.FC<PropsInterface> = ({ item, type }) => {
  const dispatch = useAppDispatch();
  const favorites =
    useAppSelector((state) => state.favorites[type]) || [];

    const isFavorited = favorites.some((favItem) => favItem.id === item.id);


  const text = isFavorited ? "Remove" : "Make a favorite";

  useEffect(() => {
    dispatch(loadFavoritesFromStorage());
  }, [dispatch]);

  const toggleFavoritesHandler = () => {
    if (isFavorited) {
      dispatch(removeItemFromFavorites({ id: item.id, type }));
      console.log(`Removed ${item.id} from favorites.`);
    } else {
      dispatch(addItemToFavorites({ item, type }));
      console.log(`Added ${item.id} to favorites.`);
    }
  };

  return (
    <button
      onClick={toggleFavoritesHandler}
      className={clsx(
        "py-2 px-4 text-center text-light-card-bg dark:text-dark-card-bg bg-light-primary dark:bg-dark-primary w-full max-w-[250px]",
        { "bg-red-700 dark:bg-red-700": isFavorited }
      )}
    >
      {text}
    </button>
  );
};

export default MakeFavorite;
