"use client";

import { useTranslations } from "next-intl";
import {
  Building2,
  Coffee,
  Scissors,
  Store,
} from "lucide-react";

export function Industries() {
  const t = useTranslations("Industries");

  const industries = [
    {
      key: "fnb",
      icon: Coffee,
      title: t("items.fnb.title"),
      description: t("items.fnb.description"),
      accent: "bg-amber-50 text-amber-600",
    },
    {
      key: "retail",
      icon: Store,
      title: t("items.retail.title"),
      description: t("items.retail.description"),
      accent: "bg-violet-50 text-violet-600",
    },
    {
      key: "services",
      icon: Scissors,
      title: t("items.services.title"),
      description: t("items.services.description"),
      accent: "bg-emerald-50 text-emerald-600",
    },
    {
      key: "multiBranch",
      icon: Building2,
      title: t("items.multiBranch.title"),
      description: t("items.multiBranch.description"),
      accent: "bg-indigo-50 text-indigo-600",
    },
  ];

  return (
    <section
      id="solutions"
      className="scroll-mt-20 bg-neutral-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
          {/* LEFT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              {t("eyebrow")}
            </p>

            <h2 className="mt-4 max-w-xl text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
              {t("description")}
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid gap-4 sm:grid-cols-2">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.key}
                  className="group rounded-[26px] border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40 sm:p-6"
                >
                  <div
                    className={`flex size-12 items-center justify-center rounded-2xl ${industry.accent}`}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                    {industry.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {industry.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}