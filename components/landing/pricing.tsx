"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Check,
  Sparkles,
} from "lucide-react";

type PlanKey = "starter" | "business" | "custom";

type PlanConfig = {
  key: PlanKey;
  monthly: string;
  yearly: string;
  featured: boolean;
  featureKeys: string[];
  hasCustomPrice?: boolean;
};

const plans: PlanConfig[] = [
  {
    key: "starter",
    monthly: "Rp 0",
    yearly: "Rp 0",
    featured: false,
    featureKeys: [
      "pos",
      "inventory",
      "reporting",
      "oneBranch",
      "fiveUsers",
    ],
  },
  {
    key: "business",
    monthly: "Rp 299.000",
    yearly: "Rp 2.990.000",
    featured: true,
    featureKeys: [
      "core",
      "multiBranch",
      "inventory",
      "analytics",
      "customers",
      "support",
    ],
  },
  {
    key: "custom",
    monthly: "",
    yearly: "",
    featured: false,
    hasCustomPrice: true,
    featureKeys: [
      "business",
      "branches",
      "users",
      "development",
      "api",
      "support",
    ],
  },
];

export function Pricing() {
  const [billing, setBilling] =
    useState<"monthly" | "yearly">("monthly");

  const t = useTranslations("Pricing");

  return (
    <section
      id="pricing"
      className="scroll-mt-20 relative overflow-hidden bg-white py-24"
    >
      {/* Background */}
      <div className="absolute left-1/2 top-0 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-neutral-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            {t("eyebrow")}
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            {t("title")}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            {t("description")}
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mt-9 flex justify-center">
          <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                billing === "monthly"
                  ? "bg-white text-slate-950 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {t("monthly")}
            </button>

            <button
              type="button"
              onClick={() => setBilling("yearly")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                billing === "yearly"
                  ? "bg-white text-slate-950 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {t("yearly")}
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.key}
              className={`relative flex h-full flex-col rounded-[28px] border bg-white p-7 transition-all duration-300 sm:p-8 ${
                plan.featured
                  ? "border-slate-900 shadow-[0_24px_65px_rgba(15,23,42,0.10)]"
                  : "border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-lg"
              }`}
            >
              {/* Popular */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-slate-300/40">
                    <Sparkles size={13} />
                    {t("mostPopular")}
                  </div>
                </div>
              )}

              {/* Header */}
              <div className={plan.featured ? "pt-2" : ""}>
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  {t(`plans.${plan.key}.name`)}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
                  {t(`plans.${plan.key}.description`)}
                </p>

                {/* Price */}
                <div className="mt-7 flex items-end gap-1">
                  <span className="text-4xl font-semibold tracking-[-0.04em] text-slate-950">
                    {plan.hasCustomPrice
                      ? t("plans.custom.priceLabel")
                      : billing === "monthly"
                        ? plan.monthly
                        : plan.yearly}
                  </span>

                  {!plan.hasCustomPrice && (
                    <span className="pb-1 text-sm text-slate-400">
                      /
                      {billing === "monthly"
                        ? t("monthSuffix")
                        : t("yearSuffix")}
                    </span>
                  )}
                </div>
              </div>

              <div className="my-7 h-px bg-slate-100" />

              {/* Feature label */}
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                {t("includedLabel")}
              </p>

              {/* Features */}
              <div className="space-y-4">
                {plan.featureKeys.map((featureKey) => (
                  <div
                    key={featureKey}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                      <Check size={12} strokeWidth={3} />
                    </div>

                    <p className="text-sm leading-6 text-slate-600">
                      {t(
                        `plans.${plan.key}.features.${featureKey}`,
                      )}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                type="button"
                className={`mt-8 w-full rounded-full px-5 py-3.5 text-sm font-semibold transition-all duration-200 lg:mt-auto ${
                  plan.featured
                    ? "bg-slate-950 text-white shadow-lg shadow-slate-300/40 hover:bg-slate-800"
                    : "border border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:text-slate-950"
                }`}
              >
                {t(`plans.${plan.key}.button`)}
              </button>
            </article>
          ))}
        </div>

        {/* Note */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-5 text-slate-400">
          {t("note")}
        </p>
      </div>
    </section>
  );
}