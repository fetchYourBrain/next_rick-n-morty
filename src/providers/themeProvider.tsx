"use client";
import { ThemeProvider } from "next-themes";

export default function ColorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
