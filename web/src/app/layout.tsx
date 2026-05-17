import type { Metadata } from "next";
import "./globals.css";
import Toaster from "@/src/components/toaster/Toaster";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import { RootThemeProvider } from "../providers/ThemeProvider";
import { BaseLoggedInNavTop } from "../components/navbar/BaseLoggedInNavTop";
import StoreProvider from "../providers/StoreProvider";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ReactQueryProvider>
          <StoreProvider>
            <RootThemeProvider>
              <Toaster />
              {children}
            </RootThemeProvider>
          </StoreProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
