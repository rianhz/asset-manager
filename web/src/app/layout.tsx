import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/src/providers/reactQueryProvider";

export const metadata: Metadata = {
  title: "Asset Manager",
  description: "Asset Manager - Manage your assets efficiently",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
