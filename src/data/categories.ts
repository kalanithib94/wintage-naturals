import { Category } from "@/types";

export const categories: Category[] = [
  {
    slug: "herbal-botanical",
    name: "Herbal & Botanical",
    description: "Infused with neem, tulsi, and forest herbs for gentle daily cleansing.",
    emoji: "🌿",
    color: "from-sage-400 to-sage-600",
  },
  {
    slug: "floral-collection",
    name: "Floral Collection",
    description: "Rose, lavender, and jasmine — soft scents from handpicked petals.",
    emoji: "🌸",
    color: "from-blush-300 to-blush-500",
  },
  {
    slug: "charcoal-detox",
    name: "Charcoal & Detox",
    description: "Activated charcoal bars for deep cleansing and oily skin balance.",
    emoji: "🖤",
    color: "from-charcoal-600 to-charcoal-800",
  },
  {
    slug: "moisturizing",
    name: "Moisturizing & Shea",
    description: "Rich shea butter and coconut oil for silky, nourished skin.",
    emoji: "🥥",
    color: "from-cream-300 to-terracotta-300",
  },
  {
    slug: "citrus-fresh",
    name: "Citrus & Fresh",
    description: "Bright lemon, orange, and lemongrass for an energizing wash.",
    emoji: "🍋",
    color: "from-citrus-300 to-citrus-500",
  },
  {
    slug: "unscented",
    name: "Unscented & Sensitive",
    description: "Fragrance-free bars crafted for delicate and reactive skin.",
    emoji: "✨",
    color: "from-cream-100 to-sage-200",
  },
  {
    slug: "gift-sets",
    name: "Gift Sets",
    description: "Curated bundles wrapped in eco-friendly packaging — perfect for gifting.",
    emoji: "🎁",
    color: "from-terracotta-400 to-sage-500",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
