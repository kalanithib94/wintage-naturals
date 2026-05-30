import Link from "next/link";
import { ArrowRight, Sparkles, Truck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-mesh-forest grain text-cream">
      <div className="pointer-events-none absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-terracotta/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-sage-400/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8 lg:px-8 lg:py-12">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-cream/90 backdrop-blur-sm">
            <Sparkles className="h-3 w-3" />
            Handcrafted · Natural · COD
          </div>

          <h1 className="font-serif text-4xl font-light leading-[1.08] sm:text-5xl lg:text-6xl">
            Nature&apos;s finest,
            <span className="block font-semibold italic text-terracotta-300">
              poured with care.
            </span>
          </h1>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/75 sm:text-base">
            Small-batch artisan soaps from pure oils and botanicals — made fresh in
            our home studio.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/shop">
              <Button size="md" variant="secondary">
                Shop Collection
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/custom-order">
              <Button
                size="md"
                variant="outline"
                className="border-cream/40 text-cream hover:bg-cream hover:text-forest"
              >
                Custom Orders
              </Button>
            </Link>
          </div>

          {/* Mobile/tablet: compact perks — replaces the big visual card */}
          <div className="mt-5 flex flex-wrap gap-2 lg:hidden">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/15 bg-cream/10 px-3 py-1.5 text-xs text-cream/80">
              <Truck className="h-3.5 w-3.5" />
              Free ship ₹499+
            </span>
            <span className="rounded-full border border-cream/15 bg-cream/10 px-3 py-1.5 text-xs text-cream/80">
              From ₹139
            </span>
          </div>

          <div className="mt-6 flex divide-x divide-cream/15">
            {[
              { value: "16+", label: "Varieties" },
              { value: "100%", label: "Natural" },
              { value: "COD", label: "Pay on delivery" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="pr-5 [&:not(:first-child)]:pl-5"
              >
                <p className="font-serif text-lg font-semibold sm:text-xl">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-cream/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop only — compact side visual (placeholder until real photos) */}
        <div className="relative hidden lg:block">
          <div className="relative h-64 overflow-hidden rounded-2xl border border-cream/15 shadow-xl shadow-black/25 xl:h-72">
            <div className="absolute inset-0 bg-gradient-to-br from-sage-500/40 via-terracotta/30 to-forest-deep" />
            <div className="absolute inset-0 bg-botanical opacity-40" />
            <div className="relative flex h-full flex-col items-center justify-center px-6 py-4">
              <span className="text-6xl drop-shadow-lg">🧼</span>
              <p className="mt-2 font-serif text-xl font-semibold">Artisan Soap</p>
              <p className="text-[11px] text-cream/60">Cold-process · Hand-cut</p>
            </div>
            <div className="absolute right-3 top-3 rounded-lg bg-cream px-2.5 py-1.5 text-forest shadow-md">
              <p className="text-[10px] font-medium text-sage-500">Free ship ₹499+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
