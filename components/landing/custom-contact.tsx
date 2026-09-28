"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  ArrowUpRight,
  Headphones,
  Puzzle,
  Workflow,
} from "lucide-react";

export function CustomContactSection() {
  const t = useTranslations("CustomContact");

  return (
    <section
      id="custom"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[24px] border border-slate-800 bg-slate-950 sm:rounded-[32px]">
          {/* Background glow */}
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-slate-500/10 blur-3xl" />

          <div className="relative grid min-w-0 items-center gap-10 p-5 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-14">
            {/* LEFT CONTENT */}
            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                {t("eyebrow")}
              </p>

              <h2 className="mt-4 max-w-xl text-[34px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                {t("title")}
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                {t("description")}
              </p>

              {/* Small Features */}
              <div className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                    <Workflow size={18} />
                  </div>

                  <p className="mt-3 text-sm font-medium leading-5 text-white">
                    {t("features.workflows")}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                    <Puzzle size={18} />
                  </div>

                  <p className="mt-3 text-sm font-medium leading-5 text-white">
                    {t("features.integrations")}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
                    <Headphones size={18} />
                  </div>

                  <p className="mt-3 text-sm font-medium leading-5 text-white">
                    {t("features.support")}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto"
                >
                  {t("button")}
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative min-w-0 pb-5 sm:pb-6">
              <div className="overflow-hidden rounded-[20px] border border-white/10 bg-white/5 p-2 sm:rounded-[24px]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] sm:rounded-[18px]">
                  <Image
                    src="/images/custom-support.jpg"
                    alt={t("imageAlt")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-0 left-3 max-w-[calc(100%-1.5rem)] rounded-2xl border border-white/10 bg-slate-900/95 px-4 py-3 shadow-2xl backdrop-blur-md sm:left-5 sm:px-5 sm:py-4">
                <p className="text-xs text-slate-400">
                  {t("floatingLabel")}
                </p>

                <p className="mt-1 text-sm font-semibold leading-5 text-white">
                  {t("floatingText")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}