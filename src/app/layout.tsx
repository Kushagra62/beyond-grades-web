import type { Metadata } from "next";
import "@/styles/index.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beyond Grades",
  description: "Tracking Growth Beyond Grades",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}