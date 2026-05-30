import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    slug: "neem-tulsi-herbal-bar",
    name: "Neem & Tulsi Herbal Bar",
    category: "herbal-botanical",
    price: 149,
    weight: "100g",
    description:
      "A time-honoured blend of neem and holy basil, cold-processed to preserve natural antibacterial properties. Ideal for everyday cleansing with an earthy, grounding aroma.",
    ingredients: ["Coconut Oil", "Neem Extract", "Tulsi", "Olive Oil", "Lye"],
    benefits: ["Antibacterial", "Balancing", "Handmade"],
    badge: "Bestseller",
    featured: true,
  },
  {
    id: "2",
    slug: "aloe-vera-botanical",
    name: "Aloe Vera Botanical Bar",
    category: "herbal-botanical",
    price: 159,
    weight: "100g",
    description:
      "Soothing aloe vera woven into a creamy lather that calms irritated skin while cleansing gently.",
    ingredients: ["Aloe Vera", "Coconut Oil", "Castor Oil", "Green Tea", "Lye"],
    benefits: ["Soothing", "Hydrating", "Vegan"],
    featured: true,
  },
  {
    id: "3",
    slug: "rose-petal-soap",
    name: "Rose Petal Soap",
    category: "floral-collection",
    price: 179,
    weight: "100g",
    description:
      "Real dried rose petals suspended in a luxurious bar with a soft, romantic fragrance.",
    ingredients: ["Rose Petals", "Shea Butter", "Coconut Oil", "Rose Essential Oil", "Lye"],
    benefits: ["Aromatherapy", "Moisturizing", "Handmade"],
    badge: "New",
    featured: true,
  },
  {
    id: "4",
    slug: "lavender-dream",
    name: "Lavender Dream Bar",
    category: "floral-collection",
    price: 169,
    weight: "100g",
    description:
      "French lavender essential oil creates a calming evening ritual for body and mind.",
    ingredients: ["Lavender Oil", "Olive Oil", "Coconut Oil", "Kaolin Clay", "Lye"],
    benefits: ["Relaxing", "Gentle", "Natural"],
  },
  {
    id: "5",
    slug: "jasmine-bloom",
    name: "Jasmine Bloom Soap",
    category: "floral-collection",
    price: 189,
    weight: "100g",
    description:
      "Delicate jasmine notes paired with silk-smooth shea for an indulgent floral experience.",
    ingredients: ["Jasmine Extract", "Shea Butter", "Sweet Almond Oil", "Lye"],
    benefits: ["Luxurious", "Floral", "Nourishing"],
  },
  {
    id: "6",
    slug: "activated-charcoal-detox",
    name: "Activated Charcoal Detox",
    category: "charcoal-detox",
    price: 179,
    weight: "100g",
    description:
      "Deep-cleansing charcoal draws out impurities while tea tree keeps skin fresh and clear.",
    ingredients: ["Activated Charcoal", "Tea Tree Oil", "Coconut Oil", "Bentonite Clay", "Lye"],
    benefits: ["Deep Cleanse", "Oil Control", "Detox"],
    badge: "Popular",
    featured: true,
  },
  {
    id: "7",
    slug: "bamboo-charcoal-clay",
    name: "Bamboo Charcoal & Clay",
    category: "charcoal-detox",
    price: 189,
    weight: "100g",
    description:
      "Bamboo charcoal and French green clay combine for a purifying bar suited to combination skin.",
    ingredients: ["Bamboo Charcoal", "Green Clay", "Olive Oil", "Eucalyptus", "Lye"],
    benefits: ["Purifying", "Matte Finish", "Natural"],
  },
  {
    id: "8",
    slug: "shea-butter-luxe",
    name: "Shea Butter Luxe Bar",
    category: "moisturizing",
    price: 199,
    weight: "120g",
    description:
      "Triple-whipped shea butter creates an exceptionally creamy bar that leaves skin velvety soft.",
    ingredients: ["Raw Shea Butter", "Cocoa Butter", "Coconut Oil", "Vitamin E", "Lye"],
    benefits: ["Ultra Moisturizing", "Rich Lather", "Dry Skin"],
    badge: "Premium",
    featured: true,
  },
  {
    id: "9",
    slug: "coconut-milk-bar",
    name: "Coconut Milk Bar",
    category: "moisturizing",
    price: 169,
    weight: "100g",
    description:
      "Fresh coconut milk replaces water in our cold-process recipe for extra creaminess.",
    ingredients: ["Coconut Milk", "Coconut Oil", "Olive Oil", "Honey", "Lye"],
    benefits: ["Creamy", "Nourishing", "Gentle"],
  },
  {
    id: "10",
    slug: "lemongrass-zest",
    name: "Lemongrass Zest Bar",
    category: "citrus-fresh",
    price: 149,
    weight: "100g",
    description:
      "Zesty lemongrass and ginger root awaken the senses with every morning shower.",
    ingredients: ["Lemongrass Oil", "Ginger Extract", "Coconut Oil", "Palm-Free Base", "Lye"],
    benefits: ["Energizing", "Fresh", "Antibacterial"],
  },
  {
    id: "11",
    slug: "orange-blossom-citrus",
    name: "Orange Blossom Citrus",
    category: "citrus-fresh",
    price: 159,
    weight: "100g",
    description:
      "Sweet orange and neroli create a sunshine-bright bar perfect for summer days.",
    ingredients: ["Sweet Orange Oil", "Neroli", "Olive Oil", "Coconut Oil", "Lye"],
    benefits: ["Uplifting", "Bright", "Natural"],
    featured: true,
  },
  {
    id: "12",
    slug: "pure-oatmeal-gentle",
    name: "Pure Oatmeal Gentle Bar",
    category: "unscented",
    price: 139,
    weight: "100g",
    description:
      "Colloidal oatmeal and zero fragrance — the safest choice for babies and sensitive skin.",
    ingredients: ["Colloidal Oatmeal", "Olive Oil", "Coconut Oil", "Calendula", "Lye"],
    benefits: ["Hypoallergenic", "Fragrance-Free", "Gentle"],
    badge: "Sensitive Skin",
  },
  {
    id: "13",
    slug: "calendula-unscented",
    name: "Calendula Unscented Bar",
    category: "unscented",
    price: 149,
    weight: "100g",
    description:
      "Healing calendula petals in a completely unscented formula for the most delicate skin.",
    ingredients: ["Calendula", "Olive Oil", "Castor Oil", "Lye"],
    benefits: ["Healing", "Unscented", "Gentle"],
  },
  {
    id: "14",
    slug: "wellness-trio-gift-set",
    name: "Wellness Trio Gift Set",
    category: "gift-sets",
    price: 449,
    weight: "3 × 80g",
    description:
      "Neem Herbal, Lavender Dream, and Shea Luxe — a curated trio in kraft gift packaging.",
    ingredients: ["Assorted Natural Bars"],
    benefits: ["Gift Ready", "Eco Packaging", "Best Value"],
    badge: "Gift Favorite",
    featured: true,
  },
  {
    id: "15",
    slug: "floral-duo-gift-set",
    name: "Floral Duo Gift Set",
    category: "gift-sets",
    price: 329,
    weight: "2 × 100g",
    description:
      "Rose Petal and Jasmine Bloom paired with a hand-tied dried flower accent.",
    ingredients: ["Rose Petal Bar", "Jasmine Bloom Bar"],
    benefits: ["Romantic", "Gift Ready", "Hand Wrapped"],
  },
  {
    id: "16",
    slug: "detox-duo-gift-set",
    name: "Detox Duo Gift Set",
    category: "gift-sets",
    price: 349,
    weight: "2 × 100g",
    description:
      "Charcoal Detox and Bamboo Charcoal bars for the skincare enthusiast in your life.",
    ingredients: ["Charcoal Detox Bar", "Bamboo Charcoal Bar"],
    benefits: ["Detox", "Gift Ready", "Men & Women"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
