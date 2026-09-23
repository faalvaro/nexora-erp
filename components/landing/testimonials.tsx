"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Star } from "lucide-react";

export function Testimonials() {
  const t = useTranslations("Testimonials");

  const testimonials = [
    {
      key: "alya",
      name: t("items.alya.name"),
      role: t("items.alya.role"),
      image: "/images/testimonials/customer-1.jpg",
      quote: t("items.alya.quote"),
    },
    {
      key: "rizky",
      name: t("items.rizky.name"),
      role: t("items.rizky.role"),
      image: "/images/testimonials/customer-2.jpg",
      quote: t("items.rizky.quote"),
    },
    {
      key: "dimas",
      name: t("items.dimas.name"),
      role: t("items.dimas.role"),
      image: "/images/testimonials/customer-3.jpg",
      quote: t("items.dimas.quote"),
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1597E5]">
            {t("eyebrow")}
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            {t("description")}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.key}
              className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-current"
                  />
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                “{item.quote}”
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="font-semibold text-slate-950">
                    {item.name}
                  </p>

                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}