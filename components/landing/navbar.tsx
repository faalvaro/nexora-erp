"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

type DesktopMenu = "product" | "solutions" | null;
type MobileSection = "product" | "solutions" | null;

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<DesktopMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] =
    useState<MobileSection>(null);

  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();

  const changeLanguage = (newLocale: "en" | "id") => {
    if (newLocale === locale) return;

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    router.refresh();
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSection(null);
  };

  return (
    <header
      onMouseLeave={() => setActiveMenu(null)}
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl"
    >
      {/* MAIN NAVBAR */}
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto] items-center px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 justify-self-start font-semibold tracking-tight text-slate-950"
        >
          <div className="flex size-8 items-center justify-center rounded-lg bg-[#1597E5] text-xs font-bold text-white">
            N
          </div>

          <span className="text-[16px]">
            Nexora ERP
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-1 justify-self-center lg:flex">
          {/* Product */}
          <button
            type="button"
            onMouseEnter={() => setActiveMenu("product")}
            onFocus={() => setActiveMenu("product")}
            onClick={() =>
              setActiveMenu((current) =>
                current === "product" ? null : "product",
              )
            }
            className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              activeMenu === "product"
                ? "bg-slate-100 text-slate-950"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
            }`}
          >
            {t("product")}
            <ChevronDown
              size={15}
              className={`transition-transform ${
                activeMenu === "product"
                  ? "rotate-180"
                  : ""
              }`}
            />
          </button>

          {/* Features */}
          <Link
            href="#features"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
          >
            {t("features")}
          </Link>

          {/* Solutions */}
          <button
            type="button"
            onMouseEnter={() => setActiveMenu("solutions")}
            onFocus={() => setActiveMenu("solutions")}
            onClick={() =>
              setActiveMenu((current) =>
                current === "solutions"
                  ? null
                  : "solutions",
              )
            }
            className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              activeMenu === "solutions"
                ? "bg-slate-100 text-slate-950"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
            }`}
          >
            {t("solutions")}
            <ChevronDown
              size={15}
              className={`transition-transform ${
                activeMenu === "solutions"
                  ? "rotate-180"
                  : ""
              }`}
            />
          </button>

          <Link
            href="#demo"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
          >
            {t("demo")}
          </Link>

          <Link
            href="#pricing"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
          >
            {t("pricing")}
          </Link>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-2 justify-self-end lg:flex">
          <div className="flex items-center rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => changeLanguage("en")}
              className={`rounded-md px-2.5 py-1.5 text-xs font-semibold transition-all ${
                locale === "en"
                  ? "bg-white text-slate-950 shadow-sm"
                  : "text-slate-500 hover:text-slate-950"
              }`}
            >
              EN
            </button>

            <button
              type="button"
              onClick={() => changeLanguage("id")}
              className={`rounded-md px-2.5 py-1.5 text-xs font-semibold transition-all ${
                locale === "id"
                  ? "bg-white text-slate-950 shadow-sm"
                  : "text-slate-500 hover:text-slate-950"
              }`}
            >
              ID
            </button>
          </div>

          <Link
            href="/sign-in"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
          >
            {t("signIn")}
          </Link>

          <Link
            href="#pricing"
            className="rounded-full bg-[#1597E5] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0F86CC]"
          >
            {t("freeTrial")}
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          onClick={() =>
            setMobileOpen((current) => !current)
          }
          className="flex size-10 items-center justify-center rounded-lg text-slate-800 transition-colors hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </div>

      {/* DESKTOP MEGA MENUS */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            onMouseEnter={() => setActiveMenu(activeMenu)}
            className="absolute inset-x-0 top-full hidden border-b border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] lg:block"
          >
            {activeMenu === "product" && (
              <ProductMegaMenu t={t} />
            )}

            {activeMenu === "solutions" && (
              <SolutionsMegaMenu t={t} />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
              {/* PRODUCT MOBILE */}
              <button
                type="button"
                onClick={() =>
                  setMobileSection((current) =>
                    current === "product"
                      ? null
                      : "product",
                  )
                }
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {t("product")}

                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    mobileSection === "product"
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileSection === "product" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="ml-3 flex flex-col border-l border-slate-200 py-2 pl-3">
                      <MobileLink
                        href="#demo"
                        onClick={closeMobile}
                      >
                        {t(
                          "productMenu.overview",
                        )}
                      </MobileLink>

                      <MobileLink
                        href="#features"
                        onClick={closeMobile}
                      >
                        {t(
                          "productMenu.allFeatures",
                        )}
                      </MobileLink>

                      <MobileLink
                        href="#demo"
                        onClick={closeMobile}
                      >
                        {t("productMenu.pos")}
                      </MobileLink>

                      <MobileLink
                        href="#custom"
                        onClick={closeMobile}
                      >
                        {t(
                          "productMenu.inventory",
                        )}
                      </MobileLink>

                      <MobileLink
                        href="#multi-branch"
                        onClick={closeMobile}
                      >
                        {t(
                          "productMenu.multiBranch",
                        )}
                      </MobileLink>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="#custom"
                onClick={closeMobile}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {t("features")}
              </Link>

              {/* SOLUTIONS MOBILE */}
              <button
                type="button"
                onClick={() =>
                  setMobileSection((current) =>
                    current === "solutions"
                      ? null
                      : "solutions",
                  )
                }
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {t("solutions")}

                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    mobileSection === "solutions"
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileSection ===
                  "solutions" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="ml-3 flex flex-col border-l border-slate-200 py-2 pl-3">
                      <MobileLink
                        href="#company"
                        onClick={closeMobile}
                      >
                        {t(
                          "solutionsMenu.fnb",
                        )}
                      </MobileLink>

                      <MobileLink
                        href="#company"
                        onClick={closeMobile}
                      >
                        {t(
                          "solutionsMenu.retail",
                        )}
                      </MobileLink>

                      <MobileLink
                        href="#company"
                        onClick={closeMobile}
                      >
                        {t(
                          "solutionsMenu.services",
                        )}
                      </MobileLink>

                      <MobileLink
                        href="#multi-branch"
                        onClick={closeMobile}
                      >
                        {t(
                          "solutionsMenu.multiBranch",
                        )}
                      </MobileLink>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="#demo"
                onClick={closeMobile}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {t("demo")}
              </Link>

              <Link
                href="#pricing"
                onClick={closeMobile}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {t("pricing")}
              </Link>

              <div className="my-3 h-px bg-slate-200" />

              {/* LANGUAGE */}
              <div className="mb-3 flex rounded-lg bg-slate-100 p-1">
                <button
                  type="button"
                  onClick={() =>
                    changeLanguage("en")
                  }
                  className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold ${
                    locale === "en"
                      ? "bg-white text-slate-950 shadow-sm"
                      : "text-slate-500"
                  }`}
                >
                  EN
                </button>

                <button
                  type="button"
                  onClick={() =>
                    changeLanguage("id")
                  }
                  className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold ${
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
                onClick={closeMobile}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {t("signIn")}
              </Link>

              <Link
                href="#pricing"
                onClick={closeMobile}
                className="mt-2 rounded-full bg-[#1597E5] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                {t("freeTrial")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function ProductMegaMenu({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-[1.2fr_1fr_0.75fr] gap-12 px-8 py-8">
      {/* PRODUCT OVERVIEW */}
      <div>
        <MenuLabel>
          {t("productMenu.overviewLabel")}
        </MenuLabel>

        <Link
          href="#demo"
          className="mt-4 block rounded-2xl bg-slate-50 p-5 transition-colors hover:bg-slate-100"
        >
          <p className="font-semibold text-slate-950">
            {t("productMenu.overviewTitle")}
          </p>

          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
            {t(
              "productMenu.overviewDescription",
            )}
          </p>
        </Link>

        <div className="mt-3 flex gap-4">
          <MegaLink href="#demo">
            {t("productMenu.overview")}
          </MegaLink>

          <MegaLink href="#features">
            {t("productMenu.allFeatures")}
          </MegaLink>
        </div>
      </div>

      {/* CORE */}
      <div>
        <MenuLabel>
          {t("productMenu.coreLabel")}
        </MenuLabel>

        <div className="mt-4 grid gap-1">
          <MegaItem
            href="#demo"
            title={t("productMenu.pos")}
          />

          <MegaItem
            href="#custom"
            title={t("productMenu.inventory")}
          />

          <MegaItem
            href="#custom"
            title={t("productMenu.analytics")}
          />

          <MegaItem
            href="#multi-branch"
            title={t(
              "productMenu.multiBranch",
            )}
          />
        </div>
      </div>

      {/* MORE */}
      <div>
        <MenuLabel>
          {t("productMenu.moreLabel")}
        </MenuLabel>

        <div className="mt-4 grid gap-1">
          <MegaItem
            href="#custom"
            title={t(
              "productMenu.integrations",
            )}
          />

          <MegaItem
            href="#custom"
            title={t(
              "productMenu.customSolutions",
            )}
          />
        </div>
      </div>
    </div>
  );
}

function SolutionsMegaMenu({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-16 px-8 py-8">
      {/* INDUSTRY */}
      <div>
        <MenuLabel>
          {t("solutionsMenu.industryLabel")}
        </MenuLabel>

        <div className="mt-4 grid grid-cols-2 gap-1">
          <MegaItem
            href="#company"
            title={t("solutionsMenu.fnb")}
          />

          <MegaItem
            href="#company"
            title={t("solutionsMenu.retail")}
          />

          <MegaItem
            href="#company"
            title={t("solutionsMenu.services")}
          />

          <MegaItem
            href="#multi-branch"
            title={t(
              "solutionsMenu.multiBranch",
            )}
          />
        </div>
      </div>

      {/* BUSINESS NEED */}
      <div>
        <MenuLabel>
          {t("solutionsMenu.needLabel")}
        </MenuLabel>

        <div className="mt-4 grid grid-cols-2 gap-1">
          <MegaItem
            href="#demo"
            title={t("solutionsMenu.sales")}
          />

          <MegaItem
            href="#custom"
            title={t(
              "solutionsMenu.inventory",
            )}
          />

          <MegaItem
            href="#custom"
            title={t(
              "solutionsMenu.customers",
            )}
          />

          <MegaItem
            href="#custom"
            title={t(
              "solutionsMenu.analytics",
            )}
          />
        </div>
      </div>
    </div>
  );
}

function MenuLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
      {children}
    </p>
  );
}

function MegaItem({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#1597E5]"
    >
      {title}
    </Link>
  );
}

function MegaLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-[#1597E5] hover:text-[#0F86CC]"
    >
      {children} →
    </Link>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-950"
    >
      {children}
    </Link>
  );
}