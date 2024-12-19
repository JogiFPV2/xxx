import { ImageIcon } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductImageProps {
  src: string;
  alt: string;
}

export function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <div className="overflow-hidden rounded-md border bg-muted">
      <AspectRatio ratio={16 / 9}>
        <div className="h-full w-full relative">
          <img
            src={src}
            alt={alt}
            className="object-cover w-full h-full transition-all hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://dummyimage.com/160x90/666/fff&text=${encodeURIComponent(
                alt.split(" ")[0],
              )}`;
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/50">
            <ImageIcon className="h-6 w-6 text-white" />
          </div>
        </div>
      </AspectRatio>
    </div>
  );
}
