import { Droplets, Users, Microscope, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  { icon: Droplets, title: "Clean Ingredients", desc: "No parabens, no sulfates. Just what your skin needs." },
  { icon: Users, title: "For All Skin Types", desc: "Gentle formulas suitable for sensitive to oily skin." },
  { icon: Microscope, title: "Dermatology Inspired", desc: "Backed by science, designed for real people." },
  { icon: Sparkles, title: "Simple & Effective", desc: "Minimal steps. Maximum results." },
];

const WhyChooseUs = () => {
  const ref = useScrollReveal();

  return (
    <section id="why" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="scroll-reveal container mx-auto px-6 md:px-16">
        <h2 className="text-3xl md:text-5xl font-display font-light text-center mb-16 text-foreground">
          Why OCEAVE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f) => (
            <div key={f.title} className="text-center space-y-4">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-surface">
                <f.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-medium text-foreground">{f.title}</h3>
              <p className="text-sm text-text-subtle font-body leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
