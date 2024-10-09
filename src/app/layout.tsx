import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "./components/Container";
import kodeMonoFont from "./fonts/KodeMono";
import StoreProvider from "./storeProvider";
import TopBar from "./components/TopBar";

export const metadata: Metadata = {
  title: "Rick N Morty | Home library",
  description: "Welcome to library of Rick N Morty cartoon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${kodeMonoFont.className} antialiased`}>
          <div className="wrapper">
            <Header />
            <Container>
              <TopBar />
              {children}
            </Container>
            <Footer />
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
