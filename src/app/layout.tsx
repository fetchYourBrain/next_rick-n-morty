import type { Metadata } from "next";
import "./globals.css";
import { Kode_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "./components/Container";
import StoreProvider from "./storeProvider";
import TopBar from "./components/TopBar";
import ColorProvider from "./providers/themeProvider";
import { createMetaData } from "@/helpers/metadata";

export const metadata: Metadata = createMetaData({
  title: "Home library",
  description: "Welcome to library of Rick N Morty cartoon.",
  url: '/',
})

const kodeMonoFont = Kode_Mono({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${kodeMonoFont.className} antialiased bg-light-bg dark:bg-dark-bg`}>
          <div className="wrapper">
            <ColorProvider>
              <Header />
                <Container>
                  <TopBar />
                  {children}
                </Container>
              <Footer />
            </ColorProvider>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
