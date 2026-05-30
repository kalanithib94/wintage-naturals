import { Metadata } from "next";
import { products } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { CategoryFilter } from "@/components/shop/CategoryFilter";

export const metadata: Metadata = {
  title: "Shop All Soaps",
  description: "Browse our full collection of handcrafted natural soaps.",
};

export default function ShopPage() {
  return (
    <div className="bg-mesh-warm bg-botanical min-h-full py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Shop
          </p>
          <h1 className="mt-2 font-serif text-3xl font-light text-forest sm:text-4xl">
            All soaps
          </h1>
          <p className="mt-2 text-sm text-forest/60">
            {products.length} handcrafted varieties — filter by category below.
          </p>
        </div>

        <div className="mt-6">
          <CategoryFilter />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
