"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

export function CategoryFilter({ activeCategory }: { activeCategory?: string }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/shop"
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium transition-colors",
          !activeCategory
            ? "bg-forest text-cream"
            : "bg-sage-100 text-forest hover:bg-sage-200",
        )}
      >
        All
      </Link>
      {categories.map((cat) => {
        const isActive =
          activeCategory === cat.slug || pathname === `/shop/${cat.slug}`;
        return (
          <Link
            key={cat.slug}
            href={`/shop/${cat.slug}`}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-forest text-cream"
                : "bg-sage-100 text-forest hover:bg-sage-200",
            )}
          >
            {cat.emoji} {cat.name}
          </Link>
        );
      })}
    </div>
  );
}
