import LoginForm from "@/components/forms/LoginForm";
import BaseButton from "@/components/base/BaseButton";
import Link from "next/link";
import Image from "next/image";
import BaseLogo from "@/components/base/BaseLogo";

export default function LoginPage() {
  return (
      <main className="relative flex w-full items-center justify-between gap-12 p-8">
        
        <section className="relative flex-1 flex-col justify-start gap-12">
          <div>
            <div>
              <h2 className="text-6xl font-bold leading-tight tracking-tight">
                Manage your assets  <br /> smarter.
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Upload, organize, preview, and manage your media assets in one secure workspace.
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-5">
              <div className="rounded-3xl border border-border p-5 shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <p className="text-sm text-white dark:text-white">
                  Uploads Today
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                  842
                  </h3>

                  <p className="mt-2 text-sm text-green-800 dark:text-green-400">
                  +18% from yesterday
                  </p>
              </div>

              <div className="rounded-3xl border border-border p-5 shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <p className="text-sm text-white dark:text-white">
                  Team Members
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                  24
                  </h3>

                  <div className="mt-3 flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border border-surface bg-blue-400" />

                  <div className="h-8 w-8 rounded-full border border-surface bg-purple-400" />

                  <div className="h-8 w-8 rounded-full border border-surface bg-pink-400" />
                  </div>
              </div>

              <div className="rounded-3xl border border-border p-5 shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <p className="text-sm text-white dark:text-white">
                  Storage Remaining
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                  872 GB
                  </h3>

                  <div className="mt-4 h-2 rounded-full bg-surface-secondary dark:bg-surface-secondary">
                  <div className="h-2 w-[38%] rounded-full bg-upload" />
                  </div>
              </div>
          </div>
        </section>

        <section className="relative flex items-center justify-center">
          <div className="w-full max-w-md rounded-[32px] border border-border p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl font-bold">
                <BaseLogo />
              </div>

              <h2 className="text-3xl font-bold">
                Welcome back
              </h2>

              <p className="mt-2">
                Login to continue managing your assets
              </p>
            </div>

            <LoginForm />

            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />

              <span className="text-sm text-muted-foreground">
                OR
              </span>

              <div className="h-px flex-1 bg-border" />
            </div>

            <BaseButton fullWidth variant="outline" size="lg">
              <Image src={'/google.svg'} alt="Google" width={24} height={24} />
              Continue with Google
            </BaseButton>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}

              <Link
                href="/register"
                className="font-medium text-blue-500 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </section>
      </main>
  );
}