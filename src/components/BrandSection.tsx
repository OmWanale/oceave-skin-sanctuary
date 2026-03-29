const BrandSection = () => {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6 md:px-16 max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl font-display font-light mb-8 text-foreground">
          Meet OCEAVE
        </h2>
        <p className="text-lg md:text-xl text-text-subtle font-body font-light leading-relaxed mb-6">
          We believe skincare shouldn't be complicated. No long ingredient lists you
          can't pronounce. No false promises. Just clean, effective formulas that
          work — for every skin type, every day.
        </p>
        <p className="font-display text-2xl md:text-3xl font-light italic text-foreground/70">
          "No hype. Just results."
        </p>
      </div>
    </section>
  );
};

export default BrandSection;
