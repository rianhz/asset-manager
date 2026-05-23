import type { Metadata } from "next";
import BaseLoggedInLayout from "@/src/components/layouts/BaseLoggedInLayout";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard - Asset Manager",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <BaseLoggedInLayout>
        {children}
      </BaseLoggedInLayout>
  );
}