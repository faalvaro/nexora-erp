"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  Check,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";

export function Hero() {
  const t = useTranslations("Hero");

  const trustPoints = [
    t("easyToUse"),
    t("noCreditCard"),
    t("localSupport"),
  ];

  const sidebarItems = [
    t("dashboard.dashboard"),
    t("dashboard.sales"),
    t("dashboard.products"),
    t("dashboard.customers"),
    t("dashboard.purchases"),
    t("dashboard.finance"),
    t("dashboard.reports"),
  ];

  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-32">
      {/* Background */}
      <div className="absolute inset-x-0 top-0 h-[620px] bg-gradient-to-b from-neutral-100/80 via-white to-white" />

      <div className="absolute left-1/2 top-24 h-[380px] w-[760px] -translate-x-1/2 rounded-full bg-neutral-200/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* HERO COPY */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            <span className="size-2 rounded-full bg-slate-500" />
            {t("badge")}
          </div>

          <h1 className="mt-7 text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-[72px] lg:leading-[0.98]">
            {t("titleLine1")}
            <br />

            <span className="text-slate-500">
              {t("titleLine2")}
            </span>

            <br />

            {t("titleLine3")}
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {t("description")}
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="#pricing"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white shadow-lg shadow-slate-300/40 transition-all hover:-translate-y-0.5 hover:bg-slate-800"
            >
              {t("startFreeTrial")}
              <ArrowRight size={16} />
            </Link>

            <Link
              href="#demo"
              className="inline-flex h-12 items-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              {t("requestDemo")}
            </Link>
          </div>

          {/* Trust */}
          <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {trustPoints.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-slate-500"
              >
                <div className="flex size-5 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  <Check size={12} strokeWidth={3} />
                </div>

                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* PRODUCT PREVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.15,
          }}
          className="relative mx-auto mt-16 max-w-6xl"
        >
          {/* Glow */}
          <div className="absolute -inset-8 -z-10 rounded-[48px] bg-gradient-to-r from-slate-100 via-slate-50 to-slate-200/70 blur-3xl" />

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.14)]">
            {/* Product Topbar */}
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-slate-950 text-xs font-bold text-white">
                  N
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    Nexora ERP
                  </p>

                  <p className="hidden text-xs text-slate-400 sm:block">
                    Unified business management
                  </p>
                </div>
              </div>

              <div className="hidden items-center gap-2 sm:flex">
                <span className="size-2.5 rounded-full bg-slate-200" />
                <span className="size-2.5 rounded-full bg-slate-200" />
                <span className="size-2.5 rounded-full bg-slate-200" />
              </div>
            </div>

            <div className="grid md:grid-cols-[170px_1fr]">
              {/* Sidebar */}
              <aside className="hidden border-r border-slate-100 bg-slate-50/70 p-4 md:block">
                {sidebarItems.map((item, index) => (
                  <div
                    key={item}
                    className={`mb-1 rounded-lg px-3 py-2.5 text-xs ${
                      index === 0
                        ? "bg-slate-200 font-semibold text-slate-950"
                        : "text-slate-500"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </aside>

              {/* Content */}
              <div className="p-5 sm:p-6">
                {/* Metrics */}
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  <MetricCard
                    icon={<BarChart3 size={16} />}
                    title={t("dashboard.totalSales")}
                    value={t("dashboard.totalSalesValue")}
                    text="+12%"
                  />

                  <MetricCard
                    icon={<ShoppingCart size={16} />}
                    title={t("dashboard.transactions")}
                    value={t("dashboard.transactionsValue")}
                    text="+8%"
                  />

                  <MetricCard
                    icon={<Package size={16} />}
                    title={t("dashboard.productStock")}
                    value={t("dashboard.productStockValue")}
                    text={t("dashboard.runningLow")}
                  />

                  <MetricCard
                    icon={<Users size={16} />}
                    title={t("dashboard.customersMetric")}
                    value={t("dashboard.customersValue")}
                    text="+18%"
                  />
                </div>

                {/* Charts */}
                <div className="mt-4 grid gap-4 lg:grid-cols-[1.55fr_0.75fr]">
                  <div className="rounded-2xl border border-slate-100 bg-white p-4 sm:p-5">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        {t("dashboard.last30Days")}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {t("dashboard.performance")}
                      </p>
                    </div>

                    <div className="mt-7 flex h-44 items-end gap-2">
                      {[
                        30, 43, 38, 56, 49, 68, 61, 74, 69, 84, 77, 94,
                      ].map((height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-slate-900 to-slate-400"
                          style={{
                            height: `${height}%`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-white p-4 sm:p-5">
                    <p className="text-sm font-semibold text-slate-800">
                      {t("dashboard.salesByCategory")}
                    </p>

                    <div className="mx-auto my-7 flex size-32 items-center justify-center rounded-full bg-[conic-gradient(#0f172a_0_40%,#475569_40%_67%,#94a3b8_67%_84%,#e2e8f0_84%_100%)]">
                      <div className="size-20 rounded-full bg-white" />
                    </div>

                    <div className="space-y-2.5 text-xs text-slate-500">
                      <Legend
                        dot="bg-slate-900"
                        label="F&B"
                        value="40%"
                      />

                      <Legend
                        dot="bg-slate-600"
                        label="Retail"
                        value="27%"
                      />

                      <Legend
                        dot="bg-slate-400"
                        label={t("dashboard.services")}
                        value="17%"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MetricCard({
  icon,
  title,
  value,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="mb-3 flex size-8 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
        {icon}
      </div>

      <p className="text-xs text-slate-400">
        {title}
      </p>

      <p className="mt-1 text-lg font-semibold tracking-tight text-slate-950">
        {value}
      </p>

      <p className="mt-1 text-xs font-medium text-slate-500">
        {text}
      </p>
    </div>
  );
}

function Legend({
  dot,
  label,
  value,
}: {
  dot: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span
          className={`size-2 rounded-full ${dot}`}
        />

        {label}
      </div>

      <span>{value}</span>
    </div>
  );
}