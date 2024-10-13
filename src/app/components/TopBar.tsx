"use client";
import { Breadcrumbs, Button, TextField, Tooltip, createTheme } from "@mui/material";
import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import { Kode_Mono } from "next/font/google";
import SortOptions from "./SortOptions";
import { usePathname } from "next/navigation";

const kodeMonoFont = Kode_Mono({ subsets: ["latin"] });

const TopBar = () => {
  const breadcrumbs = useBreadcrumbs();
  const pathname = usePathname();

  const hiddenPaths = ["/", "/sign-in", "/sign-up"];

  if (breadcrumbs.length === 1 || hiddenPaths.includes(pathname)) {
    return null;
  }

  return (
    <section className="flex mb-10 flex-col gap-4">
      <nav>
        <Breadcrumbs
          separator="›"
          className={`text-light-text dark:text-dark-text text-md antialiased ${kodeMonoFont.className}`}
        >
          {breadcrumbs}
        </Breadcrumbs>
      </nav>
      <div
        className="flex flex-col-reverse md:flex-row justify-between gap-3"
      >
        <SortOptions />
        <div className="flex gap-2">
        <input type="text" placeholder="Find what you’re looking for!" className=" rounded-sm bg-transparent py-2 px-4 border-[#9DCE34] border-[1px] w-80"/>
        <Tooltip title="Filter out the nonsense, Morty! We only want the good stuff!">
          <Button
            variant="outlined"
            sx={{
              borderColor: "#9DCE34",
              color: "#9DCE34",
            }}
          >
            Filter
          </Button>
        </Tooltip>
        </div>
      </div>
    </section>
  );
};

export default TopBar;

