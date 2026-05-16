import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-[var(--surface)] text-[var(--foreground)]">
      <main className="flex w-full justify-center flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Asset Manager</h1>
        <div className="flex gap-2">
          <Link href="/login" className="bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded-md">
            Login
          </Link>
          <Link href="/register" className="bg-[var(--secondary)] text-[var(--secondary-foreground)] px-4 py-2 rounded-md">
            Register
          </Link>
        </div>
      </main>
    </div>
  );
}
