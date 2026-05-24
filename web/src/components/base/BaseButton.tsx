"use client";


import { Loader2 } from "lucide-react"; // Shadcn's preferred lightweight spinner icon
import { cn } from "@/lib/utils"; // Shadcn's internal class merger utility
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

  // Map your custom design tokens to Shadcn core variants or manual styles
  const variantMap: Record<ButtonVariant, "default" | "secondary" | "outline" | "ghost" | "destructive" | string> = {
    primary: "default",
    secondary: "secondary",
    tertiary: "outline", // Fallback to outline style, tweak as needed
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
      disabled={loading}
      // Pass standard variant name if matching Shadcn, otherwise pass default and override in className
      variant={typeof selectedVariant === "string" && !["default", "secondary", "outline", "ghost", "destructive"].includes(selectedVariant) ? "default" : (selectedVariant as any)}
      size={size === "md" ? "default" : size} // Shadcn names medium size as "default"
      className={cn(
        rounded,
        "font-semibold flex items-center justify-center gap-2",
        fullWidth && "w-full",
        isIconOnly && "p-2 aspect-square min-w-10",
        // Inject manual custom style strings (like danger-soft background overrides) safely
        typeof selectedVariant === "string" && !["default", "secondary", "outline", "ghost", "destructive"].includes(selectedVariant) && selectedVariant,
        className
      )}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin shrink-0" />}
      {children}
    </Button>
  );
}