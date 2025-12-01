
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          onClick={() => setLocation("/")}
          variant="ghost"
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
            <p>
              TribeX Group collects information that you provide directly to us when you use our services,
              including personal information such as your name, email address, and contact details when you
              reach out to us or engage with our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Communicate with you about our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you technical notices and support messages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without
              your consent, except as required by law or as necessary to provide our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized
              access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: tribex@tribexgroup.in
              <br />
              Address: 826/3 MEI layout Bangalore 560073
            </p>
          </section>

          <section>
            <p className="text-sm">
              Last updated: January 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
