import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import BrandSection from "@/components/BrandSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedProduct from "@/components/FeaturedProduct";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <BrandSection />
      <WhyChooseUs />
      <FeaturedProduct />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
