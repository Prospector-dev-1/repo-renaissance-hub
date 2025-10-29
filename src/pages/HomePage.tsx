import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Users, TrendingUp, Rocket } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary-glow/5 to-transparent" />
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Where Innovation Meets Opportunity
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with innovators, creators, and investors to transform groundbreaking ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply">
                <Button size="lg" className="text-lg px-8">
                  Get Started
                </Button>
              </Link>
              <Link to="/learn-more">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Built for Innovation
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-primary transition-colors hover:shadow-lg">
            <CardHeader>
              <Lightbulb className="w-12 h-12 text-primary mb-4" />
              <CardTitle>For Innovators</CardTitle>
              <CardDescription>
                Bring your revolutionary ideas to life with the resources and support you need.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/innovators">
                <Button variant="link" className="px-0">
                  Learn more →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors hover:shadow-lg">
            <CardHeader>
              <Users className="w-12 h-12 text-primary mb-4" />
              <CardTitle>For Creators</CardTitle>
              <CardDescription>
                Turn your creative vision into impactful products that change the world.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/creators">
                <Button variant="link" className="px-0">
                  Learn more →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors hover:shadow-lg">
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <CardTitle>For Investors</CardTitle>
              <CardDescription>
                Discover and fund the next generation of breakthrough innovations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/investors">
                <Button variant="link" className="px-0">
                  Learn more →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Active Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-muted-foreground">Funding Raised</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Community Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <Rocket className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Innovation Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of innovators, creators, and investors who are shaping the future.
          </p>
          <Link to="/apply">
            <Button size="lg" className="text-lg px-12">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
