"use client";

import { useTranslations } from "next-intl";
import {
  BarChart3,
  Boxes,
  Check,
  CreditCard,
  Users,
} from "lucide-react";

export function Modules() {
  const t = useTranslations("Modules");

  const groups = [
    {
      key: "sales",
      icon: CreditCard,
      title: t("groups.sales.title"),
      description: t("groups.sales.description"),
      items: [
        t("groups.sales.items.pos"),
        t("groups.sales.items.orders"),
        t("groups.sales.items.loyalty"),
      ],
      iconClass: "bg-neutral-100 text-slate-700",
    },
    {
      key: "inventory",
      icon: Boxes,
      title: t("groups.inventory.title"),
      description: t("groups.inventory.description"),
      items: [
        t("groups.inventory.items.inventory"),
        t("groups.inventory.items.purchasing"),
        t("groups.inventory.items.stock"),
      ],
      iconClass: "bg-neutral-100 text-slate-700",
    },
    {
      key: "customers",
      icon: Users,
      title: t("groups.customers.title"),
      description: t("groups.customers.description"),
      items: [
        t("groups.customers.items.crm"),
        t("groups.customers.items.hr"),
        t("groups.customers.items.customerData"),
      ],
      iconClass: "bg-neutral-100 text-slate-700",
    },
    {
      key: "insights",
      icon: BarChart3,
      title: t("groups.insights.title"),
      description: t("groups.insights.description"),
      items: [
        t("groups.insights.items.analytics"),
        t("groups.insights.items.accounting"),
        t("groups.insights.items.multiBranch"),
      ],
      iconClass: "bg-neutral-100 text-slate-700",
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-neutral-50 py-16 sm:py-20 lg:py-24"
    >
      {/* Background accents */}
      <div className="absolute -left-40 top-10 size-[400px] rounded-full bg-neutral-200/40 blur-3xl" />
      <div className="absolute -right-40 bottom-0 size-[400px] rounded-full bg-neutral-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            {t("eyebrow")}
          </p>

          <h2 className="mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-5xl">
            {t("title")}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            {t("description")}
          </p>
        </div>

        {/* Capability Groups */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:mt-14 lg:grid-cols-2">
          {groups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.key}
                className="group rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40 sm:p-7 lg:p-8"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div
                    className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${group.iconClass}`}
                  >
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                      {group.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 border-t border-slate-100 pt-5 sm:mt-7 sm:grid-cols-2 sm:pt-6 xl:grid-cols-3">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5"
                    >
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                        <Check size={12} strokeWidth={3} />
                      </div>

                      <span className="text-sm font-medium leading-5 text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}