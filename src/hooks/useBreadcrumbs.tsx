import Link from "next/link";
import { usePathname } from "next/navigation";

const useBreadcrumbs = () => {
  const pathname = usePathname();

  const pathTitle = (path: string) => {
    const finalPath = path[0].toUpperCase() + path.slice(1);
    return finalPath;
  };

  const breadcrumbs = [
    <Link key="1" href="/">
      Home
    </Link>,
    ...pathname
      .split("/")
      .slice(1)
      .filter(Boolean)
      .map((path, index, arr) =>
        index === arr.length - 1 ? (
          <Link
            key={index + 2}
            href={`/${path}`}
            className="text-3xl text-[#9DCE34] font-bold"
          >
            {pathTitle(path)}
          </Link>
        ) : (
          <Link key={index + 2} href={`/${path}`}>
            {pathTitle(path)}
          </Link>
        )
      ),
  ];

  return breadcrumbs;
};

export default useBreadcrumbs;
