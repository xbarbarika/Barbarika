"use client";

import { CTABannerButton } from "@/components/ui/CTABannerButton";

const CTABanner = () => {
  return (
    <section className="bg-primary py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
            INTERESTED IN COHOSTING AN<br />
            EXCLUSIVE BARBARIKA EVENT?
          </h2>
        </div>
        <CTABannerButton 
          variant="secondary"
          size="lg"
          className="bg-card text-card-foreground hover:bg-card/90 px-8 py-3 font-semibold rounded-full whitespace-nowrap"
          type="button"
        >
          SCHEDULE A CALL
        </CTABannerButton>
      </div>
    </section>
  );
};

export default CTABanner;
