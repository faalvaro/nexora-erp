import {
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  Package,
  ReceiptText,
  ShoppingCart,
  WalletCards,
} from "lucide-react";

const topProducts = [
  {
    product: "Kopi Susu Gula Aren",
    sold: 842,
    revenue: "Rp 21,4 jt",
  },
  {
    product: "Matcha Latte",
    sold: 716,
    revenue: "Rp 18,2 jt",
  },
  {
    product: "Americano",
    sold: 590,
    revenue: "Rp 12,6 jt",
  },
  {
    product: "Croissant",
    sold: 482,
    revenue: "Rp 9,8 jt",
  },
];

const branchPerformance = [
  {
    branch: "Jakarta Pusat",
    revenue: "Rp 125,4 jt",
    change: "+12,4%",
    positive: true,
  },
  {
    branch: "Surabaya",
    revenue: "Rp 98,2 jt",
    change: "+9,1%",
    positive: true,
  },
  {
    branch: "Bandung",
    revenue: "Rp 76,3 jt",
    change: "-4,8%",
    positive: false,
  },
];

const stockAlerts = [
  {
    product: "Susu Fresh Milk",
    branch: "Jakarta Pusat",
    stock: "8 pcs",
    status: "Kritis",
  },
  {
    product: "Matcha Powder",
    branch: "Bandung",
    stock: "12 pcs",
    status: "Menipis",
  },
  {
    product: "Cup 16 oz",
    branch: "Surabaya",
    stock: "18 pcs",
    status: "Menipis",
  },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-[1600px] space-y-6">
      {/* KPI */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          title="Revenue"
          value="Rp 402,9 jt"
          change="+12,4%"
          positive
          icon={<WalletCards size={18} />}
        />

        <KpiCard
          title="Transaksi"
          value="5.240"
          change="+8,1%"
          positive
          icon={<ShoppingCart size={18} />}
        />

        <KpiCard
          title="Rata-rata Order"
          value="Rp 76.890"
          change="+3,7%"
          positive
          icon={<ReceiptText size={18} />}
        />

        <KpiCard
          title="Stok Menipis"
          value="12 item"
          change="Perlu tindakan"
          warning
          icon={<Package size={18} />}
        />
      </section>

      {/* Main analytical row */}
      <section className="grid gap-6 xl:grid-cols-[1.65fr_0.85fr]">
        {/* Revenue Trend */}
        <div className="rounded-[24px] border border-slate-200 bg-white p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-semibold text-slate-950">
                Tren Penjualan
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Revenue 30 hari terakhir.
              </p>
            </div>

            <span className="text-sm font-medium text-emerald-600">
              +12,4%
            </span>
          </div>

          {/* Wireframe Chart */}
          <div className="mt-8">
            <div className="flex h-64 items-end gap-2 border-b border-l border-slate-200 pl-3">
              {[
                35, 40, 37, 48, 46, 55, 51, 63, 59, 70, 66, 76, 72, 82,
                78, 89, 86, 94,
              ].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t bg-[#1597E5]/80"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>

            <div className="mt-3 flex justify-between pl-3 text-xs text-slate-400">
              <span>15 Agu</span>
              <span>30 Agu</span>
              <span>13 Sep</span>
            </div>
          </div>
        </div>

        {/* Insight */}
        <div className="rounded-[24px] border border-slate-200 bg-white p-6">
          <div>
            <h2 className="font-semibold text-slate-950">
              Perlu Perhatian
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Insight yang dapat ditindaklanjuti.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <Insight
              type="positive"
              title="Penjualan meningkat"
              description="Revenue naik 12,4% dibanding periode sebelumnya."
            />

            <Insight
              type="negative"
              title="Cabang Bandung menurun"
              description="Revenue turun 4,8%. Periksa produk dan transaksi cabang."
            />

            <Insight
              type="warning"
              title="12 stok menipis"
              description="Beberapa bahan membutuhkan restock segera."
            />
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="grid gap-6 xl:grid-cols-2">
        {/* Top Products */}
        <div className="rounded-[24px] border border-slate-200 bg-white p-6">
          <div>
            <h2 className="font-semibold text-slate-950">
              Produk Terlaris
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Produk dengan volume penjualan tertinggi.
            </p>
          </div>

          <div className="mt-6 space-y-5">
            {topProducts.map((item, index) => (
              <div
                key={item.product}
                className="grid grid-cols-[32px_1fr_auto] items-center gap-4"
              >
                <div className="text-sm font-medium text-slate-400">
                  {index + 1}
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-800">
                    {item.product}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {item.sold} terjual
                  </p>
                </div>

                <p className="text-sm font-semibold text-slate-950">
                  {item.revenue}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Branch */}
        <div className="rounded-[24px] border border-slate-200 bg-white p-6">
          <div>
            <h2 className="font-semibold text-slate-950">
              Performa Cabang
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Perbandingan revenue antar lokasi.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {branchPerformance.map((branch) => (
              <div
                key={branch.branch}
                className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-4"
              >
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    {branch.branch}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {branch.revenue}
                  </p>
                </div>

                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    branch.positive
                      ? "text-emerald-600"
                      : "text-red-500"
                  }`}
                >
                  {branch.positive ? (
                    <ArrowUpRight size={16} />
                  ) : (
                    <ArrowDownRight size={16} />
                  )}

                  {branch.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stock action table */}
      <section className="rounded-[24px] border border-slate-200 bg-white p-6">
        <div>
          <h2 className="font-semibold text-slate-950">
            Stok yang Perlu Perhatian
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Item yang mungkin membutuhkan tindakan restock.
          </p>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead>
              <tr className="border-b border-slate-100 text-xs text-slate-400">
                <th className="pb-4 font-medium">Produk</th>
                <th className="pb-4 font-medium">Cabang</th>
                <th className="pb-4 font-medium">Stok</th>
                <th className="pb-4 font-medium">Status</th>
                <th className="pb-4 text-right font-medium">Tindakan</th>
              </tr>
            </thead>

            <tbody>
              {stockAlerts.map((item) => (
                <tr
                  key={`${item.product}-${item.branch}`}
                  className="border-b border-slate-50 last:border-0"
                >
                  <td className="py-4 text-sm font-medium text-slate-800">
                    {item.product}
                  </td>

                  <td className="py-4 text-sm text-slate-500">
                    {item.branch}
                  </td>

                  <td className="py-4 text-sm text-slate-500">
                    {item.stock}
                  </td>

                  <td className="py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        item.status === "Kritis"
                          ? "bg-red-50 text-red-600"
                          : "bg-amber-50 text-amber-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="py-4 text-right">
                    <button className="text-sm font-medium text-[#1597E5]">
                      Lihat stok →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function KpiCard({
  title,
  value,
  change,
  icon,
  positive,
  warning,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  positive?: boolean;
  warning?: boolean;
}) {
  return (
    <div className="rounded-[20px] border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="flex size-10 items-center justify-center rounded-xl bg-sky-50 text-[#1597E5]">
          {icon}
        </div>

        <span
          className={`text-xs font-medium ${
            warning
              ? "text-amber-600"
              : positive
              ? "text-emerald-600"
              : "text-slate-400"
          }`}
        >
          {change}
        </span>
      </div>

      <p className="mt-5 text-sm text-slate-400">
        {title}
      </p>

      <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">
        {value}
      </p>
    </div>
  );
}

function Insight({
  type,
  title,
  description,
}: {
  type: "positive" | "negative" | "warning";
  title: string;
  description: string;
}) {
  const styles = {
    positive: "border-emerald-100 bg-emerald-50/60",
    negative: "border-red-100 bg-red-50/60",
    warning: "border-amber-100 bg-amber-50/60",
  };

  const iconStyles = {
    positive: "text-emerald-600",
    negative: "text-red-500",
    warning: "text-amber-500",
  };

  return (
    <div
      className={`rounded-2xl border p-4 ${styles[type]}`}
    >
      <div className="flex gap-3">
        <AlertTriangle
          size={18}
          className={`mt-0.5 shrink-0 ${iconStyles[type]}`}
        />

        <div>
          <p className="text-sm font-semibold text-slate-800">
            {title}
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}