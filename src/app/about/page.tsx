import { Metadata } from "next";
import { Heart, Home, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Learn about Wintage Naturals — a home-based artisan soap startup.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-sage-100 via-cream to-terracotta/10 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            About Us
          </p>
          <h1 className="mt-3 font-serif text-5xl font-light text-forest">
            Born in a home kitchen,
            <span className="block font-semibold italic text-terracotta">
              crafted for your skin.
            </span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="prose prose-forest max-w-none space-y-6 text-forest/70 leading-relaxed">
          <p>
            Wintage Naturals started as a passion project — a home-based startup
            where every soap is made by hand, in small batches, using recipes
            passed down and refined over time.
          </p>
          <p>
            We believe skincare should be simple, honest, and rooted in nature.
            No harsh chemicals, no mass production — just pure oils, botanicals,
            and the patience to cold-process and cure each bar for weeks before
            it reaches you.
          </p>
          <p>
            From our kitchen to your bathroom, every bar carries the warmth of
            something made with intention. Whether you&apos;re looking for a
            calming lavender evening ritual or a detoxifying charcoal cleanse,
            we have something crafted just for you.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: Home,
              title: "Home-Based",
              text: "Made fresh in our home studio, not a factory.",
            },
            {
              icon: Heart,
              title: "Hand-Poured",
              text: "Every bar is individually crafted and inspected.",
            },
            {
              icon: Sparkles,
              title: "Small Batch",
              text: "Limited quantities ensure freshness and quality.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-sage-200 bg-white p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage-100">
                <item.icon className="h-5 w-5 text-forest" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-forest">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-forest/60">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
