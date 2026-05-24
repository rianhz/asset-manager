"use client";

import { Button, Spinner } from "@heroui/react";
import LoadingSpinner from "../loader/LoadingSpinner";
import clsx from "clsx";

type ButtonVariant =

  | "primary"
  | "secondary"
  | "tertiary"

  | "outline"
  | "ghost"
  | "danger"

  | "danger-soft";

interface BaseButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  variant?: ButtonVariant;
  className?: string;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  isIconOnly?: boolean;
  rounded?: "rounded-2xl" | "rounded-lg" | "rounded-md" | "rounded-sm" | "rounded-none";
}

export default function BaseButton({
  children,
  onClick,
  loading = false,
  variant = "primary",
  className,
  fullWidth = false,
  type = "button",
  size = "md",
  isIconOnly = false,
  rounded = "rounded-2xl",
}: BaseButtonProps) {

  return (
    <Button
      type={type}
      onPress={onClick}
      variant={variant as any}
      size={size}
      fullWidth={fullWidth}
      className={clsx(
        rounded,
        "font-semibold ",
        "flex items-center justify-center gap-2",
        className
      )}
      isPending={loading}
      isIconOnly={isIconOnly}
    >
      {({isPending}) => (
        <>
          {isPending ? <Spinner color="current" size="sm" /> : null}
          {children}
        </>
      )}
    </Button>
  );
}