import { Leaf, Droplets, Heart, Recycle } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Pure Ingredients",
    description:
      "Cold-pressed oils, dried botanicals, and essential oils — nothing artificial.",
  },
  {
    icon: Droplets,
    title: "Cold-Process Method",
    description:
      "Slow-cured for 4–6 weeks to preserve glycerin and natural moisturizers.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "Every bar is hand-poured, hand-cut, and inspected in our home studio.",
  },
  {
    icon: Recycle,
    title: "Eco-Conscious",
    description:
      "Minimal packaging, plastic-free wraps, and locally sourced where possible.",
  },
];

export function BrandStory() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 text-cream">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-sage-400 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-terracotta blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-300">
            Why Wintage Naturals
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light sm:text-5xl">
            Skincare rooted in tradition
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/70">
            Inspired by generations of natural remedies, we blend ancient wisdom
            with modern craftsmanship — one bar at a time.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/20">
                <value.icon className="h-5 w-5 text-terracotta-300" />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/60">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
