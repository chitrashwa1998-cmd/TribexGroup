import { Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TribexWealth() {
  return (
    <section id="wealth" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-card border border-border rounded-xl p-6 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Modern Indian financial district representing wealth management services" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              <Clock className="mr-2 h-4 w-4" />
              Upcoming
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Tribex Wealth</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our wealth management division will offer sophisticated portfolio management and investment 
              advisory services for high-net-worth individuals and institutional clients.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1 mr-4">
                  <Star className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Portfolio Management</h4>
                  <p className="text-muted-foreground">Customized investment strategies tailored to individual risk profiles and objectives.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1 mr-4">
                  <Star className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Alternative Investments</h4>
                  <p className="text-muted-foreground">Access to exclusive investment opportunities in private markets and alternative assets.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1 mr-4">
                  <Star className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Family Office Services</h4>
                  <p className="text-muted-foreground">Comprehensive wealth planning, tax optimization, and legacy management solutions.</p>
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
        </div>
      </div>
    </section>
  );
}
