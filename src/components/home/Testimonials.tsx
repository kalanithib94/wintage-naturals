import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    location: "Bangalore",
    text: "The Neem & Tulsi bar cleared my skin without drying it out. You can feel the quality in every wash.",
    rating: 5,
  },
  {
    name: "Ananya M.",
    location: "Mumbai",
    text: "Ordered the Wellness Trio as a gift — the packaging was beautiful and the scents are divine.",
    rating: 5,
  },
  {
    name: "Rahul K.",
    location: "Delhi",
    text: "Finally found a charcoal soap that actually works. COD made it easy to try without any hassle.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Reviews
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light text-forest">
            Loved by our community
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-sage-200 bg-cream p-8"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-terracotta text-terracotta"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-forest/70">
                &ldquo;{t.text}&rdquo;
              </p>
              <footer className="mt-6">
                <p className="font-medium text-forest">{t.name}</p>
                <p className="text-xs text-sage-500">{t.location}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
