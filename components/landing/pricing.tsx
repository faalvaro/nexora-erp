"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check, Sparkles } from "lucide-react";

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
      "basicPos",
      "productManagement",
      "simpleReporting",
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
      "starter",
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
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const t = useTranslations("Pricing");

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-sky-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1597E5]">
            {t("eyebrow")}
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl">
            {t("title")}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            {t("description")}
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
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
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
                billing === "yearly"
                  ? "bg-white text-slate-950 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {t("yearly")}
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.key}
              className={`relative flex h-full flex-col rounded-[28px] border p-7 transition-all duration-300 ${
                plan.featured
                  ? "border-[#1597E5] bg-white shadow-[0_25px_70px_rgba(21,151,229,0.16)] lg:-translate-y-3"
                  : "border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl"
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 rounded-full bg-[#1597E5] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-sky-500/20">
                    <Sparkles size={14} />
                    {t("mostPopular")}
                  </div>
                </div>
              )}

              <div
                className={`flex h-full flex-col ${
                  plan.featured ? "pt-3" : ""
                }`}
              >
                <div>
                  <p className="text-lg font-semibold text-slate-950">
                    {t(`plans.${plan.key}.name`)}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {t(`plans.${plan.key}.description`)}
                  </p>

                  {/* Price */}
                  <div className="mt-7">
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-semibold tracking-tight text-slate-950">
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

                  {/* Features */}
                  <div className="space-y-4">
                    {plan.featureKeys.map((featureKey) => (
                      <div
                        key={featureKey}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
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
                </div>

                {/* CTA */}
                <button
                  type="button"
                  className={`mt-auto w-full rounded-xl px-5 py-3.5 text-sm font-medium transition-all duration-200 ${
                    plan.featured
                      ? "bg-[#1597E5] text-white shadow-lg shadow-[#1597E5]/20 hover:bg-[#0F86CC]"
                      : "border border-slate-200 bg-white text-slate-800 hover:border-sky-200 hover:text-[#1597E5]"
                  }`}
                >
                  {t(`plans.${plan.key}.button`)}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Pricing Note */}
        <p className="mt-8 text-center text-xs text-slate-400">
          {t("note")}
        </p>
      </div>
    </section>
  );
}