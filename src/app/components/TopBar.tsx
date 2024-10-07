"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const TopBar = () => {
  const pathname = usePathname();
  return (
    <section>
      <div className={classNames("mb-8", { hidden: pathname === "/" })}>
        jopa
      </div>
    </section>
  );
};

export default TopBar;
