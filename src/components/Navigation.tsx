import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

// Animated Logo Component
function AnimatedLogo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="relative h-8 flex items-center group"
    >
      {/* Single logo with individual letter animations */}
      <div className="flex items-center text-xl font-medium hover:text-teal-500 transition-colors duration-300">
        {/* H - always visible, gets teal color when collapsed */}
        <span 
          className={`transition-all duration-700 ease-out ${
            isScrolled ? 'text-teal-500' : ''
          }`}
        >
          H
        </span>
        
        {/* arun - fades out */}
        <span 
          className={`transition-all duration-700 ease-out overflow-hidden ${
            isScrolled 
              ? 'opacity-0 max-w-0 transform scale-x-0' 
              : 'opacity-100 max-w-[60px] transform scale-x-100'
          }`}
        >
          arun
        </span>
        
        {/* Space between names - fades out */}
        <span 
          className={`transition-all duration-700 ease-out ${
            isScrolled 
              ? 'opacity-0 max-w-0' 
              : 'opacity-100 max-w-[8px]'
          }`}
        >
          &nbsp;
        </span>
        
        {/* A - always visible */}
        <span 
          className="transition-all duration-700 ease-out"
        >
          A
        </span>
        
        {/* hmed - fades out */}
        <span 
          className={`transition-all duration-700 ease-out overflow-hidden ${
            isScrolled 
              ? 'opacity-0 max-w-0 transform scale-x-0' 
              : 'opacity-100 max-w-[60px] transform scale-x-100'
          }`}
        >
          hmed
        </span>
      </div>

      {/* Subtle background effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-teal-500/0 group-hover:bg-teal-500/10 transition-all duration-300 -z-10"></div>
    </button>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Animated Logo */}
          <div className="flex-shrink-0">
            <AnimatedLogo isScrolled={isScrolled} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() =>
                  scrollToSection(item.href.substring(1))
                }
                className="text-muted-foreground hover:text-teal-500 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() =>
                    scrollToSection(item.href.substring(1))
                  }
                  className="text-left text-muted-foreground hover:text-teal-500 transition-colors duration-300 py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-between mt-4">
                <ThemeToggle />
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full transition-all duration-300"
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}