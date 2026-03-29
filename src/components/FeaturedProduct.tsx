import productFacewash from "@/assets/product-facewash.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const FeaturedProduct = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div ref={ref} className="scroll-reveal container mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 flex justify-center">
          <img
            src={productFacewash}
            alt="OCEAVE Face Wash"
            loading="lazy"
            width={400}
            height={400}
            className="w-full max-w-sm object-contain"
          />
        </div>
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <span className="text-xs font-body tracking-widest uppercase text-text-subtle">
            Featured
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-light text-foreground">
            Face Wash
          </h2>
          <p className="text-text-subtle font-body font-light leading-relaxed max-w-md mx-auto lg:mx-0">
            Our gentle daily cleanser removes impurities without stripping your
            skin's natural moisture. Formulated with clean ingredients for a
            fresh, balanced feel every morning and night.
          </p>
          <a
            href="#order"
            className="inline-block px-8 py-3.5 bg-primary text-primary-foreground text-sm font-body font-medium tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
