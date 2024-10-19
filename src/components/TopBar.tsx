import { Tooltip } from "@mui/material";
import SortOptions from "./SortOptions";

const TopBar = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between gap-3 bg-[#ffffff] dark:bg-[#262626] py-4 px-2 mb-10">
      <SortOptions />
      <div className="flex gap-2 flex-col md:flex-row">
        <input
          type="text"
          placeholder="Find what you’re looking for!"
          className=" rounded-sm bg-transparent py-2 px-4 text-light-primary dark:text-dark-primary border-[#00A7E4] dark:border-dark-primary border-[2px] w-80"
        />
        <Tooltip title="Filter out the nonsense, Morty! We only want the good stuff!">
          <button className="self-start uppercase py-2 px-4 text-light-primary dark:text-dark-primary border-[#00A7E4] dark:border-dark-primary border-[2px] rounded-sm">
            Filter
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default TopBar;
