import BreadCrumbsComponent from "@/components/BreadcrumbsComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BreadCrumbsComponent />
      {children}
    </>
  );
}
