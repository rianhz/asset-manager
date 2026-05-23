import type { Metadata } from "next";
import "./globals.css";
import Toaster from "@/src/components/toaster/Toaster";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import { ThemeProvider } from "../providers/ThemeProvider";
import StoreProvider from "../providers/StoreProvider";
import AuthProvider from "../providers/AuthProvider";

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
                <AuthProvider>
                  <Toaster />
                  {children}
                </AuthProvider>
              </ThemeProvider>
          </StoreProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
