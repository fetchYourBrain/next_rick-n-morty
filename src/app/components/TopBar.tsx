"use client";
import { Breadcrumbs } from "@mui/material";
import { usePathname } from "next/navigation";
import { kodeMonoFont } from "../fonts/KodeMono";
import useBreadcrumbs from "@/hooks/useBreadcrumbs";

const TopBar = () => {
  const pathname = usePathname();
  const breadcrumbs = useBreadcrumbs();
  if (pathname === "/") {
    return "";
  }

  return (
    <section className="flex flex-col-reverse md:flex-row items-center mb-10">
      <nav className="">
        <Breadcrumbs
          separator="›"
          className={`${kodeMonoFont.className} antialiased text-white text-md`}
        >
          {breadcrumbs}
        </Breadcrumbs>
      </nav>
    </section>
  );
};

export default TopBar;
