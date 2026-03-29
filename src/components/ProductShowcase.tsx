import productBodywash from "@/assets/product-bodywash.png";
import productShampoo from "@/assets/product-shampoo.png";
import productConditioner from "@/assets/product-conditioner.png";
import productAloe from "@/assets/product-aloe.png";
import productMoisturizer from "@/assets/product-moisturizer.png";
import productFacewash from "@/assets/product-facewash.png";

const products = [
  { name: "Face Wash", desc: "Gentle daily cleanser", image: productFacewash },
  { name: "Body Wash", desc: "For all skin types", image: productBodywash },
  { name: "Shampoo", desc: "Clean & nourishing", image: productShampoo },
  { name: "Conditioner", desc: "Soft & silky finish", image: productConditioner },
  { name: "Aloe Essence", desc: "Hydration boost", image: productAloe },
  { name: "Moisturizer", desc: "Deep moisture lock", image: productMoisturizer },
];

const ProductShowcase = () => {
  return (
    <section id="products" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-16">
        <h2 className="text-3xl md:text-5xl font-display font-light text-center mb-4 text-foreground">
          Our Products
        </h2>
        <p className="text-center text-text-subtle font-body mb-16 max-w-md mx-auto">
          Simple formulas. Real results. Nothing unnecessary.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-surface rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-full aspect-square flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={320}
                  height={320}
                  className="w-3/4 h-3/4 object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-text-subtle font-body">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
