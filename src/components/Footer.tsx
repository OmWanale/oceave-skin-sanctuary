const Footer = () => {
  return (
    <footer className="py-12 bg-surface border-t border-border">
      <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="font-display text-xl tracking-widest text-foreground">OCEAVE</span>
          <p className="text-xs text-text-subtle font-body mt-1">No hype. Just results.</p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com/oceave"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-subtle font-body hover:text-foreground transition-colors"
          >
            Instagram
          </a>
          <span className="text-border">|</span>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-subtle font-body hover:text-foreground transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-text-subtle font-body mt-8">
        © {new Date().getFullYear()} OCEAVE. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
