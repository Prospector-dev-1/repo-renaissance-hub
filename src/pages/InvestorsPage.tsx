import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Shield, Globe, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const InvestorsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <TrendingUp className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">For Investors</h1>
            <p className="text-xl text-muted-foreground">
              Discover and fund the next generation of breakthrough innovations. Access vetted opportunities with high growth potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Shield className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Vetted Opportunities</CardTitle>
                <CardDescription>
                  Every project on our platform has been carefully evaluated for market potential and team capability.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Globe className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Diverse Portfolio</CardTitle>
                <CardDescription>
                  Access innovations across industries, from tech startups to social impact ventures.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Zap className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Early Access</CardTitle>
                <CardDescription>
                  Get in on the ground floor of promising innovations before they gain mainstream attention.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Growth Support</CardTitle>
                <CardDescription>
                  Work alongside talented teams who are committed to scaling their innovations successfully.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="mb-12 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Investment Opportunities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">🚀 Early-Stage Ventures</h3>
                <p className="text-muted-foreground">
                  Invest in promising startups at the seed and pre-seed stages with high growth potential.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">💼 Growth Companies</h3>
                <p className="text-muted-foreground">
                  Support established companies looking to scale to the next level with Series A+ funding.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🌱 Impact Investments</h3>
                <p className="text-muted-foreground">
                  Fund innovations that create positive social and environmental impact alongside financial returns.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🔬 Deep Tech</h3>
                <p className="text-muted-foreground">
                  Invest in cutting-edge technology ventures in AI, biotech, clean energy, and more.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-3xl text-primary">$50M+</CardTitle>
                <CardDescription className="text-center">Capital Deployed</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-3xl text-primary">150+</CardTitle>
                <CardDescription className="text-center">Portfolio Companies</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-3xl text-primary">3.2x</CardTitle>
                <CardDescription className="text-center">Average ROI</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Investor Success Stories</h2>
            <blockquote className="border-l-4 border-primary pl-6 py-2 mb-4">
              <p className="text-lg mb-2">
                "I've found my best performing investments through this platform. The quality of deal flow is exceptional."
              </p>
              <footer className="text-muted-foreground">— David Chen, Angel Investor</footer>
            </blockquote>
            <blockquote className="border-l-4 border-primary pl-6 py-2">
              <p className="text-lg mb-2">
                "The vetting process gives me confidence in every investment. I've built a diverse, high-quality portfolio here."
              </p>
              <footer className="text-muted-foreground">— Patricia Williams, VC Partner</footer>
            </blockquote>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Invest in Innovation?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our network of investors funding the future.
            </p>
            <Link to="/apply">
              <Button size="lg" className="text-lg px-12">
                Apply as Investor
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InvestorsPage;
