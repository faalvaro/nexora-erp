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
    <section id="custom" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950">
          {/* Background glow */}
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative grid items-center gap-12 p-8 sm:p-10 lg:grid-cols-2 lg:p-14">
            {/* Left Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-400">
                {t("eyebrow")}
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                {t("title")}
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                {t("description")}
              </p>

              {/* Small Features */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Workflow className="size-5 text-sky-400" />

                  <p className="mt-3 text-sm font-medium text-white">
                    {t("features.workflows")}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Puzzle className="size-5 text-sky-400" />

                  <p className="mt-3 text-sm font-medium text-white">
                    {t("features.integrations")}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Headphones className="size-5 text-sky-400" />

                  <p className="mt-3 text-sm font-medium text-white">
                    {t("features.support")}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#1597E5] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0F86CC]"
                >
                  {t("button")}
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
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
              <div className="absolute -bottom-5 left-5 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-2xl backdrop-blur-md">
                <p className="text-xs text-slate-400">
                  {t("floatingLabel")}
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
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