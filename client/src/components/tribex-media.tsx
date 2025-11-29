import { Palette, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import mediaImage from "@assets/stock_images/modern_website_desig_6eafd527.jpg";

export default function TribexMedia() {
  const mediaUrl = "#"; // TODO: Replace with actual Tribex Media website URL

  return (
    <section id="media" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              <Palette className="mr-2 h-4 w-4" />
              Creative & Digital Brand-Building
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Tribex Media</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We specialize in helping individuals and businesses build their online identity through premium 
              personal branding websites, visual design, and digital presence solutions. Our focus is to transform 
              creators, professionals, and brands into powerful online personalities through modern design, 
              storytelling, and digital experiences.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 mr-4">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Personal Branding Websites</h4>
                  <p className="text-muted-foreground">Premium, custom-designed websites that showcase your unique identity and help you stand out in the digital landscape.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 mr-4">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Visual Design & Identity</h4>
                  <p className="text-muted-foreground">Cohesive visual branding including color systems, typography, and design assets that define your professional image.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 mr-4">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Digital Presence Solutions</h4>
                  <p className="text-muted-foreground">End-to-end digital experiences that transform creators, professionals, and brands into powerful online personalities.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild className="bg-primary hover:bg-primary/90" data-testid="button-visit-media-section">
                <a href={mediaUrl} target="_blank" rel="noopener noreferrer">
                  Visit Now <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 shadow-2xl">
            <img 
              src={mediaImage}
              alt="Modern website design on laptop in creative workspace" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
