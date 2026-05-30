import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";

export function Categories() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Collections
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light text-forest sm:text-5xl">
            Find your perfect bar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-forest/60">
            From calming florals to energizing citrus — browse by mood, skin type,
            or scent preference.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/shop/${category.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-sage-200 bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sage-400 hover:shadow-lg"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
              />
              <span className="text-4xl">{category.emoji}</span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-forest">
                {category.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-forest/60">
                {category.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-terracotta opacity-0 transition-opacity group-hover:opacity-100">
                Explore
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
