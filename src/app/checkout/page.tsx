"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Banknote,
  CreditCard,
  Lock,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { generateOrderId } from "@/lib/utils";
import { ShippingDetails } from "@/types";

const SHIPPING_THRESHOLD = 499;
const SHIPPING_FEE = 49;

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "upi">("cod");
  const [submitting, setSubmitting] = useState(false);

  const shipping =
    subtotal >= SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const details: ShippingDetails = {
      fullName: formData.get("fullName") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      address: formData.get("address") as string,
      city: formData.get("city") as string,
      state: formData.get("state") as string,
      pincode: formData.get("pincode") as string,
      notes: (formData.get("notes") as string) || undefined,
    };

    const orderId = generateOrderId();
    const order = {
      orderId,
      items,
      subtotal,
      shipping,
      total,
      paymentMethod,
      details,
      createdAt: new Date().toISOString(),
    };

    sessionStorage.setItem("wintage-last-order", JSON.stringify(order));
    clearCart();
    router.push(`/order-success?order=${orderId}`);
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-serif text-3xl text-forest">Nothing to checkout</h1>
        <p className="mt-3 text-forest/60">Add items to your cart first.</p>
        <Link href="/shop" className="mt-8 inline-block">
          <Button>Go to Shop</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/cart"
        className="inline-flex items-center gap-2 text-sm text-sage-500 hover:text-forest"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to cart
      </Link>

      <h1 className="mt-6 font-serif text-4xl font-light text-forest">Checkout</h1>

      <form onSubmit={handleSubmit} className="mt-10 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-8">
          {/* Shipping */}
          <section className="rounded-2xl border border-sage-200 bg-white p-6">
            <h2 className="font-serif text-xl font-semibold text-forest">
              Delivery Details
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { name: "fullName", label: "Full Name", type: "text", required: true, full: true },
                { name: "phone", label: "Phone Number", type: "tel", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "address", label: "Full Address", type: "text", required: true, full: true },
                { name: "city", label: "City", type: "text", required: true },
                { name: "state", label: "State", type: "text", required: true },
                { name: "pincode", label: "PIN Code", type: "text", required: true },
              ].map((field) => (
                <div
                  key={field.name}
                  className={field.full ? "sm:col-span-2" : undefined}
                >
                  <label
                    htmlFor={field.name}
                    className="block text-xs font-medium uppercase tracking-wider text-sage-500"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    className="mt-1.5 w-full rounded-xl border border-sage-200 bg-cream px-4 py-3 text-sm text-forest outline-none transition-colors focus:border-forest focus:ring-1 focus:ring-forest"
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label
                  htmlFor="notes"
                  className="block text-xs font-medium uppercase tracking-wider text-sage-500"
                >
                  Order Notes (optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Delivery instructions, gift message, etc."
                  className="mt-1.5 w-full rounded-xl border border-sage-200 bg-cream px-4 py-3 text-sm text-forest outline-none transition-colors focus:border-forest focus:ring-1 focus:ring-forest"
                />
              </div>
            </div>
          </section>

          {/* Payment */}
          <section className="rounded-2xl border border-sage-200 bg-white p-6">
            <h2 className="font-serif text-xl font-semibold text-forest">
              Payment Method
            </h2>

            <div className="mt-6 space-y-3">
              <label
                className={`flex cursor-pointer items-start gap-4 rounded-xl border-2 p-4 transition-colors ${
                  paymentMethod === "cod"
                    ? "border-forest bg-sage-100"
                    : "border-sage-200 hover:border-sage-400"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Banknote className="h-5 w-5 text-forest" />
                    <span className="font-medium text-forest">
                      Cash on Delivery (COD)
                    </span>
                    <span className="rounded-full bg-sage-500 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                      Available
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-forest/60">
                    Pay when your order arrives at your doorstep.
                  </p>
                </div>
              </label>

              <label
                className="flex cursor-not-allowed items-start gap-4 rounded-xl border-2 border-sage-200 bg-sage-100/50 p-4 opacity-60"
              >
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  disabled
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-sage-400" />
                    <span className="font-medium text-forest/50">UPI Payment</span>
                    <span className="rounded-full bg-terracotta/20 px-2 py-0.5 text-[10px] font-bold uppercase text-terracotta">
                      Coming Soon
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-forest/40">
                    Google Pay, PhonePe, Paytm — launching soon.
                  </p>
                </div>
              </label>
            </div>
          </section>
        </div>

        {/* Order summary */}
        <div className="lg:col-span-2">
          <div className="sticky top-24 rounded-2xl border border-sage-200 bg-white p-6">
            <h2 className="font-serif text-xl font-semibold text-forest">
              Your Order
            </h2>

            <ul className="mt-6 space-y-3 border-b border-sage-200 pb-6">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex justify-between text-sm">
                  <span className="text-forest/70">
                    {product.name} × {quantity}
                  </span>
                  <span className="font-medium">
                    {formatPrice(product.price * quantity)}
                  </span>
                </li>
              ))}
            </ul>

            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-forest/60">Subtotal</dt>
                <dd>{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-forest/60">Shipping</dt>
                <dd>{shipping === 0 ? "Free" : formatPrice(shipping)}</dd>
              </div>
              <div className="flex justify-between border-t border-sage-200 pt-2 text-base font-semibold">
                <dt>Total (COD)</dt>
                <dd className="font-serif text-xl">{formatPrice(total)}</dd>
              </div>
            </dl>

            <Button
              type="submit"
              size="lg"
              className="mt-6 w-full"
              disabled={submitting}
            >
              <CheckCircle2 className="h-4 w-4" />
              {submitting ? "Placing Order..." : "Place Order"}
            </Button>

            <p className="mt-4 flex items-center justify-center gap-1 text-xs text-sage-500">
              <Lock className="h-3 w-3" />
              Your information is kept private
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
