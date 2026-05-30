"use client";

import { FormEvent, useState } from "react";
import { Palette, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

const scentOptions = [
  "Lavender", "Rose", "Jasmine", "Lemongrass", "Neem & Tulsi",
  "Unscented", "Citrus Blend", "Sandalwood", "Other (describe below)",
];

const skinTypes = ["Normal", "Oily", "Dry", "Sensitive", "Combination"];

export default function CustomOrderPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-terracotta/10 via-cream to-sage-100 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-terracotta/10">
            <Palette className="h-7 w-7 text-terracotta" />
          </div>
          <h1 className="mt-6 font-serif text-4xl font-light text-forest sm:text-5xl">
            Custom Soap Orders
          </h1>
          <p className="mt-4 text-lg text-forest/60">
            Want a unique scent, shape, or ingredient blend? Tell us your vision
            and we&apos;ll craft it for you.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        {submitted ? (
          <div className="rounded-2xl border border-sage-200 bg-white py-16 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-sage-500" />
            <h2 className="mt-4 font-serif text-2xl text-forest">
              Request received!
            </h2>
            <p className="mt-2 text-forest/60">
              We&apos;ll review your custom order and respond with a quote within
              2–3 business days.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-sage-200 bg-white p-6 sm:p-8"
          >
            <div className="mb-8 flex items-start gap-3 rounded-xl bg-sage-100 p-4">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-sage-500" />
              <p className="text-sm text-forest/70">
                Minimum custom order: 5 bars. Pricing depends on ingredients and
                complexity — we&apos;ll send a quote before you confirm.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-sage-500">
                  Your Name *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-xl border border-sage-200 bg-cream px-4 py-3 text-sm outline-none focus:border-forest"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-xs font-medium uppercase tracking-wider text-sage-500">
                  Phone / WhatsApp *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-1.5 w-full rounded-xl border border-sage-200 bg-cream px-4 py-3 text-sm outline-none focus:border-forest"
                />
              </div>
              <div>
                <label htmlFor="quantity" className="text-xs font-medium uppercase tracking-wider text-sage-500">
                  Quantity (bars) *
                </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min={5}
                  defaultValue={5}
                  required
                  className="mt-1.5 w-full rounded-xl border border-sage-200 bg-cream px-4 py-3 text-sm outline-none focus:border-forest"
                />
              </div>
              <div>
                <label htmlFor="skinType" className="text-xs font-medium uppercase tracking-wider text-sage-500">
                  Skin Type
                </label>
                <select
                  id="skinType"
                  name="skinType"
                  className="mt-1.5 w-full rounded-xl border border-sage-200 bg-cream px-4 py-3 text-sm outline-none focus:border-forest"
                >
                  {skinTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="scent" className="text-xs font-medium uppercase tracking-wider text-sage-500">
                  Preferred Scent / Category
                </label>
                <select
                  id="scent"
                  name="scent"
                  className="mt-1.5 w-full rounded-xl border border-sage-200 bg-cream px-4 py-3 text-sm outline-none focus:border-forest"
                >
                  {scentOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="ingredients" className="text-xs font-medium uppercase tracking-wider text-sage-500">
                  Special Ingredients or Requests
                </label>
                <textarea
                  id="ingredients"
                  name="ingredients"
                  rows={3}
                  placeholder="e.g. Add oatmeal, no coconut oil, heart-shaped bars for wedding favours..."
                  className="mt-1.5 w-full rounded-xl border border-sage-200 bg-cream px-4 py-3 text-sm outline-none focus:border-forest"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="occasion" className="text-xs font-medium uppercase tracking-wider text-sage-500">
                  Occasion (optional)
                </label>
                <input
                  id="occasion"
                  name="occasion"
                  placeholder="Wedding, corporate gift, personal use..."
                  className="mt-1.5 w-full rounded-xl border border-sage-200 bg-cream px-4 py-3 text-sm outline-none focus:border-forest"
                />
              </div>
            </div>

            <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto">
              Submit Custom Request
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
