import { useState } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function BaseImage({ image, width = 100, height = 100, className = "" }: { image: string, width?: number, height?: number, className?: string }) {
    console.log(image, width, height);
const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="relative flex items-center justify-center w-full">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-default-100/50 backdrop-blur-[1px]">
          <Loader2 strokeWidth={4} className="animate-spin mb-5" />
        </div>
      )}
    <Image src={image} alt="Preview" width={width} height={height} onLoad={() => setIsLoading(false)} className={cn(className)} />
    </div>
  );
}