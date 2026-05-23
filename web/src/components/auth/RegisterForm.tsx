"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormValues, registerSchema } from "@/src/features/auth/authValidator";
import { useRegister } from "@/src/features/auth/hooks";
import BaseButton from "../base/BaseButton";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate: registerMutation, isPending } = useRegister();

  const onSubmit = async (values: RegisterFormValues) => {
    registerMutation(values, {
      onSuccess: () => {
        router.push("/login");
      },
    });
  };

  return (
    <form
      className="space-y-4 dark:text-white min-w-96"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label className="mb-2 block text-sm font-medium text-muted-foreground dark:text-white">
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

        {errors.name && (
          <p className="mt-2 text-sm text-danger">
            {errors.name.message}
          </p>
        )}
      </div>

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

      <div>
        <label className="mb-2 block text-sm font-medium text-muted-foreground dark:text-white">
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

        {errors.confirmPassword && (
          <p className="mt-2 text-sm text-danger">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <BaseButton onClick={handleSubmit(onSubmit)} fullWidth disabled={isPending} loading={isPending} size="lg">
        Create Account
      </BaseButton>
    </form>
  );
}