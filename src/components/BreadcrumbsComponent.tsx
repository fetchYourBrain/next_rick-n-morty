"use client";
import { Breadcrumbs } from "@mui/material";
import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import { Kode_Mono} from "next/font/google";

const kodeMonoFont = Kode_Mono({ subsets: ["latin"] });

const BreadcrumbsComponent = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <section className="flex mb-10 flex-col gap-4 ">
      <nav>
        <Breadcrumbs
          separator="›"
          className={`text-light-text dark:text-dark-text text-md antialiased ${kodeMonoFont.className}`}
          sx={{
            fontFamily: kodeMonoFont.style.fontFamily}}
        >
          {breadcrumbs}
        </Breadcrumbs>
      </nav>
      
    </section>
  );
};

export default BreadcrumbsComponent;
