"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormValues, registerSchema } from "@/features/auth/authValidator";
import { useRegister } from "@/features/auth/hooks";
import BaseButton from "@/components/base/BaseButton";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate: registerMutation, isPending } = useRegister();

  const onSubmit = async (values: RegisterFormValues) => {
    registerMutation(values as any);
  };

  return (
    <form
      className="space-y-4 min-w-96"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label className="mb-2 block text-sm font-medium text-muted-foreground">
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

      <BaseButton onClick={handleSubmit(onSubmit)} fullWidth loading={isPending} size="lg">
        Create Account
      </BaseButton>
    </form>
  );
}