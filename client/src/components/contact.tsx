import { MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6 text-center">Get in Touch</h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Ready to explore partnership opportunities or learn more about our services? 
              Connect with our team today.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">Address</h4>
                  <p className="text-muted-foreground">826/3 MEI layout Bangalore 560073</p>
                </div>
              </div>
              
              <div className="flex items-start bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">Phone</h4>
                  <p className="text-muted-foreground">+91 7892002478</p>
                </div>
              </div>
              
              <div className="flex items-start bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">Email</h4>
                  <p className="text-muted-foreground">tribex@tribexgroup.in</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h4 className="text-lg font-semibold text-foreground mb-6">Follow Us</h4>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 bg-primary/10 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 bg-primary/10 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors"
                  data-testid="link-instagram"
                  asChild
                >
                  <a href="https://www.instagram.com/tribex.group?igsh=OHoydW01YWE4Njd4" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
