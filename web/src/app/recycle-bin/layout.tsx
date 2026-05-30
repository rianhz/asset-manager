import BaseLoggedInLayout from "@/components/layouts/BaseLoggedInLayout";

export default function RecycleBinLayout({
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