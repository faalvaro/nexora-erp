import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { TrustedBy } from "@/components/landing/trusted-by";
import { Industries } from "@/components/landing/industries";
import { Modules } from "@/components/landing/modules";
import { ProductShowcase } from "@/components/landing/product-showcase";
import { MultiBranch } from "@/components/landing/multi-branch";
import { Pricing } from "@/components/landing/pricing";
import { Testimonials } from "@/components/landing/testimonials";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { CustomContactSection } from "@/components/landing/custom-contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />

      <main>
        <Hero />
        <TrustedBy />
        <Industries />
        <Modules />
        <ProductShowcase />
        <MultiBranch />
        <Pricing />
        <CustomContactSection />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}