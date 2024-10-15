"use client";
import { Breadcrumbs } from "@mui/material";
import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import { Kode_Mono } from "next/font/google";
import SearchOptions from "./SearchOptions";
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
      <SearchOptions />
    </section>
  );
};

export default TopBar;

