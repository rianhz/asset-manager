import { BaseLoggedInNavTop } from "../navbar/BaseLoggedInNavTop";

export default function BaseLoggedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <BaseLoggedInNavTop />
        {children}
    </>
  );
}
