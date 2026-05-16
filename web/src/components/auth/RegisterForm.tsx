"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormValues, registerSchema } from "@/src/features/auth/authValidator";


export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (values: RegisterFormValues) => {
    console.log(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
          Name
        </label>

        <input
          type="text"
          placeholder="John Doe"
          {...register("name")}
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

        {errors.name && (
          <p className="mt-2 text-sm text-[var(--danger)]">
            {errors.name.message}
          </p>
        )}
      </div>

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

      <div>
        <label className="mb-2 block text-sm font-medium">
          Confirm Password
        </label>

        <input
          type="password"
          placeholder="••••••••"
          {...register("confirmPassword")}
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

        {errors.confirmPassword && (
          <p className="mt-2 text-sm text-[var(--danger)]">
            {errors.confirmPassword.message}
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
        {isSubmitting ? "Loading..." : "Create Account"}
      </button>
    </form>
  );
}