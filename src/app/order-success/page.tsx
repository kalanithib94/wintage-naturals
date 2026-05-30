"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Banknote } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/data/products";

interface StoredOrder {
  orderId: string;
  total: number;
  paymentMethod: string;
  details: { fullName: string; phone: string; address: string; city: string };
}

export default function OrderSuccessPage() {
  const [order, setOrder] = useState<StoredOrder | null>(null);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("wintage-last-order");
      if (stored) setOrder(JSON.parse(stored));
    } catch {
      /* ignore */
    }
  }, []);

  const orderId = order?.orderId ?? "WN-000000";

  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sage-100">
        <CheckCircle2 className="h-10 w-10 text-sage-500" />
      </div>

      <h1 className="mt-8 font-serif text-4xl font-light text-forest">
        Order placed successfully!
      </h1>
      <p className="mt-4 text-forest/60">
        Thank you for choosing Wintage Naturals. We&apos;ll prepare your soaps
        with care.
      </p>

      <div className="mt-10 rounded-2xl border border-sage-200 bg-white p-8 text-left">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage-500">
          Order ID
        </p>
        <p className="mt-1 font-serif text-2xl font-bold text-forest">{orderId}</p>

        {order && (
          <>
            <div className="mt-6 flex items-center gap-2 rounded-xl bg-sage-100 px-4 py-3">
              <Banknote className="h-5 w-5 text-forest" />
              <div>
                <p className="text-sm font-medium text-forest">
                  Cash on Delivery — {formatPrice(order.total)}
                </p>
                <p className="text-xs text-forest/60">
                  Pay when your order is delivered
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-1 text-sm text-forest/70">
              <p className="font-medium text-forest">{order.details.fullName}</p>
              <p>{order.details.phone}</p>
              <p>
                {order.details.address}, {order.details.city}
              </p>
            </div>
          </>
        )}
      </div>

      <p className="mt-8 text-sm text-forest/60">
        We&apos;ll call you within 24 hours to confirm your order and delivery
        timeline.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/shop">
          <Button>
            Continue Shopping
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
