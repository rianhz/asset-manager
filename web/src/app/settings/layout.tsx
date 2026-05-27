import type { Metadata } from "next";
import BaseLoggedInLayout from "@/components/layouts/BaseLoggedInLayout";

export const metadata: Metadata = {
  title: "Settings",
  description: "Settings - Asset Manager",
};

export default function SettingsLayout({
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