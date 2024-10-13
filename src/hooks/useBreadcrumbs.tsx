"use client";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const useBreadcrumbs = () => {
  const pathname = usePathname();

  const pathTitle = (path: string) => {
    const finalPath = path[0].toUpperCase() + path.slice(1);
    return finalPath;
  };


  const breadcrumbs = useMemo(() => {
    const paths = pathname.split("/").slice(1).filter(Boolean);
    return [
      <Link key="1" href="/">
        Home
      </Link>,
      ...paths.map((path, index, arr) =>
        index === arr.length - 1 ? (
          <Tooltip title="God damn it, you already here, Morty!" arrow>
            <Link
              key={path}
              href={`/${path}`}
              className="text-3xl text-[#9DCE34] font-bold"
            >
              {pathTitle(path)}
            </Link>
          </Tooltip>
        ) : (
          <Link key={index + 2} href={`/${path}`}>
            {pathTitle(path)}
          </Link>
        )
      ),
    ];
  }, [pathname]); // Залежність - pathname

  return breadcrumbs;
};

export default useBreadcrumbs;
