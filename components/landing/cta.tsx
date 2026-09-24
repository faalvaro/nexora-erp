"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export function CTA() {
  const t = useTranslations("CTA");

  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#1597E5] via-[#18B5D8] to-[#20C5C7] px-8 py-12 shadow-[0_25px_70px_rgba(21,151,229,0.20)] sm:px-12 lg:px-16">
          {/* Decorative blur */}
          <div className="absolute -left-20 -top-20 size-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 right-10 size-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT */}
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/75">
                {t("eyebrow")}
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                {t("title")}
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/80">
                {t("description")}
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-wrap gap-3 lg:shrink-0">
              <Link
                href="#pricing"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
              >
                {t("freeTrial")}
                <ArrowRight size={16} />
              </Link>

              <Link
                href="#demo"
                className="inline-flex h-12 items-center rounded-full border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20"
              >
                {t("demo")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}