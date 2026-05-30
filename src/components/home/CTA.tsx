import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-gradient-to-br from-sage-100 via-cream to-terracotta/10 py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-serif text-4xl font-light text-forest sm:text-5xl">
          Ready to feel the difference?
        </h2>
        <p className="mt-4 text-lg text-forest/60">
          Order today with Cash on Delivery. UPI payments coming soon.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/shop">
            <Button size="lg">
              Start Shopping
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Ask a Question
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
