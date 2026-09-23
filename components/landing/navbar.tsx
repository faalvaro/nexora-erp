"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();

  const navItems = [
    {
      label: t("companyProfile"),
      href: "#company",
    },
    {
      label: t("customSolutions"),
      href: "#custom",
    },
    {
      label: t("demo"),
      href: "#demo",
    },
    {
      label: t("pricing"),
      href: "#pricing",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (newLocale: "en" | "id") => {
    if (newLocale === locale) return;

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    router.refresh();
  };

  return (
    <motion.header
      initial={false}
      animate={{
        top: scrolled ? 16 : 0,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 right-0 z-50 flex justify-center px-4"
    >
      <motion.div
        initial={false}
        animate={{
          width: scrolled ? "min(1080px, calc(100% - 32px))" : "100%",
          borderRadius: scrolled ? 20 : 0,
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.88)"
            : "rgba(255,255,255,0)",
          boxShadow: scrolled
            ? "0 12px 40px rgba(15, 23, 42, 0.08)"
            : "0 0 0 rgba(0,0,0,0)",
          borderColor: scrolled
            ? "rgba(226,232,240,0.9)"
            : "rgba(255,255,255,0)",
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="border backdrop-blur-xl"
      >
        <div
          className={`mx-auto flex h-[72px] items-center justify-between px-5 transition-all duration-300 ${
            scrolled ? "max-w-none" : "max-w-7xl"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight text-slate-950"
          >
            <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-sm font-bold text-white">
              N
            </div>

            <span className="text-[17px]">Nexora ERP</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 md:flex">
            {/* Language Toggle */}
            <div className="flex items-center rounded-xl border border-slate-200 bg-white/80 p-1">
              <button
                type="button"
                onClick={() => changeLanguage("en")}
                className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all ${
                  locale === "en"
                    ? "bg-slate-950 text-white"
                    : "text-slate-500 hover:text-slate-950"
                }`}
              >
                EN
              </button>

              <button
                type="button"
                onClick={() => changeLanguage("id")}
                className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all ${
                  locale === "id"
                    ? "bg-slate-950 text-white"
                    : "text-slate-500 hover:text-slate-950"
                }`}
              >
                ID
              </button>
            </div>

            <Link
              href="/sign-in"
              className="rounded-xl px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
            >
              {t("signIn")}
            </Link>

            <Link
              href="#pricing"
              className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              {t("freeTrial")}
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex size-10 items-center justify-center rounded-xl text-slate-800 hover:bg-slate-100 md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-slate-200/70 md:hidden"
            >
              <div className="flex flex-col gap-1 p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="my-2 h-px bg-slate-200" />

                {/* Mobile Language Toggle */}
                <div className="mb-2 flex rounded-xl border border-slate-200 bg-slate-50 p-1">
                  <button
                    type="button"
                    onClick={() => changeLanguage("en")}
                    className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition-all ${
                      locale === "en"
                        ? "bg-white text-slate-950 shadow-sm"
                        : "text-slate-500"
                    }`}
                  >
                    EN
                  </button>

                  <button
                    type="button"
                    onClick={() => changeLanguage("id")}
                    className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition-all ${
                      locale === "id"
                        ? "bg-white text-slate-950 shadow-sm"
                        : "text-slate-500"
                    }`}
                  >
                    ID
                  </button>
                </div>

                <Link
                  href="/sign-in"
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {t("signIn")}
                </Link>

                <Link
                  href="#pricing"
                  className="mt-1 rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-medium text-white"
                >
                  {t("freeTrial")}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}