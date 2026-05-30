import type { Metadata } from "next";
import "./globals.css";
import Toaster from "@/components/toaster/Toaster";
import { ThemeProvider } from "@/providers/ThemeProvider";
import StoreProvider from "@/providers/StoreProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import AuthServerProvider from "@/providers/AuthServerProvider";
import "@uploadthing/react/styles.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body suppressHydrationWarning>
        <ReactQueryProvider>
          <StoreProvider>
              <ThemeProvider>
                <AuthServerProvider>
                  <TooltipProvider>
                    <Toaster />
                    {children}
                  </TooltipProvider>
                </AuthServerProvider>
              </ThemeProvider>
          </StoreProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
