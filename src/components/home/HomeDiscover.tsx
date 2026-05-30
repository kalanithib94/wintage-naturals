import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/Button";

export function HomeDiscover() {
  const featured = getFeaturedProducts().slice(0, 4);

  return (
    <section className="relative bg-mesh-warm bg-botanical py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Categories — horizontal scroll, compact */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">
              Collections
            </p>
            <h2 className="mt-1 font-serif text-2xl font-light text-forest sm:text-3xl">
              Shop by category
            </h2>
          </div>
          <Link href="/shop" className="hidden shrink-0 sm:block">
            <Button variant="ghost" size="sm">
              All soaps <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        <div className="hide-scrollbar -mx-4 mt-5 flex gap-3 overflow-x-auto px-4 pb-1 sm:-mx-0 sm:px-0">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop/${cat.slug}`}
              className="group flex shrink-0 items-center gap-3 rounded-2xl border border-sage-200/80 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-sage-400 hover:shadow-md"
            >
              <span className="text-2xl">{cat.emoji}</span>
              <div>
                <p className="whitespace-nowrap font-serif text-sm font-semibold text-forest">
                  {cat.name}
                </p>
                <p className="text-[11px] text-forest/50">Explore →</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured — 4 products only */}
        <div className="mt-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">
              Best Sellers
            </p>
            <h2 className="mt-1 font-serif text-2xl font-light text-forest sm:text-3xl">
              Customer favourites
            </h2>
          </div>
          <Link href="/shop" className="sm:hidden">
            <Button variant="ghost" size="sm">View all</Button>
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
