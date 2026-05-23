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
}: BaseButtonProps) {
  
  const spinnerColor: Record<ButtonVariant, string> = {
    primary: "var(--primary-foreground)",
    secondary: "var(--secondary-foreground)",
    tertiary: "#ffffff",
    ghost: "currentColor", 
    danger: "#ffffff",
    "danger-soft": "var(--danger-soft-foreground)",
    outline: "currentColor",
  };

  return (
    <Button
      type={type}
      onPress={onClick}
      variant={variant as any}
      size={size}
      fullWidth={fullWidth}
      className={clsx(
        "rounded-2xl font-semibold transition-all",
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