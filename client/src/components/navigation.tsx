import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Tribex Alpha", id: "alpha" },
    { label: "Tribex Wealth", id: "wealth" },
    { label: "Tribex Capital", id: "capital" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background border-b border-border" : "bg-background/80 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20 relative">
          {/* Desktop Navigation - Left Side */}
          <div className="hidden md:flex items-center space-x-8 absolute left-0">
            {navItems.slice(0, 3).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Centered Logo */}
          <div className="flex items-center justify-center">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-3 group"
              data-testid="logo-button"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-2xl font-bold text-white">T</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                  TRIBEX
                </span>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  GROUP
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex items-center space-x-8 absolute right-0">
            {navItems.slice(3).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="mobile-menu-button"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
                data-testid={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
