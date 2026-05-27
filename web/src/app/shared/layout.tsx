import type { Metadata } from "next";
import BaseLoggedInLayout from "@/components/layouts/BaseLoggedInLayout";
import { BaseBreadcrumbs } from "@/components/base/BaseBreadcrumbs";

export const metadata: Metadata = {
  title: "Shared Drive",
  description: "Shared Drive - Asset Manager",
};

export default function SharedLayout({
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