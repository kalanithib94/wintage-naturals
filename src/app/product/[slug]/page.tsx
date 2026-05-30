import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { getProductBySlug } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import { formatPrice } from "@/data/products";
import { Badge } from "@/components/ui/Badge";
import { AddToCartButton } from "@/components/shop/AddToCartButton";
import { ProductImage } from "@/components/shop/ProductImage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.category);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/shop"
        className="inline-flex items-center gap-2 text-sm text-sage-500 transition-colors hover:text-forest"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to shop
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <div className="group overflow-hidden rounded-3xl border border-sage-200">
          <ProductImage
            image={product.image}
            category={product.category}
            name={product.name}
            className="rounded-3xl"
          />
        </div>

        <div>
          {product.badge && (
            <div className="mb-4">
              <Badge>{product.badge}</Badge>
            </div>
          )}

          {category && (
            <Link
              href={`/shop/${category.slug}`}
              className="text-xs font-semibold uppercase tracking-widest text-terracotta hover:underline"
            >
              {category.name}
            </Link>
          )}

          <h1 className="mt-2 font-serif text-4xl font-light text-forest sm:text-5xl">
            {product.name}
          </h1>

          <p className="mt-2 text-sm text-sage-500">{product.weight}</p>

          <p className="mt-6 font-serif text-3xl font-bold text-forest">
            {formatPrice(product.price)}
          </p>

          <p className="mt-6 leading-relaxed text-forest/70">
            {product.description}
          </p>

          <div className="mt-8">
            <AddToCartButton product={product} size="lg" className="w-full sm:w-auto" />
          </div>

          <div className="mt-10 space-y-6 border-t border-sage-200 pt-10">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-sage-500">
                Ingredients
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {product.ingredients.map((ing) => (
                  <li
                    key={ing}
                    className="rounded-full bg-sage-100 px-3 py-1 text-sm text-forest"
                  >
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-sage-500">
                Benefits
              </h3>
              <ul className="mt-3 space-y-2">
                {product.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-2 text-sm text-forest/70"
                  >
                    <Check className="h-4 w-4 text-sage-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
