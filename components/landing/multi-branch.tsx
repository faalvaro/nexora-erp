  "use client";

  import { useTranslations } from "next-intl";
  import {
    ArrowUpRight,
    Building2,
    Check,
    PackageOpen,
    ShieldCheck,
  } from "lucide-react";

  const branches = [
    {
      name: "Jakarta Pusat",
      sales: "Rp 125.420.000",
      transactions: "520",
      growth: "+12%",
    },
    {
      name: "Surabaya",
      sales: "Rp 98.200.000",
      transactions: "420",
      growth: "+9%",
    },
    {
      name: "Bandung",
      sales: "Rp 76.310.000",
      transactions: "310",
      growth: "+9%",
    },
    {
      name: "Yogyakarta",
      sales: "Rp 54.120.000",
      transactions: "280",
      growth: "+8%",
    },
    {
      name: "Bali",
      sales: "Rp 48.900.000",
      transactions: "245",
      growth: "+9%",
    },
  ];

  export function MultiBranch() {
    const t = useTranslations("MultiBranch");

    const benefits = [
      t("benefits.reporting"),
      t("benefits.transfer"),
      t("benefits.monitoring"),
      t("benefits.access"),
    ];

    return (
      <section
        id="multi-branch"
        className="relative overflow-hidden bg-neutral-50 py-16 sm:py-20 lg:py-24"
      >
        {/* Background accents */}
        <div className="absolute -left-32 top-20 size-[360px] rounded-full bg-neutral-200/40 blur-3xl" />
        <div className="absolute -right-32 bottom-0 size-[360px] rounded-full bg-neutral-200/30 blur-3xl" />

        <div className="relative mx-auto grid min-w-0 max-w-7xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14 lg:px-8">
          {/* LEFT CONTENT */}
          <div className="min-w-0">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
              <span className="size-2 rounded-full bg-slate-500" />
              {t("eyebrow")}
            </div>

            <h2 className="max-w-xl text-[34px] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
              {t("description")}
            </p>

            {/* Benefits */}
            <div className="mt-7 space-y-4 sm:mt-8">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <Check size={14} strokeWidth={3} />
                  </div>

                  <p className="text-sm leading-6 text-slate-600">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-8 inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950 hover:shadow-md sm:w-auto">
              {t("button")}
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* RIGHT DASHBOARD */}
          <div className="relative min-w-0">
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-neutral-100 via-white to-neutral-200/60 blur-2xl" />

            <div className="relative w-full min-w-0 overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.10)] sm:rounded-[28px]">
              {/* Header */}
              <div className="flex flex-col gap-4 border-b border-slate-100 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Building2 size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="font-semibold text-slate-950">
                      {t("dashboard.title")}
                    </p>

                    <p className="mt-0.5 text-xs leading-5 text-slate-400">
                      {t("dashboard.subtitle")}
                    </p>
                  </div>
                </div>

                <button className="w-fit rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600">
                  {t("dashboard.period")}
                </button>
              </div>

              {/* Summary */}
              <div className="grid gap-3 border-b border-slate-100 p-4 sm:grid-cols-3 sm:p-5">
                <SummaryCard
                  icon={<Building2 size={17} />}
                  iconClass="bg-indigo-50 text-indigo-600"
                  label={t("dashboard.totalBranches")}
                  value="5"
                />

                <SummaryCard
                  icon={<PackageOpen size={17} />}
                  iconClass="bg-violet-50 text-violet-600"
                  label={t("dashboard.totalSales")}
                  value={t("dashboard.totalSalesValue")}
                />

                <SummaryCard
                  icon={<ShieldCheck size={17} />}
                  iconClass="bg-emerald-50 text-emerald-600"
                  label={t("dashboard.activeBranches")}
                  value="100%"
                />
              </div>

              {/* Table */}
              <div className="w-full min-w-0 overflow-x-auto p-4 sm:p-5">
                <table className="min-w-[650px] text-left">
                  <thead>
                    <tr className="border-b border-slate-100 text-xs text-slate-400">
                      <th className="pb-4 pr-6 font-medium">
                        {t("dashboard.branch")}
                      </th>

                      <th className="pb-4 pr-6 font-medium">
                        {t("dashboard.sales")}
                      </th>

                      <th className="pb-4 pr-6 font-medium">
                        {t("dashboard.transactions")}
                      </th>

                      <th className="pb-4 pr-6 font-medium">
                        {t("dashboard.growth")}
                      </th>

                      <th className="pb-4 font-medium">
                        {t("dashboard.status")}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {branches.map((branch) => (
                      <tr
                        key={branch.name}
                        className="border-b border-slate-50 text-sm last:border-0"
                      >
                        <td className="whitespace-nowrap py-4 pr-6 font-medium text-slate-800">
                          {branch.name}
                        </td>

                        <td className="whitespace-nowrap py-4 pr-6 text-slate-500">
                          {branch.sales}
                        </td>

                        <td className="py-4 pr-6 text-slate-500">
                          {branch.transactions}
                        </td>

                        <td className="py-4 pr-6 font-medium text-emerald-600">
                          {branch.growth}
                        </td>

                        <td className="py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                            <span className="size-1.5 rounded-full bg-emerald-500" />
                            {t("dashboard.active")}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Bottom */}
              <div className="flex flex-col gap-2 border-t border-slate-100 bg-slate-50/50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <p className="text-xs text-slate-400">
                  {t("dashboard.updated")}
                </p>

                <button className="w-fit text-xs font-medium text-slate-700 transition-colors hover:text-slate-950">
                  {t("dashboard.viewReport")} →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function SummaryCard({
  icon,
  iconClass,
  label,
  value,
}: {
  icon: React.ReactNode;
  iconClass: string;
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0 rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
      <div
        className={`mb-3 flex size-8 items-center justify-center rounded-lg ${iconClass}`}
      >
        {icon}
      </div>

      <p className="text-xs leading-5 text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-lg font-semibold tracking-tight text-slate-950">
        {value}
      </p>
    </div>
  );
}