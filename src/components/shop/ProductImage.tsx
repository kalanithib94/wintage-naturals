import Image from "next/image";
import { cn } from "@/lib/utils";

const categoryEmojis: Record<string, string> = {
  "herbal-botanical": "🌿",
  "floral-collection": "🌸",
  "charcoal-detox": "🖤",
  moisturizing: "🥥",
  "citrus-fresh": "🍋",
  unscented: "✨",
  "gift-sets": "🎁",
};

export function ProductImage({
  image,
  category,
  name,
  compact = false,
  className,
}: {
  image?: string;
  category: string;
  name: string;
  compact?: boolean;
  className?: string;
}) {
  const emoji = categoryEmojis[category] ?? "🧼";

  if (image) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-sage-100",
          compact ? "aspect-[4/3]" : "aspect-square",
          className,
        )}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes={compact ? "(max-width: 768px) 50vw, 25vw" : "(max-width: 768px) 100vw, 25vw"}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center bg-gradient-to-br from-sage-100 via-cream to-terracotta/10 transition-transform duration-300 group-hover:scale-[1.03]",
        compact ? "aspect-[4/3] text-4xl" : "aspect-square text-6xl",
        className,
      )}
    >
      {emoji}
    </div>
  );
}
