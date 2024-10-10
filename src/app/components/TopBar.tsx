"use client";
import { Breadcrumbs } from "@mui/material";
import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import { Kode_Mono } from "next/font/google";
import SearchOptions from "./SearchOptions";

const kodeMonoFont = Kode_Mono({ subsets: ["latin"] });

const TopBar = () => {
  const breadcrumbs = useBreadcrumbs();
  if (breadcrumbs.length === 1) {
    return null;
  }

  return (
    <section className="flex mb-10 flex-col gap-4">
      <nav className="">
        <Breadcrumbs
          separator="›"
          className={`text-white text-md antialiased ${kodeMonoFont.className}`}
        >
          {breadcrumbs}
        </Breadcrumbs>
      </nav>
      <SearchOptions />
    </section>
  );
};

export default TopBar;
