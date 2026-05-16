
export default function BaseOuterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="relative flex min-h-screen overflow-hidden bg-background text-foreground">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-32 left-[-120px] h-[400px] w-[400px] rounded-full bg-primary opacity-20 blur-3xl" />

                <div className="absolute bottom-[-120px] right-[-120px] h-[400px] w-[400px] rounded-full bg-upload opacity-20 blur-3xl" />

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>
        
            {children}
          
        </div>
      </body>
    </html>
  );
}
