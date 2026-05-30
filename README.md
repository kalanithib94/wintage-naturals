# Wintage Naturals — Website

Handcrafted artisan soap e-commerce site for **Wintage Naturals**, a home-based natural soap startup.

## Design Inspiration

The visual direction draws from 10 leading modern beauty & natural product brands:

| Brand | What we borrowed |
|-------|------------------|
| **Lush** | Playful handmade personality, bold product storytelling |
| **Glossier** | Clean whitespace, minimal navigation, soft UI |
| **Aesop** | Refined serif typography, premium feel |
| **Herbivore** | Soft earthy palette, botanical mood |
| **Drunk Elephant** | Clear product cards with benefit tags |
| **The Body Shop** | Ethical/natural messaging, trust signals |
| **Tata Harper** | Organic luxury, ingredient transparency |
| **Kiehl's** | Heritage storytelling sections |
| **Fenty Beauty** | Strong hero with clear CTAs |
| **Organic skincare templates** | Category-first navigation, conversion layout |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, categories, featured products, testimonials |
| `/shop` | Full product catalog with category filters |
| `/shop/[category]` | Category-specific product listing |
| `/product/[slug]` | Product detail with ingredients & benefits |
| `/cart` | Shopping cart with quantity controls |
| `/checkout` | Delivery form + **COD payment** (UPI coming soon) |
| `/order-success` | Order confirmation |
| `/custom-order` | Custom soap request form |
| `/about` | Brand story |
| `/contact` | Contact form |

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** icons
- Cart state persisted in `localStorage`

## Getting Started

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push the `website` folder to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Set root directory to `website`
4. Deploy — no extra config needed

## Payment

- **COD (Cash on Delivery)** — fully functional checkout flow
- **UPI** — UI placeholder marked "Coming Soon" for future integration

## Future Enhancements

- UPI / Razorpay payment integration
- Real product photography
- Admin panel for order management
- Email notifications on order placement
