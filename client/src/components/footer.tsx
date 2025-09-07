import { Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold tracking-tight">
                  <span className="text-primary">T</span>
                  <span className="text-card-foreground">ribe</span>
                  <span className="text-accent">X</span>
                  <span className="text-muted-foreground mx-2">•</span>
                  <span className="text-primary">G</span>
                  <span className="text-card-foreground">roup</span>
                </div>
                <div className="h-0.5 bg-gradient-to-r from-primary via-accent to-primary mt-1 opacity-80"></div>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Pioneering financial innovation through advanced technology, strategic investments, 
              and comprehensive wealth management solutions.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-twitter"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-youtube"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("alpha")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-tribex-alpha"
                >
                  Tribex Alpha
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("wealth")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-tribex-wealth"
                >
                  Tribex Wealth
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("capital")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-tribex-capital"
                >
                  Tribex Capital
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-contact"
                >
                  Contact
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Tribex Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
