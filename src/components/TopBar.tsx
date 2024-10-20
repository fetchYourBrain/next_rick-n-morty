"use client";
import { setSearchField } from "@/app/_lib/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "@/app/_lib/hooks";
import { Tooltip } from "@mui/material";
import { ChangeEvent, useState } from "react";
import debounce from "lodash.debounce";

const TopBar = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.filter.searchQuery);
  const [localQuery, setLocalQuery] = useState(searchQuery);

  const debouncedSearch = debounce((query: string) => {
    dispatch(setSearchField(query));
  }, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setLocalQuery(newValue);
    debouncedSearch(newValue);
  };
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between gap-3 bg-[#ffffff] dark:bg-[#262626] py-4 px-2 mb-10">
      <div className="flex flex-col lg:flex-row justify-between gap-3 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center gap-3">
          <input
            value={localQuery}
            type="text"
            onChange={handleChange}
            placeholder="Find what you’re looking for!"
            className=" rounded-sm bg-transparent py-2 px-4 text-light-primary dark:text-dark-primary border-[#00A7E4] dark:border-dark-primary border-[2px] w-full lg:w-[400px]"
          />
          {searchQuery && <h3>Searching for: {searchQuery}</h3>}
        </div>
        <Tooltip title="Filter out the nonsense, Morty! We only want the good stuff!">
          <button className="self-start uppercase py-2 px-4 text-light-primary dark:text-dark-primary border-[#00A7E4] dark:border-dark-primary border-[2px] rounded-sm">
            Filter
          </button>
        </Tooltip>
      </div>
    </section>
  );
};

export default TopBar;
