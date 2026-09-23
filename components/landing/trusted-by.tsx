"use client";

import { useTranslations } from "next-intl";
import {
  BarChart3,
  Boxes,
  ShoppingCart,
  Users,
} from "lucide-react";

const companies = [
  "Kopi Kita",
  "Roti Senja",
  "Nusantara Mart",
  "GlowLab",
  "Berkah Jaya",
  "FitLife",
];

export function TrustedBy() {
  const t = useTranslations("TrustedBy");

  const features = [
    {
      key: "inventory",
      icon: Boxes,
      title: t("features.inventory.title"),
      description: t("features.inventory.description"),
    },
    {
      key: "pos",
      icon: ShoppingCart,
      title: t("features.pos.title"),
      description: t("features.pos.description"),
    },
    {
      key: "crm",
      icon: Users,
      title: t("features.crm.title"),
      description: t("features.crm.description"),
    },
    {
      key: "analytics",
      icon: BarChart3,
      title: t("features.analytics.title"),
      description: t("features.analytics.description"),
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Trusted logos */}
        <div className="text-center">
          <p className="text-sm font-medium text-slate-500">
            {t("trustedText")}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {companies.map((company) => (
              <div
                key={company}
                className="flex h-14 items-center justify-center rounded-xl border border-slate-100 bg-white text-sm font-semibold tracking-wide text-slate-400 grayscale transition-all duration-200 hover:border-slate-200 hover:text-slate-700"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.key}
                className="group rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-sky-50 text-[#1597E5] transition-transform duration-300 group-hover:scale-105">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>

                <button className="mt-5 text-sm font-medium text-[#1597E5] transition-colors hover:text-[#0F86CC]">
                  {t("learnMore")} →
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}