"use client";

import { Product } from "@/types";
import { useCart } from "@/components/cart/CartProvider";
import { Button } from "@/components/ui/Button";
import { ShoppingBag, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function AddToCartButton({
  product,
  size = "md",
  className,
}: {
  product: Product;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const { items, addItem, updateQuantity } = useCart();
  const quantity =
    items.find((i) => i.product.id === product.id)?.quantity ?? 0;

  if (quantity > 0) {
    return (
      <div
        className={cn(
          "inline-flex items-center rounded-full bg-terracotta text-white shadow-sm",
          size === "sm" && "h-9 gap-0.5 px-1",
          size === "md" && "h-11 gap-1 px-1.5",
          size === "lg" && "h-12 gap-1.5 px-2",
          className,
        )}
        role="group"
        aria-label={`Quantity for ${product.name}`}
      >
        <button
          type="button"
          onClick={() => updateQuantity(product.id, quantity - 1)}
          className={cn(
            "flex items-center justify-center rounded-full transition-colors hover:bg-white/20",
            size === "sm" && "h-7 w-7",
            size === "md" && "h-9 w-9",
            size === "lg" && "h-9 w-9",
          )}
          aria-label="Decrease quantity"
        >
          <Minus className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />
        </button>
        <span
          className={cn(
            "min-w-[1.5rem] text-center font-semibold tabular-nums",
            size === "sm" && "text-sm",
            size === "md" && "text-sm",
            size === "lg" && "text-base",
          )}
          aria-live="polite"
        >
          {quantity}
        </span>
        <button
          type="button"
          onClick={() => updateQuantity(product.id, quantity + 1)}
          className={cn(
            "flex items-center justify-center rounded-full transition-colors hover:bg-white/20",
            size === "sm" && "h-7 w-7",
            size === "md" && "h-9 w-9",
            size === "lg" && "h-9 w-9",
          )}
          aria-label="Increase quantity"
        >
          <Plus className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />
        </button>
      </div>
    );
  }

  return (
    <Button
      variant="secondary"
      size={size}
      onClick={() => addItem(product)}
      className={className}
    >
      <ShoppingBag className="h-4 w-4" />
      Add
    </Button>
  );
}
