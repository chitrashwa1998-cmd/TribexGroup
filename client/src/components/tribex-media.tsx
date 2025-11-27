
import { Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TribexMedia() {
  return (
    <section id="media" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              <Clock className="mr-2 h-4 w-4" />
              Coming Soon
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Tribex Media</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our media division will deliver cutting-edge content creation, digital marketing, and brand storytelling 
              services for businesses looking to amplify their presence in the digital landscape.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1 mr-4">
                  <Star className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Content Creation</h4>
                  <p className="text-muted-foreground">High-quality video, photography, and multimedia content tailored to your brand identity.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1 mr-4">
                  <Star className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Digital Marketing</h4>
                  <p className="text-muted-foreground">Strategic campaigns across social media, SEO, and digital advertising platforms.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1 mr-4">
                  <Star className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Brand Strategy</h4>
                  <p className="text-muted-foreground">Comprehensive brand development and storytelling to connect with your target audience.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                data-testid="button-notify-launch"
              >
                Get Notified at Launch
              </Button>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Modern media and content creation workspace" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
