"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/Button";

const SHIPPING_THRESHOLD = 499;
const SHIPPING_FEE = 49;

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  const shipping = subtotal >= SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <ShoppingBag className="mx-auto h-16 w-16 text-sage-300" />
        <h1 className="mt-6 font-serif text-3xl text-forest">Your cart is empty</h1>
        <p className="mt-3 text-forest/60">
          Discover our handcrafted soaps and add something lovely.
        </p>
        <Link href="/shop" className="mt-8 inline-block">
          <Button size="lg">
            Browse Shop
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl font-light text-forest">Your Cart</h1>
      <p className="mt-2 text-forest/60">{items.length} item(s) in your cart</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="flex gap-4 rounded-2xl border border-sage-200 bg-white p-4 sm:gap-6 sm:p-6"
            >
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-sage-100 text-3xl sm:h-24 sm:w-24">
                🧼
              </div>
              <div className="flex flex-1 flex-col">
                <div className="flex justify-between gap-4">
                  <div>
                    <Link
                      href={`/product/${product.slug}`}
                      className="font-serif text-lg font-semibold text-forest hover:text-terracotta"
                    >
                      {product.name}
                    </Link>
                    <p className="text-xs text-sage-500">{product.weight}</p>
                  </div>
                  <p className="font-serif text-lg font-bold text-forest">
                    {formatPrice(product.price * quantity)}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2 rounded-full border border-sage-200">
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-sage-100"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-sage-100"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(product.id)}
                    className="flex items-center gap-1 text-sm text-terracotta hover:underline"
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-2xl border border-sage-200 bg-white p-6">
          <h2 className="font-serif text-xl font-semibold text-forest">
            Order Summary
          </h2>

          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-forest/60">Subtotal</dt>
              <dd className="font-medium">{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-forest/60">Shipping</dt>
              <dd className="font-medium">
                {shipping === 0 ? "Free" : formatPrice(shipping)}
              </dd>
            </div>
            {subtotal < SHIPPING_THRESHOLD && subtotal > 0 && (
              <p className="text-xs text-sage-500">
                Add {formatPrice(SHIPPING_THRESHOLD - subtotal)} more for free shipping
              </p>
            )}
            <div className="flex justify-between border-t border-sage-200 pt-3 text-base">
              <dt className="font-semibold">Total</dt>
              <dd className="font-serif text-xl font-bold text-forest">
                {formatPrice(total)}
              </dd>
            </div>
          </dl>

          <Link href="/checkout" className="mt-6 block">
            <Button size="lg" className="w-full">
              Proceed to Checkout
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>

          <p className="mt-4 text-center text-xs text-sage-500">
            Cash on Delivery · UPI coming soon
          </p>
        </div>
      </div>
    </div>
  );
}
