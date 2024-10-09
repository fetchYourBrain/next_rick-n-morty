"use client";
import { Breadcrumbs } from "@mui/material";
import useBreadcrumbs from "@/hooks/useBreadcrumbs";
// import kodeMonoFont from "../fonts/KodeMono";

const TopBar = () => {
  const breadcrumbs = useBreadcrumbs();
  if (breadcrumbs.length === 1) {
    return null;
  }

  return (
    <section className="flex flex-col-reverse md:flex-row items-center mb-10">
      <nav className="">
        <Breadcrumbs
          separator="›"
          className={`text-white text-md antialiased`}
        >
          {breadcrumbs}
        </Breadcrumbs>
      </nav>
    </section>
  );
};

export default TopBar;
