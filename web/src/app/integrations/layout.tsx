import type { Metadata } from "next";
import BaseLoggedInLayout from "@/components/layouts/BaseLoggedInLayout";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Integrations - Asset Manager",
};

export default function IntegrationsLayout({
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