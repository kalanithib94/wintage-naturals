import Link from "next/link";
import { Product } from "@/types";
import { formatPrice } from "@/data/products";
import { Badge } from "@/components/ui/Badge";
import { AddToCartButton } from "@/components/shop/AddToCartButton";
import { ProductImage } from "@/components/shop/ProductImage";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-sage-200/80 bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
      )}
    >
      <Link href={`/product/${product.slug}`} className="relative block">
        <ProductImage
          image={product.image}
          category={product.category}
          name={product.name}
          compact={compact}
        />
        {product.badge && (
          <div className="absolute left-2 top-2">
            <Badge className="text-[10px]">{product.badge}</Badge>
          </div>
        )}
      </Link>

      <div className={cn("flex flex-1 flex-col", compact ? "p-3" : "p-5")}>
        <Link href={`/product/${product.slug}`}>
          <h3
            className={cn(
              "font-serif font-semibold text-forest transition-colors group-hover:text-terracotta",
              compact ? "text-sm leading-snug" : "text-lg",
            )}
          >
            {product.name}
          </h3>
        </Link>
        {!compact && (
          <>
            <p className="mt-1 text-xs text-sage-500">{product.weight}</p>
            <p className="mt-2 line-clamp-2 flex-1 text-sm text-forest/60">
              {product.description}
            </p>
          </>
        )}
        <div
          className={cn(
            "flex items-center justify-between gap-2",
            compact ? "mt-2" : "mt-4",
          )}
        >
          <span
            className={cn(
              "font-serif font-bold text-forest",
              compact ? "text-base" : "text-xl",
            )}
          >
            {formatPrice(product.price)}
          </span>
          <AddToCartButton product={product} size="sm" />
        </div>
      </div>
    </article>
  );
}
