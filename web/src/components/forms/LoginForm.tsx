"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, loginSchema } from "@/features/auth/authValidator";
import { useLogin } from "@/features/auth/hooks";
import BaseButton from "@/components/base/BaseButton";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate: loginMutation, isPending } = useLogin();

  const onSubmit = async (values: LoginFormValues) => {
    loginMutation(values as any);
  };

  return (
    <form
      className="space-y-4 dark:text-white min-w-96"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label className="mb-2 block text-sm font-medium text-muted-foreground dark:text-white">
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
            border-border
            bg-white dark:bg-surface-secondary
            px-4
            py-4
            outline-none
            transition-all
            placeholder:text-muted-foreground
            focus:border-primary
          "
        />

        {errors.email && (
          <p className="mt-2 text-sm text-danger">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-muted-foreground dark:text-white">
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
            border-border
            bg-white dark:bg-surface-secondary
            px-4
            py-4
            outline-none
            transition-all
            placeholder:text-muted-foreground
            focus:border-primary
          "
        />

        {errors.password && (
          <p className="mt-2 text-sm text-danger">
            {errors.password.message}
          </p>
        )}
      </div>

      <BaseButton onClick={handleSubmit(onSubmit)} fullWidth loading={isPending} size="lg">
        Login
      </BaseButton>
    </form>
  );
}