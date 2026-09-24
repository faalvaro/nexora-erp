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
      className="scroll-mt-20 bg-white py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
        {/* LEFT */}
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1597E5]">
            {t("eyebrow")}
          </p>

          <h2 className="mt-4 max-w-[520px] text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[46px] sm:leading-[1.05]">
            {t("title")}
          </h2>

          <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
            {t("description")}
          </p>
        </div>

        {/* RIGHT */}
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.key}
                value={`item-${index}`}
                className="border-slate-200 last:border-b-0"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-slate-950 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="pb-5 pr-8 text-sm leading-7 text-slate-600">
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