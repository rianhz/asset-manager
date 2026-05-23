import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Register",
  description: "Register to your account",
};

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
