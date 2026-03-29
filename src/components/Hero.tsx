import heroProducts from "@/assets/hero-products.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-16 py-6">
        <span className="font-display text-2xl md:text-3xl font-medium tracking-widest text-foreground">
          OCEAVE
        </span>
        <a
          href="#products"
          className="text-sm font-body tracking-wide text-muted-foreground hover:text-foreground transition-colors"
        >
          Products
        </a>
      </nav>

      <div className="container mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-24 pb-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light leading-[1.05] tracking-tight text-foreground">
            No Hype.
            <br />
            Just Results.
          </h1>
          <p className="text-lg md:text-xl text-text-subtle font-body font-light max-w-md mx-auto lg:mx-0">
            Skincare made simple.
          </p>
          <a
            href="#products"
            className="inline-block mt-4 px-8 py-3.5 bg-primary text-primary-foreground text-sm font-body font-medium tracking-wider uppercase rounded-none hover:opacity-90 transition-opacity"
          >
            Explore Products
          </a>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={heroProducts}
            alt="OCEAVE skincare collection"
            width={600}
            height={375}
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
