import RegisterForm from "@/src/components/auth/RegisterForm";
import BaseLogo from "@/src/components/base/BaseLogo";

export default function RegisterPage() {
  return (
    <main className="relative flex w-full items-center justify-center p-6">

      {/* Left Side */}
      <section className="relative hidden flex-1 flex-col justify-start gap-12 p-16 lg:flex">
        <div>
          <BaseLogo />

          <div className="mt-20 max-w-xl">
            <h2 className="text-6xl font-bold leading-tight tracking-tight">
              Start organizing your assets today.
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Build your modern media workspace and
              collaborate smarter with AI-powered tools.
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-5">
            {/* Daily Uploads */}
            <div className="rounded-3xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                <p className="text-sm text-muted-foreground">
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
            <div className="rounded-3xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-upload">
                <p className="text-sm text-muted-foreground">
                Active Workspaces
                </p>

                <h3 className="mt-2 text-4xl font-bold">
                2.4K
                </h3>

                <div className="mt-4 flex -space-x-2">
                <div className="h-9 w-9 rounded-full border-2 border-surface bg-blue-400" />

                <div className="h-9 w-9 rounded-full border-2 border-surface bg-purple-400" />

                <div className="h-9 w-9 rounded-full border-2 border-surface bg-pink-400" />

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-surface bg-surface-secondary text-xs">
                    +12
                </div>
                </div>
            </div>

            {/* Storage */}
            <div className="rounded-3xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                    Storage Capacity
                </p>

                <span className="rounded-full bg-upload/20 px-2 py-1 text-xs text-upload">
                    Unlimited
                </span>
                </div>

                <h3 className="mt-2 text-4xl font-bold">
                1TB+
                </h3>

                <div className="mt-4 h-2 rounded-full bg-surface-secondary">
                <div className="h-2 w-[82%] rounded-full bg-upload" />
                </div>
            </div>

            {/* Uptime */}
            <div className="rounded-3xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-500">
                <p className="text-sm text-muted-foreground">
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
        <div className="w-full max-w-md rounded-[32px] border border-border bg-[rgba(17,24,39,0.8)] p-8 shadow-2xl backdrop-blur-xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">
              Create account
            </h2>

            <p className="mt-2 text-muted-foreground">
              Start managing your assets smarter
            </p>
          </div>

          <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-border bg-surface-secondary px-4 py-4 transition-all hover:bg-surface-hover">
            Continue with Google
          </button>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />

            <span className="text-sm text-muted-foreground">
              OR
            </span>

            <div className="h-px flex-1 bg-border" />
          </div>

          <RegisterForm />

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}

            <a
              href="/login"
              className="font-medium text-primary hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}