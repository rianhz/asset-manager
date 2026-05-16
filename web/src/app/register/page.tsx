import RegisterForm from "@/src/components/auth/RegisterForm";
import BaseLogo from "@/src/components/base/BaseLogo";

export default function RegisterPage() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] right-[-120px] h-[400px] w-[400px] rounded-full bg-[var(--upload)] opacity-20 blur-3xl" />

        <div className="absolute bottom-[-120px] left-[-120px] h-[400px] w-[400px] rounded-full bg-[var(--primary)] opacity-20 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Left Side */}
      <section className="relative hidden flex-1 flex-col justify-start gap-12 p-16 lg:flex">
        <div>
          <BaseLogo />

          <div className="mt-20 max-w-xl">
            <h2 className="text-6xl font-bold leading-tight tracking-tight">
              Start organizing your assets today.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
              Build your modern media workspace and
              collaborate smarter with AI-powered tools.
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-5">
            {/* Daily Uploads */}
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]">
                <p className="text-sm text-[var(--muted-foreground)]">
                Daily Uploads
                </p>

                <h3 className="mt-2 text-4xl font-bold">
                10K+
                </h3>

                <p className="mt-3 text-sm text-green-400">
                Growing every day
                </p>
            </div>

            {/* Active Workspaces */}
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--upload)]">
                <p className="text-sm text-[var(--muted-foreground)]">
                Active Workspaces
                </p>

                <h3 className="mt-2 text-4xl font-bold">
                2.4K
                </h3>

                <div className="mt-4 flex -space-x-2">
                <div className="h-9 w-9 rounded-full border-2 border-[var(--surface)] bg-blue-400" />

                <div className="h-9 w-9 rounded-full border-2 border-[var(--surface)] bg-purple-400" />

                <div className="h-9 w-9 rounded-full border-2 border-[var(--surface)] bg-pink-400" />

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[var(--surface)] bg-[var(--surface-secondary)] text-xs">
                    +12
                </div>
                </div>
            </div>

            {/* Storage */}
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]">
                <div className="flex items-center justify-between">
                <p className="text-sm text-[var(--muted-foreground)]">
                    Storage Capacity
                </p>

                <span className="rounded-full bg-[var(--upload)]/20 px-2 py-1 text-xs text-[var(--upload)]">
                    Unlimited
                </span>
                </div>

                <h3 className="mt-2 text-4xl font-bold">
                1TB+
                </h3>

                <div className="mt-4 h-2 rounded-full bg-[var(--surface-secondary)]">
                <div className="h-2 w-[82%] rounded-full bg-[var(--upload)]" />
                </div>
            </div>

            {/* Uptime */}
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-500">
                <p className="text-sm text-[var(--muted-foreground)]">
                Platform Uptime
                </p>

                <h3 className="mt-2 text-4xl font-bold">
                99.9%
                </h3>

                <p className="mt-3 text-sm text-green-400">
                Stable & reliable uploads
                </p>
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
              Create account
            </h2>

            <p className="mt-2 text-[var(--muted-foreground)]">
              Start managing your assets smarter
            </p>
          </div>

          <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-4 transition-all hover:bg-[var(--surface-hover)]">
            Continue with Google
          </button>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-[var(--border)]" />

            <span className="text-sm text-[var(--muted-foreground)]">
              OR
            </span>

            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>

          <RegisterForm />

          <p className="mt-8 text-center text-sm text-[var(--muted-foreground)]">
            Already have an account?{" "}

            <a
              href="/login"
              className="font-medium text-[var(--primary)] hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}