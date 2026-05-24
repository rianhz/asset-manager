import type { Metadata } from "next";
import "./globals.css";
import Toaster from "@/src/components/toaster/Toaster";
import { ThemeProvider } from "../providers/ThemeProvider";
import StoreProvider from "../providers/StoreProvider";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import AuthServerProvider from "../providers/AuthServerProvider";
import "@uploadthing/react/styles.css";

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
      <body suppressHydrationWarning>
        <ReactQueryProvider>
          <StoreProvider>
              <ThemeProvider>
                <AuthServerProvider>
                  <Toaster />
                  {children}
                </AuthServerProvider>
              </ThemeProvider>
          </StoreProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
