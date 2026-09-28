"use client";

import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const t = useTranslations("FAQ");

  const faqs = [
    {
      key: "whatIs",
      question: t("items.whatIs.question"),
      answer: t("items.whatIs.answer"),
    },
    {
      key: "included",
      question: t("items.included.question"),
      answer: t("items.included.answer"),
    },
    {
      key: "multiBranch",
      question: t("items.multiBranch.question"),
      answer: t("items.multiBranch.answer"),
    },
    {
      key: "custom",
      question: t("items.custom.question"),
      answer: t("items.custom.answer"),
    },
    {
      key: "try",
      question: t("items.try.question"),
      answer: t("items.try.answer"),
    },
  ];

  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid min-w-0 max-w-7xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14 lg:px-8">
        {/* LEFT */}
        <div className="min-w-0 lg:sticky lg:top-28">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            {t("eyebrow")}
          </p>

          <h2 className="mt-4 max-w-[520px] text-[34px] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-[46px] sm:leading-[1.05]">
            {t("title")}
          </h2>

          <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
            {t("description")}
          </p>
        </div>

        {/* RIGHT */}
        <div className="min-w-0 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm sm:rounded-[28px] sm:p-6 lg:p-8">
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.key}
                value={`item-${index}`}
                className="border-slate-200 last:border-b-0"
              >
                <AccordionTrigger className="gap-4 py-4 text-left text-[15px] font-semibold leading-6 text-slate-950 hover:no-underline sm:py-5 sm:text-base">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="pb-4 pr-2 text-sm leading-7 text-slate-600 sm:pb-5 sm:pr-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}