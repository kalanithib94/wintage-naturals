import Link from "next/link";
import { Leaf, Droplets, Heart, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const values = [
  { icon: Leaf, title: "Pure ingredients" },
  { icon: Droplets, title: "Cold-process cured" },
  { icon: Heart, title: "Hand-poured" },
  { icon: Star, title: "Loved locally" },
];

export function TrustStrip() {
  return (
    <section className="bg-mesh-forest grain py-8 text-cream sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream/10">
                  <v.icon className="h-4 w-4 text-terracotta-300" />
                </div>
                <p className="text-sm font-medium text-cream/90">{v.title}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-3 border-t border-cream/10 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
            <p className="max-w-xs text-sm text-cream/70">
              &ldquo;You can feel the quality in every wash.&rdquo; — Priya, Bangalore
            </p>
            <Link href="/shop">
              <Button size="sm" variant="secondary">
                Start Shopping
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
