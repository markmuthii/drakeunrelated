import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drake Unrelated - The Unofficial Website of Drake ",
  description: "A quickly put together copy of drakerelated.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}
