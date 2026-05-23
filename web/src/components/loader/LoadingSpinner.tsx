import {Spinner} from "@heroui/react";

export default function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  return (
    <div className="flex items-center gap-4">
      <Spinner size={size}/>
    </div>
  );
}