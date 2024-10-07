"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const TopBar = () => {
  const pathname = usePathname();
  return (
    <section>
      <div className={clsx("mb-8", { hidden: pathname === "/" })}>
        jopa
      </div>
    </section>
  );
};

export default TopBar;
