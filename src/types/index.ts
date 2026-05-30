export type CategorySlug =
  | "herbal-botanical"
  | "floral-collection"
  | "charcoal-detox"
  | "moisturizing"
  | "citrus-fresh"
  | "unscented"
  | "gift-sets";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  emoji: string;
  color: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  weight: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  badge?: string;
  featured?: boolean;
  /** Path under /public, e.g. /images/products/neem-tulsi-herbal-bar.jpg */
  image?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ShippingDetails {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  notes?: string;
}

export type PaymentMethod = "cod" | "upi";
