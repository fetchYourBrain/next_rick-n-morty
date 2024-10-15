"use client";

import clsx from "clsx";
import { useState } from "react";

const SORT_OPTIONS = [
  {
    label: "ID",
    value: "id",
  },
  {
    label: "Alphabetically",
    value: "alphabetically", // name
  },
  {
    label: "Newest",
    value: "newest", // createdAt
  },
];
const SearchOptions = () => {
  const [open, setOpen] = useState(false);
  const [sortType, setSortType] = useState(SORT_OPTIONS[0].label);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleSelectOption = (value: string) => {
    setSortType(value);
  };

  return (
    <section className="flex gap-14 select-none ">
      <div
        onClick={handleOpen}
        className="flex items-center relative cursor-pointer min-w-80"
      >
        <div className="flex gap-2 items-center">
          <span>Sort by:</span>
          <p className="bg-light-btn dark:bg-dark-btn py-1 px-3 rounded-sm">{sortType}</p>
        </div>
        <div
          className={clsx(
            `absolute top-10 z-[3] bg-light-bg dark:bg-dark-bg border-ligth-primary dark:border-dark-primary border-[1px] backdrop-blur-sm`,
            { hidden: !open }
          )}
        >
          <ul>
            {SORT_OPTIONS.map((option) => (
              <li
                key={option.label}
                onClick={() => handleSelectOption(option.label)}
                className="py-3 px-4 hover:text-ligth-primary dark:hover:text-dark-primary hover:bg-light-card-bg dark:hover:bg-dark-card-bg cursor-pointer transition-colors ease-in-out"
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SearchOptions;
