"use client";

import Image from "next/image";
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

import { Button } from "@/components/ui/button";

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
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white pt-32">
      {/* Background glow */}
      <div className="absolute left-[-120px] top-32 size-[420px] rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute right-[-100px] top-20 size-[380px] rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto grid min-h-[820px] max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm backdrop-blur">
            <span className="size-2 rounded-full bg-emerald-500" />
            {t("badge")}
          </div>

          <h1 className="text-5xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
            <br />
            {t("titleLine3")}
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            {t("description")}
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="h-12 rounded-xl bg-[#1597E5] px-6 text-white shadow-lg shadow-[#1597E5]/20 hover:bg-[#0F86CC]"
            >
              {t("startFreeTrial")}
              <ArrowRight className="ml-1 size-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-xl border-slate-200 bg-white/80 px-6 text-slate-800"
            >
              {t("requestDemo")}
            </Button>
          </div>

          {/* Trust points */}
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            {trustPoints.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="flex size-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Check size={13} strokeWidth={3} />
                </div>

                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          {/* Business Owner Photo */}
          <div className="absolute right-0 top-[-105px] hidden h-[450px] w-[340px] overflow-hidden rounded-[30px] border border-white/70 bg-slate-100 shadow-2xl lg:block">
            <Image
              src="/images/hero-owner.jpg"
              alt={t("ownerAlt")}
              fill
              priority
              className="object-cover object-[center_50%]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
          </div>

          {/* Quote Card */}
          <div className="absolute left-[45px] top-[5px] z-20 hidden w-[290px] rounded-2xl border border-slate-200/80 bg-white/95 px-6 py-5 shadow-xl backdrop-blur-xl lg:block">
            <div className="mb-2 text-2xl leading-none text-[#1597E5]">“</div>

            <p className="text-sm font-medium leading-6 text-slate-700">
              {t("quote")}
            </p>

            <p className="mt-2 text-xs text-slate-400">
              {t("quoteAuthor")}
            </p>
          </div>

          {/* Dashboard */}
          <div className="relative z-10 mt-16 overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.14)] lg:mt-52">
            {/* Dashboard topbar */}
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-[#1597E5] text-xs font-bold text-white">
                  N
                </div>

                <span className="text-sm font-semibold text-slate-900">
                  Nexora ERP
                </span>
              </div>

              <div className="h-8 w-52 rounded-lg bg-slate-50" />
            </div>

            <div className="grid md:grid-cols-[160px_1fr]">
              {/* Sidebar */}
              <div className="hidden border-r border-slate-100 bg-slate-50/60 p-4 md:block">
                {sidebarItems.map((item, i) => (
                  <div
                    key={item}
                    className={`mb-1 rounded-lg px-3 py-2 text-xs ${
                      i === 0
                        ? "bg-sky-50 font-medium text-sky-700"
                        : "text-slate-500"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Dashboard content */}
              <div className="p-5">
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

                <div className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_0.8fr]">
                  {/* Fake chart */}
                  <div className="rounded-2xl border border-slate-100 p-4">
                    <div className="mb-5">
                      <p className="text-sm font-semibold text-slate-800">
                        {t("dashboard.last30Days")}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {t("dashboard.performance")}
                      </p>
                    </div>

                    <div className="flex h-40 items-end gap-2">
                      {[
                        30, 38, 42, 48, 44, 60, 55, 68, 72, 83, 78, 92,
                      ].map((height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-[#1597E5] to-cyan-300"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Category */}
                  <div className="rounded-2xl border border-slate-100 p-4">
                    <p className="text-sm font-semibold text-slate-800">
                      {t("dashboard.salesByCategory")}
                    </p>

                    <div className="mx-auto my-6 flex size-28 items-center justify-center rounded-full bg-[conic-gradient(#1597E5_0_40%,#22c55e_40%_67%,#f59e0b_67%_84%,#e2e8f0_84%_100%)]">
                      <div className="size-16 rounded-full bg-white" />
                    </div>

                    <div className="space-y-2 text-xs text-slate-500">
                      <Legend dot="bg-[#1597E5]" label="F&B" value="40%" />
                      <Legend dot="bg-green-500" label="Retail" value="27%" />
                      <Legend
                        dot="bg-amber-500"
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
    <div className="rounded-2xl border border-slate-100 bg-white p-4">
      <div className="mb-3 flex size-8 items-center justify-center rounded-lg bg-sky-50 text-[#1597E5]">
        {icon}
      </div>

      <p className="text-xs text-slate-400">{title}</p>

      <p className="mt-1 text-lg font-semibold text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-xs font-medium text-emerald-600">
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
        <span className={`size-2 rounded-full ${dot}`} />
        {label}
      </div>

      <span>{value}</span>
    </div>
  );
}