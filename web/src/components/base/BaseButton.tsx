"use client";

import { Button } from "@heroui/react";
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
  disabled?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
  className?: string;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
}

export default function BaseButton({
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = "primary",
  className,
  fullWidth = false,
  type = "button",
  size = "md",
}: BaseButtonProps) {
  
  // Dynamic color matching based on Tailwind v4 utility variables 
  const spinnerColor: Record<ButtonVariant, string> = {
    primary: "var(--primary-foreground)",
    secondary: "var(--secondary-foreground)",
    tertiary: "#ffffff",
    ghost: "currentColor", 
    danger: "#ffffff",
    "danger-soft": "var(--danger-soft-foreground)",
    outline: "currentColor", // "currentColor" adapts to whatever the text color currently is
  };

  return (
    <Button
      type={type}
      onPress={onClick}
      isDisabled={disabled || loading}
      variant={variant as any} // Cast as any because "danger-soft" is a custom string variant
      size={size}
      fullWidth={fullWidth}
      className={clsx(
        "rounded-2xl font-semibold transition-all",
        "flex items-center justify-center gap-2",
        className
      )}
    >
      {loading && (
        <LoadingSpinner fill={spinnerColor[variant]} />
      )}
      {children}
    </Button>
  );
}