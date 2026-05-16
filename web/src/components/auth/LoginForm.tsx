"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, loginSchema } from "@/src/features/auth/authValidator";


export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginFormValues) => {
    console.log(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
          Email
        </label>

        <input
          type="email"
          placeholder="hello@example.com"
          {...register("email")}
          className="
            w-full
            rounded-2xl
            border
            border-[var(--border)]
            bg-[var(--surface-secondary)]
            px-4
            py-4
            outline-none
            transition-all
            placeholder:text-[var(--muted-foreground)]
            focus:border-[var(--primary)]
          "
        />

        {errors.email && (
          <p className="mt-2 text-sm text-[var(--danger)]">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Password
        </label>

        <input
          type="password"
          placeholder="••••••••"
          {...register("password")}
          className="
            w-full
            rounded-2xl
            border
            border-[var(--border)]
            bg-[var(--surface-secondary)]
            px-4
            py-4
            outline-none
            transition-all
            placeholder:text-[var(--muted-foreground)]
            focus:border-[var(--primary)]
          "
        />

        {errors.password && (
          <p className="mt-2 text-sm text-[var(--danger)]">
            {errors.password.message}
          </p>
        )}
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="
          w-full
          rounded-2xl
          bg-[var(--primary)]
          px-4
          py-4
          font-semibold
          text-white
          transition-all
          hover:bg-[var(--primary-hover)]
          disabled:opacity-50
        "
      >
        {isSubmitting ? "Loading..." : "Login"}
      </button>
    </form>
  );
}