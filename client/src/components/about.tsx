import { Lightbulb, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">About TribeX Group</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TribeX Group is a diversified holding company built on innovation and excellence. 
            We operate across algorithmic trading, digital media, and venture capital - 
            bringing cutting-edge technology and strategic thinking to every industry we enter.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Innovation First</h3>
            <p className="text-muted-foreground">
              We leverage cutting-edge technology and data-driven methods to stay ahead of industry trends 
              and deliver superior results across all our ventures.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Strategic Excellence</h3>
            <p className="text-muted-foreground">
              Our strategic frameworks ensure sustainable growth and measured risk-taking 
              across all our business divisions.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Partner Focused</h3>
            <p className="text-muted-foreground">
              Every initiative we undertake is designed with our partners' and clients' 
              long-term success as the primary focus.
            </p>
          </div>
        </div>

        {/* Leadership Team */}
        <Card className="bg-card border border-border rounded-2xl">
          <CardContent className="p-12">
            <h3 className="text-3xl font-bold text-card-foreground text-center mb-12">Leadership</h3>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                  <span className="text-4xl font-bold text-white">CR</span>
                </div>
                <h4 className="text-2xl font-semibold text-card-foreground mb-2">Chitrashwa R</h4>
                <p className="text-lg text-primary mb-2 font-medium">Founder and CEO</p>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Leading Tribex Group's vision across trading, media, and investments with a focus on technology-driven growth.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
