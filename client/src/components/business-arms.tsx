import { TrendingUp, Coins, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BusinessArms() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Three Divisions, One Vision</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tribex Group operates through three specialized divisions, each designed to excel in 
            distinct areas of financial innovation and investment management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tribex Alpha Card */}
          <Card className="bg-card border border-border hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground mb-4">Tribex Alpha</h3>
              <p className="text-muted-foreground mb-6">
                Advanced algorithmic trading using machine learning models for 200+ liquid derivatives 
                in NSE and BSE markets.
              </p>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("alpha")}
                className="text-primary font-semibold hover:underline p-0 h-auto"
                data-testid="button-learn-more-alpha"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Tribex Wealth Card */}
          <Card className="bg-card border border-border hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Coins className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground mb-4">Tribex Wealth</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive asset management services designed for sophisticated investors. 
                Launching soon with cutting-edge portfolio strategies.
              </p>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-accent font-medium">
                Coming Soon
              </div>
            </CardContent>
          </Card>

          {/* Tribex Capital Card */}
          <Card className="bg-card border border-border hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-500/10 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground mb-4">Tribex Capital</h3>
              <p className="text-muted-foreground mb-6">
                Strategic venture capital investments in promising startups across technology, 
                fintech, and innovative business models. Launching soon.
              </p>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-500 font-medium">
                Coming Soon
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
