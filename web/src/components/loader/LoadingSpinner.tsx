import {Loader2} from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  return (
    <div className="flex items-center gap-4">
      <Loader2 className={cn("w-4 h-4 animate-spin", size === "sm" ? "w-4 h-4" : size === "md" ? "w-6 h-6" : "w-8 h-8")} />
    </div>
  );
}