import { MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="order" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-16 max-w-2xl text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-display font-light text-foreground">
          Order Now
        </h2>
        <p className="text-text-subtle font-body font-light">
          Ready to experience clean skincare? Reach out to us on WhatsApp and
          we'll take care of the rest.
        </p>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-sm font-body font-medium tracking-wider uppercase hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp Us
        </a>
        <p className="text-sm text-text-subtle font-body pt-4">
          Or email us at{" "}
          <a href="mailto:hello@oceave.com" className="underline hover:text-foreground transition-colors">
            hello@oceave.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
