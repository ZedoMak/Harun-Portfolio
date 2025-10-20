import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>&copy; {currentYear} Harun Ahmed</span>
            <span>All rights reserved.</span>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made by</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>Zerihun Mekonen - Software developer</span>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="text-sm text-muted-foreground hover:text-teal-500 transition-colors duration-300"
            >
              Back to Top
            </button>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm text-muted-foreground hover:text-teal-500 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm text-muted-foreground hover:text-teal-500 transition-colors duration-300"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm text-muted-foreground hover:text-teal-500 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 mt-6 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Crafting beautiful designs that tell your story •
            Available for freelance projects
          </p>
        </div>
      </div>
    </footer>
  );
}