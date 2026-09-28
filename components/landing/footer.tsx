"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export function Footer() {
  const t = useTranslations("Footer");

  const productLinks = [
    t("productLinks.pos"),
    t("productLinks.inventory"),
    t("productLinks.accounting"),
    t("productLinks.crm"),
    t("productLinks.reports"),
    t("productLinks.integrations"),
  ];

  const companyLinks = [
    t("companyLinks.profile"),
    t("companyLinks.careers"),
    t("companyLinks.blog"),
    t("companyLinks.partners"),
    t("companyLinks.custom"),
  ];

  const helpLinks = [
    t("supportLinks.help"),
    t("supportLinks.faq"),
    t("supportLinks.status"),
    t("supportLinks.privacy"),
    t("supportLinks.terms"),
  ];

  const socialLinks = [
    {
      label: "Instagram",
      icon: FaInstagram,
    },
    {
      label: "LinkedIn",
      icon: FaLinkedinIn,
    },
    {
      label: "YouTube",
      icon: FaYoutube,
    },
  ];

  return (
    <footer className="border-t border-slate-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr_1.2fr] lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
                N
              </div>

              <span className="text-lg font-semibold tracking-tight text-slate-950">
                Nexora ERP
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
              {t("description")}
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-2">
              {socialLinks.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950 hover:shadow-sm"
                >
                  <Icon size={17} />
                </button>
              ))}
            </div>
          </div>

          <FooterColumn
            title={t("columns.product")}
            links={productLinks}
          />

          <FooterColumn
            title={t("columns.company")}
            links={companyLinks}
          />

          <FooterColumn
            title={t("columns.support")}
            links={helpLinks}
          />

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold text-slate-950">
              {t("newsletter.title")}
            </h3>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
              {t("newsletter.description")}
            </p>

            <div className="mt-5 flex max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="min-w-0 flex-1 bg-transparent px-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />

              <button
                type="button"
                className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white transition-colors hover:bg-slate-800"
                aria-label={t("newsletter.ariaLabel")}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-7 text-xs text-slate-400 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("copyright")}</p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <button
              type="button"
              className="transition-colors hover:text-slate-700"
            >
              {t("privacy")}
            </button>

            <button
              type="button"
              className="transition-colors hover:text-slate-700"
            >
              {t("terms")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-950">
        {title}
      </h3>

      <div className="mt-4 space-y-3">
        {links.map((link) => (
          <button
            key={link}
            type="button"
            className="block text-left text-sm text-slate-500 transition-colors hover:text-slate-950"
          >
            {link}
          </button>
        ))}
      </div>
    </div>
  );
}