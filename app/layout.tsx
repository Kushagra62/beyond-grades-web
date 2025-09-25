import type { Metadata } from "next";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beyond Grades - Quantify Your Soft Skills",
  description: "A student-focused app to capture peer feedback on soft skills like Communication, Leadership, and Teamwork after college events, fests, and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}