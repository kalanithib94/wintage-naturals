"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
          Contact
        </p>
        <h1 className="mt-3 font-serif text-4xl font-light text-forest sm:text-5xl">
          We&apos;d love to hear from you
        </h1>
        <p className="mt-4 text-forest/60">
          Questions about ingredients, bulk orders, or delivery? Drop us a message.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-6">
          {[
            {
              icon: Phone,
              label: "Phone / WhatsApp",
              value: "+91 98765 43210",
            },
            {
              icon: Mail,
              label: "Email",
              value: "hello@wintagenaturals.com",
            },
            {
              icon: MapPin,
              label: "Location",
              value: "Home-based studio, India",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 rounded-2xl border border-sage-200 bg-white p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-100">
                <item.icon className="h-4 w-4 text-forest" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-sage-500">
                  {item.label}
                </p>
                <p className="mt-1 font-medium text-forest">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-3">
          {submitted ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-sage-200 bg-white py-16 text-center">
              <CheckCircle2 className="h-12 w-12 text-sage-500" />
              <h2 className="mt-4 font-serif text-2xl text-forest">
                Message sent!
              </h2>
              <p className="mt-2 text-forest/60">
                We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-sage-200 bg-white p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-sage-500">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-1.5 w-full rounded-xl border border-sage-200 bg-cream px-4 py-3 text-sm outline-none focus:border-forest focus:ring-1 focus:ring-forest"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-sage-500">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1.5 w-full rounded-xl border border-sage-200 bg-cream px-4 py-3 text-sm outline-none focus:border-forest focus:ring-1 focus:ring-forest"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="text-xs font-medium uppercase tracking-wider text-sage-500">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    className="mt-1.5 w-full rounded-xl border border-sage-200 bg-cream px-4 py-3 text-sm outline-none focus:border-forest focus:ring-1 focus:ring-forest"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-sage-500">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-1.5 w-full rounded-xl border border-sage-200 bg-cream px-4 py-3 text-sm outline-none focus:border-forest focus:ring-1 focus:ring-forest"
                  />
                </div>
              </div>
              <Button type="submit" size="lg" className="mt-6">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
