import { Lightbulb, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">About Tribex Group</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded with a vision to revolutionize financial markets through technology and innovation, 
            Tribex Group represents the convergence of advanced quantitative methods, strategic investment, 
            and wealth management excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Innovation First</h3>
            <p className="text-muted-foreground">
              We leverage cutting-edge technology and quantitative methods to stay ahead of market trends 
              and deliver superior results.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Risk Management</h3>
            <p className="text-muted-foreground">
              Our sophisticated risk management frameworks ensure sustainable growth while protecting 
              capital across all market conditions.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Client Focused</h3>
            <p className="text-muted-foreground">
              Every strategy we deploy is designed with our clients' long-term success and financial 
              objectives as the primary focus.
            </p>
          </div>
        </div>

        {/* Leadership Team */}
        <Card className="bg-card border border-border rounded-2xl">
          <CardContent className="p-12">
            <h3 className="text-3xl font-bold text-card-foreground text-center mb-12">Leadership Team</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                  alt="Professional headshot of CEO" 
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h4 className="text-xl font-semibold text-card-foreground mb-2">John Smith</h4>
                <p className="text-muted-foreground mb-2">Chief Executive Officer</p>
                <p className="text-sm text-muted-foreground">15+ years in quantitative finance and algorithmic trading</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                  alt="Professional headshot of CTO" 
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h4 className="text-xl font-semibold text-card-foreground mb-2">Sarah Johnson</h4>
                <p className="text-muted-foreground mb-2">Chief Technology Officer</p>
                <p className="text-sm text-muted-foreground">Former ML researcher at top-tier investment banks</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                  alt="Professional headshot of Chief Investment Officer" 
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h4 className="text-xl font-semibold text-card-foreground mb-2">Michael Chen</h4>
                <p className="text-muted-foreground mb-2">Chief Investment Officer</p>
                <p className="text-sm text-muted-foreground">20+ years in venture capital and private equity</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
