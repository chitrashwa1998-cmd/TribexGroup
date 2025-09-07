import { Sprout, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TribexCapital() {
  return (
    <section id="capital" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-500 rounded-full text-sm font-medium mb-6">
              <Clock className="mr-2 h-4 w-4" />
              Coming Soon
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Tribex Capital</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our venture capital division will focus on identifying and nurturing promising startups across 
              technology, fintech, and innovative business models with high growth potential.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 mr-4">
                  <Star className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Early Stage Investment</h4>
                  <p className="text-muted-foreground">Strategic investments in seed and Series A rounds for high-potential startups.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 mr-4">
                  <Star className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Sector Focus</h4>
                  <p className="text-muted-foreground">Targeting fintech, AI, blockchain, and innovative technology solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 mr-4">
                  <Star className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Value-Added Support</h4>
                  <p className="text-muted-foreground">Mentorship, networking, and strategic guidance for portfolio companies.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                data-testid="button-notify-launch"
              >
                Get Notified at Launch
              </Button>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern startup office with entrepreneurs collaborating on innovative projects" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
