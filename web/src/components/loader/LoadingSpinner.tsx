import {Loader2} from "lucide-react";

export default function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  return (
    <div className="flex items-center gap-4">
      <Loader2 className="w-4 h-4 animate-spin" />
    </div>
  );
}