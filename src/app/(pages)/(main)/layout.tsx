import TopBar from "@/components/TopBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home library",
  description: "Welcome to library of Rick N Morty cartoon.",
};


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopBar/>
      {children}
    </>
  );
}
