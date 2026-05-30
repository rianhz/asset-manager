import type { Metadata } from "next";
import BaseLoggedInLayout from "@/components/layouts/BaseLoggedInLayout";

export const metadata: Metadata = {
  title: "Folders",
  description: "Folders - Asset Manager",
};

export default function FoldersLayout({
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