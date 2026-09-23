import { Bell, ChevronDown } from "lucide-react";

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-6 backdrop-blur lg:px-8">
      <div>
        <h1 className="text-lg font-semibold text-slate-950">
          Overview Bisnis
        </h1>

        <p className="mt-0.5 text-sm text-slate-400">
          Ringkasan performa dan hal yang perlu diperhatikan.
        </p>
      </div>

      <div className="flex items-center gap-3">
        {/* Period */}
        <button className="hidden items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 sm:flex">
          30 Hari Terakhir
          <ChevronDown size={15} />
        </button>

        {/* Branch */}
        <button className="hidden items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 md:flex">
          Semua Cabang
          <ChevronDown size={15} />
        </button>

        {/* Notification */}
        <button className="relative flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500">
          <Bell size={17} />

          <span className="absolute right-2 top-2 size-2 rounded-full bg-red-500" />
        </button>

        {/* Avatar */}
        <div className="flex size-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-semibold text-white">
          RO
        </div>
      </div>
    </header>
  );
}