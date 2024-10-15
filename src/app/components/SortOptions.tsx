"use client";

import { Tooltip } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";

const SORT_OPTIONS = [
  {
    label: "ID",
    value: "id",
  },
  {
    label: "Alphabetically",
    value: "alphabetically",
  },
  {
    label: "Newest",
    value: "newest",
  },
];

const SortOptions = () => {
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
        className="flex items-center relative cursor-pointer min-w-10"
      >
        <div className="flex gap-2 items-center">
          <Tooltip title="You gotta sort it to make sense of the chaos!">
            <span>Sort by:</span>
          </Tooltip>
          <p className="bg-[#003A6F] py-1 px-3 rounded-sm text-light-btn dark:text-dark-btn">{sortType}</p>
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

export default SortOptions;
