import LoginForm from "@/src/components/auth/LoginForm";
import BaseLogo from "@/src/components/base/BaseLogo";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-[-120px] h-[400px] w-[400px] rounded-full bg-[var(--primary)] opacity-20 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-120px] h-[400px] w-[400px] rounded-full bg-[var(--upload)] opacity-20 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Left Side */}
      <section className="relative hidden flex-1 flex-col justify-start gap-12 p-16 lg:flex">
        <div>
          <BaseLogo />

          <div className="mt-20">
            <h2 className="text-6xl font-bold leading-tight tracking-tight">
              Manage your assets  <br /> smarter.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
              Upload, organize, preview, and manage your media assets in one secure workspace.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-2 gap-5">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm text-[var(--muted-foreground)]">
                Uploads Today
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                842
                </h3>

                <p className="mt-2 text-sm text-green-400">
                +18% from yesterday
                </p>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm text-[var(--muted-foreground)]">
                Team Members
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                24
                </h3>

                <div className="mt-3 flex -space-x-2">
                <div className="h-8 w-8 rounded-full border border-[var(--surface)] bg-blue-400" />

                <div className="h-8 w-8 rounded-full border border-[var(--surface)] bg-purple-400" />

                <div className="h-8 w-8 rounded-full border border-[var(--surface)] bg-pink-400" />
                </div>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm text-[var(--muted-foreground)]">
                Storage Remaining
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                872 GB
                </h3>

                <div className="mt-4 h-2 rounded-full bg-[var(--surface-secondary)]">
                <div className="h-2 w-[38%] rounded-full bg-[var(--upload)]" />
                </div>
            </div>
        </div>
      </section>

      {/* Right Side */}
      <section className="relative flex w-full items-center justify-center p-6 lg:max-w-xl">
        <div className="w-full max-w-md rounded-[32px] border border-[var(--border)] bg-[rgba(17,24,39,0.8)] p-8 shadow-2xl backdrop-blur-xl">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-[var(--primary)] text-2xl font-bold text-white">
              A
            </div>

            <h2 className="text-3xl font-bold">
              Welcome back
            </h2>

            <p className="mt-2 text-[var(--muted-foreground)]">
              Login to continue managing your assets
            </p>
          </div>

          <LoginForm />

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-[var(--border)]" />

            <span className="text-sm text-[var(--muted-foreground)]">
              OR
            </span>

            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>

          <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-4 transition-all hover:bg-[var(--surface-hover)]">
            Continue with Google
          </button>

          <p className="mt-8 text-center text-sm text-[var(--muted-foreground)]">
            Don&apos;t have an account?{" "}

            <a
              href="/register"
              className="font-medium text-[var(--primary)] hover:underline"
            >
              Register
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}