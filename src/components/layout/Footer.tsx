import Link from "next/link";
import { AtSign, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-sage-200 bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-2xl font-semibold">Wintage Naturals</h3>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              Small-batch, hand-poured soaps made with love from our home kitchen.
              Pure ingredients. Zero compromise.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-cream/50">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { href: "/shop", label: "All Products" },
                { href: "/shop/herbal-botanical", label: "Herbal & Botanical" },
                { href: "/shop/floral-collection", label: "Floral Collection" },
                { href: "/custom-order", label: "Custom Orders" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-cream/50">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { href: "/about", label: "Our Story" },
                { href: "/contact", label: "Contact Us" },
                { href: "/checkout", label: "Checkout" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-cream/50">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Home-based studio, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>hello@wintagenaturals.com</span>
              </li>
              <li className="flex items-center gap-2">
                <AtSign className="h-4 w-4 shrink-0" />
                <span>@wintagenaturals</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Wintage Naturals. All rights reserved.
          </p>
          <p className="text-xs text-cream/50">
            Cash on Delivery available · UPI coming soon
          </p>
        </div>
      </div>
    </footer>
  );
}
