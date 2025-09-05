import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="py-8 text-sm text-muted-foreground border-t border-border">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p>© {year} Ali Dridi. All rights reserved.</p>
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
          Back to top
        </button>
      </div>
    </footer>
  );
};
