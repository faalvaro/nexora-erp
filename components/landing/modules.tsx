"use client";

import { useTranslations } from "next-intl";
import {
  BarChart3,
  Boxes,
  Building2,
  CreditCard,
  GitBranch,
  Heart,
  PackageSearch,
  Plug,
  ReceiptText,
  ShoppingCart,
  Sparkles,
  Users,
} from "lucide-react";

export function Modules() {
  const t = useTranslations("Modules");

  const modules = [
    {
      key: "pos",
      icon: CreditCard,
      title: t("items.pos.title"),
      description: t("items.pos.description"),
      color: "bg-sky-50 text-sky-500",
    },
    {
      key: "inventory",
      icon: Boxes,
      title: t("items.inventory.title"),
      description: t("items.inventory.description"),
      color: "bg-blue-50 text-blue-500",
    },
    {
      key: "purchasing",
      icon: ShoppingCart,
      title: t("items.purchasing.title"),
      description: t("items.purchasing.description"),
      color: "bg-violet-50 text-violet-500",
    },
    {
      key: "accounting",
      icon: ReceiptText,
      title: t("items.accounting.title"),
      description: t("items.accounting.description"),
      color: "bg-cyan-50 text-cyan-500",
    },
    {
      key: "crm",
      icon: Users,
      title: t("items.crm.title"),
      description: t("items.crm.description"),
      color: "bg-orange-50 text-orange-500",
    },
    {
      key: "hr",
      icon: Building2,
      title: t("items.hr.title"),
      description: t("items.hr.description"),
      color: "bg-emerald-50 text-emerald-500",
    },
    {
      key: "loyalty",
      icon: Heart,
      title: t("items.loyalty.title"),
      description: t("items.loyalty.description"),
      color: "bg-pink-50 text-pink-500",
    },
    {
      key: "orders",
      icon: PackageSearch,
      title: t("items.orders.title"),
      description: t("items.orders.description"),
      color: "bg-indigo-50 text-indigo-500",
    },
    {
      key: "analytics",
      icon: BarChart3,
      title: t("items.analytics.title"),
      description: t("items.analytics.description"),
      color: "bg-purple-50 text-purple-500",
    },
    {
      key: "multiBranch",
      icon: GitBranch,
      title: t("items.multiBranch.title"),
      description: t("items.multiBranch.description"),
      color: "bg-sky-50 text-sky-500",
    },
    {
      key: "custom",
      icon: Sparkles,
      title: t("items.custom.title"),
      description: t("items.custom.description"),
      color: "bg-amber-50 text-amber-500",
    },
    {
      key: "api",
      icon: Plug,
      title: t("items.api.title"),
      description: t("items.api.description"),
      color: "bg-teal-50 text-teal-500",
    },
  ];

  return (
    <section
      id="custom"
      className="relative overflow-hidden bg-[#F5FAFF] py-24"
    >
      {/* Soft glow */}
      <div className="absolute -left-40 top-0 size-[420px] rounded-full bg-sky-200/20 blur-3xl" />
      <div className="absolute -right-40 bottom-0 size-[420px] rounded-full bg-cyan-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1597E5]">
              {t("eyebrow")}
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl">
              {t("title")}
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-base leading-7 text-slate-600">
              {t("description")}
            </p>
          </div>
        </div>

        {/* Modules */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <article
                key={module.key}
                className="group flex min-h-[132px] gap-4 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-200/40"
              >
                <div
                  className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${module.color}`}
                >
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="font-semibold tracking-tight text-slate-950">
                    {module.title}
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-slate-500">
                    {module.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex justify-center">
          <div className="rounded-full border border-sky-100 bg-white px-5 py-2.5 text-sm text-slate-500 shadow-sm">
            {t("bottomNote")}
          </div>
        </div>
      </div>
    </section>
  );
}