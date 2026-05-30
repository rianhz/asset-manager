"use client";

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
  rounded?:
    | "rounded-2xl"
    | "rounded-lg"
    | "rounded-md"
    | "rounded-sm"
    | "rounded-none";
  asChild?: boolean;
  disabled?: boolean;
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
  asChild = false,
  disabled = false,
}: BaseButtonProps) {
  const variantMap: Record<
    ButtonVariant,
    "default" | "secondary" | "outline" | "ghost" | "destructive" | string
  > = {
    primary: "default",
    secondary: "secondary",
    tertiary: "outline",
    outline: "outline",
    ghost: "ghost",
    danger: "destructive",
    "danger-soft": "bg-destructive/10 text-destructive hover:bg-destructive/20",
  };

  const selectedVariant = variantMap[variant];

  return (
    <Button
      type={type}
      onClick={onClick}
      asChild={asChild}
      disabled={loading || disabled}
      variant={
        typeof selectedVariant === "string" &&
        !["default", "secondary", "outline", "ghost", "destructive"].includes(
          selectedVariant
        )
          ? "default"
          : (selectedVariant as any)
      }
      size={size === "md" ? "default" : size}
      className={cn(
        rounded,
        "font-semibold flex items-center justify-center gap-2 cursor-pointer",
        fullWidth && "w-full",
        isIconOnly && "p-2 aspect-square min-w-10",
        typeof selectedVariant === "string" &&
          ![
            "default",
            "secondary",
            "outline",
            "ghost",
            "destructive",
          ].includes(selectedVariant) &&
          selectedVariant,
        className
      )}
    >
      <span className="flex items-center gap-2">
        {loading && <Loader2 className="h-4 w-4 animate-spin shrink-0" />}
        {children}
      </span>
    </Button>
  );
}