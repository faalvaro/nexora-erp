"use client";

import { useTranslations } from "next-intl";
import {
  ArrowRightLeft,
  Database,
  Network,
} from "lucide-react";

export function TrustedBy() {
  const t = useTranslations("TrustedBy");

  const items = [
    {
      key: "connected",
      icon: ArrowRightLeft,
      title: t("items.connected.title"),
      description: t("items.connected.description"),
    },
    {
      key: "centralized",
      icon: Database,
      title: t("items.centralized.title"),
      description: t("items.centralized.description"),
    },
    {
      key: "scalable",
      icon: Network,
      title: t("items.scalable.title"),
      description: t("items.scalable.description"),
    },
  ];

  return (
    <section className="border-y border-slate-100 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1597E5]">
            {t("eyebrow")}
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
            {t("title")}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            {t("description")}
          </p>
        </div>

        {/* Items */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.key}
                className="rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-sm"
              >
                <div className="flex size-11 items-center justify-center rounded-2xl bg-sky-50 text-[#1597E5]">
                  <Icon size={20} />
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}