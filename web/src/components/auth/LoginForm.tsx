"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, loginSchema } from "@/src/features/auth/authValidator";
import { useLogin } from "@/src/features/auth/hooks";
import BaseButton from "../base/BaseButton";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate: loginMutation, isPending } = useLogin();

  const onSubmit = async (values: LoginFormValues) => {
    loginMutation(values, {
      onSuccess: () => {
        router.push("/dashboard");
      },
    });
  };

  return (
    <form
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
            border-border
            bg-surface-secondary
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
            border-border
            bg-surface-secondary
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

      <BaseButton onClick={handleSubmit(onSubmit)} disabled={isPending} loading={isPending}>
        Login
      </BaseButton>
    </form>
  );
}