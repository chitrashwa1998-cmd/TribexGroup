import { Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function TribexCapital() {
  return (
    <section id="capital" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-500 rounded-full text-sm font-medium mb-6">
              <Sprout className="mr-2 h-4 w-4" />
              Venture Capital
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Tribex Capital</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our venture capital arm focuses on identifying and nurturing promising startups across 
              technology, fintech, and innovative business models with high growth potential.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-card border border-border">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-500 mb-2">₹50Cr+</div>
                  <div className="text-sm text-muted-foreground">Assets Under Management</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border border-border">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-500 mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Portfolio Companies</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border border-border">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-500 mb-2">3x</div>
                  <div className="text-sm text-muted-foreground">Average Return Multiple</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border border-border">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-500 mb-2">5</div>
                  <div className="text-sm text-muted-foreground">Successful Exits</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                data-testid="button-view-portfolio"
              >
                View Portfolio
              </Button>
              <Button 
                variant="outline"
                className="border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
                data-testid="button-submit-pitch"
              >
                Submit Pitch Deck
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
