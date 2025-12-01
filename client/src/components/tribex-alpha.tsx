import { Bot, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TribexAlpha() {
  const alphaUrl = "https://www.tribex.club/";

  return (
    <section id="alpha" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              <Bot className="mr-2 h-4 w-4" />
              AI-Powered Trading
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Tribex Alpha</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our quantitative trading division leverages advanced machine learning algorithms to identify 
              and execute trades across 200+ liquid financial instruments in Indian derivative markets.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 mr-4">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">NSE & BSE Derivatives</h4>
                  <p className="text-muted-foreground">Complete coverage of liquid derivatives markets with real-time execution capabilities.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 mr-4">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">ML-Driven Signals</h4>
                  <p className="text-muted-foreground">Sophisticated prediction models analyzing market patterns and generating trading signals.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 mr-4">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Risk Management</h4>
                  <p className="text-muted-foreground">Advanced risk controls and portfolio optimization algorithms for consistent performance.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild className="bg-primary hover:bg-primary/90" data-testid="button-visit-alpha-section">
                <a href={alphaUrl} target="_blank" rel="noopener noreferrer">
                  Visit Now <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Financial trading dashboard with charts and analytics" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
