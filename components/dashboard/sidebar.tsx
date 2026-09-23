import Link from "next/link";
import {
  BarChart3,
  Boxes,
  Building2,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";

const menu = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: "Penjualan",
    href: "#",
    icon: ShoppingCart,
  },
  {
    label: "Inventory",
    href: "#",
    icon: Boxes,
  },
  {
    label: "Produk",
    href: "#",
    icon: Package,
  },
  {
    label: "Pelanggan",
    href: "#",
    icon: Users,
  },
  {
    label: "Cabang",
    href: "#",
    icon: Building2,
  },
  {
    label: "Laporan",
    href: "#",
    icon: BarChart3,
  },
];

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      {/* Brand */}
      <div className="flex h-20 items-center border-b border-slate-100 px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-[#1597E5] text-sm font-bold text-white">
            N
          </div>

          <div>
            <p className="font-semibold text-slate-950">Nexora ERP</p>
            <p className="text-xs text-slate-400">Owner Dashboard</p>
          </div>
        </Link>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-1 p-4">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                item.active
                  ? "bg-sky-50 text-[#1597E5]"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Settings */}
      <div className="border-t border-slate-100 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900">
          <Settings size={18} />
          Pengaturan
        </button>
      </div>
    </aside>
  );
}