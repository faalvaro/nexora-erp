"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  ArrowUpRight,
  Check,
} from "lucide-react";

export function ProductShowcase() {
  const t = useTranslations("ProductShowcase");

  const benefits = [
    t("benefits.easy"),
    t("benefits.receipts"),
    t("benefits.integration"),
  ];

  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background accents */}
      <div className="absolute -left-32 top-20 size-[340px] rounded-full bg-neutral-200/40 blur-3xl" />
      <div className="absolute -right-32 bottom-0 size-[340px] rounded-full bg-neutral-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              {t("eyebrow")}
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              {t("description")}
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                    <Check
                      size={13}
                      strokeWidth={3}
                    />
                  </div>

                  <p className="text-sm leading-6 text-slate-600">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="#pricing"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300/40 transition-all hover:-translate-y-0.5 hover:bg-slate-800"
            >
              {t("button")}
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* RIGHT PRODUCT IMAGE */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-neutral-100 via-white to-neutral-200/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-2 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] bg-slate-100">
                <Image
                  src="/images/pos-showcase.jpg"
                  alt={t("imageAlt")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 left-6 rounded-2xl border border-slate-200/80 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-xl sm:left-8">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-slate-500" />

                <p className="text-sm font-semibold text-slate-950">
                  {t("badge.title")}
                </p>
              </div>

              <p className="mt-1 text-xs text-slate-500">
                {t("badge.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}