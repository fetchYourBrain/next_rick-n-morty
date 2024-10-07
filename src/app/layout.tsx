import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "./components/Container";
import { kodeMonoFont } from "./fonts/SFmono";
import StoreProvider from "./storeProvider";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="wrapper cursor-custom-default">
          <Header />
          <Container>
            {children}
          </Container>
          <Footer />
        </div>
      </body>
    </html>
  );
}
