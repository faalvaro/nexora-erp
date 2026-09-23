"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";

export function ProductShowcase() {
  const t = useTranslations("ProductShowcase");

  const benefits = [
    t("benefits.easy"),
    t("benefits.receipts"),
    t("benefits.integration"),
  ];

  return (
    <section id="demo" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-sky-100 blur-3xl" />
          <div className="absolute -right-8 bottom-0 h-40 w-40 rounded-full bg-cyan-100 blur-3xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-xl shadow-slate-200/40">
            <Image
              src="/images/pos-showcase.jpg"
              alt={t("imageAlt")}
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute right-4 top-4 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
            <p className="text-sm font-semibold text-slate-900">
              {t("badge.title")}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {t("badge.subtitle")}
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1597E5]">
            {t("eyebrow")}
          </p>

          <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            {t("description")}
          </p>

          <div className="mt-8 space-y-4">
            {benefits.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 text-emerald-500" />

                <p className="text-sm leading-6 text-slate-600">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-8 rounded-xl bg-[#1597E5] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-[#1597E5]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0F86CC]">
            {t("button")} →
          </button>
        </div>
      </div>
    </section>
  );
}