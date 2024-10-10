"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

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

//   useEffect(() => {setOpen(false)},[])

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
          <p className="bg-[#003A6F] py-1 px-3 rounded-sm">{sortType}</p>
        </div>
        <div
          className={clsx(
            `absolute top-10 z-[3] bg-[#000000b6] border-[#9DCE34] border-[1px] backdrop-blur-sm`,
            { hidden: !open }
          )}
        >
          <ul className="">
            {SORT_OPTIONS.map((option) => (
              <li
              key={option.label}
                onClick={() => handleSelectOption(option.label)}
                className="py-3 px-4 hover:text-[#9DCE34] hover:bg-[#13b0c88b] cursor-pointer transition-colors ease-in-out"
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
