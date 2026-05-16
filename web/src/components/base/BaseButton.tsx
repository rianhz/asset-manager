import LoadingSpinner from "../loader/LoadingSpinner";

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface BaseButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
}

export default function BaseButton({
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = 'primary', 
}: BaseButtonProps) {
  
  const baseClasses = "w-full flex items-center justify-center gap-2 rounded-2xl px-4 py-4 font-semibold transition-all disabled:opacity-50 disabled:pointer-events-none";

  const variantStyles: Record<ButtonVariant, { classes: string; spinnerColor: string }> = {
    primary: {
      classes: "bg-primary text-white hover:bg-primary-hover",
      spinnerColor: "#ffffff",
    },
    secondary: {
      classes: "bg-secondary text-white hover:bg-secondary-hover",
      spinnerColor: "#ffffff",
    },
    outline: {
      classes: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
      spinnerColor: "#000000", 
    },
  };

  const currentVariant = variantStyles[variant];

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${currentVariant.classes}`}
    >
      {loading && <LoadingSpinner fill={currentVariant.spinnerColor} />}
      <span>{children}</span>
    </button>
  );
}