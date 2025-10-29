import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, Zap, Target, TrendingUp, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const InnovatorsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Lightbulb className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">For Innovators</h1>
            <p className="text-xl text-muted-foreground">
              Transform your breakthrough ideas into reality with the support, resources, and community you need to succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Zap className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Access to Capital</CardTitle>
                <CardDescription>
                  Connect with investors who believe in your vision and are ready to fund your next big idea.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Users className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Expert Mentorship</CardTitle>
                <CardDescription>
                  Learn from successful entrepreneurs and industry experts who have been where you are.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Target className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Strategic Guidance</CardTitle>
                <CardDescription>
                  Get help refining your business model, go-to-market strategy, and product roadmap.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Growth Resources</CardTitle>
                <CardDescription>
                  Access tools, templates, and resources designed to help you scale your innovation.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="mb-12 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">What We Look For</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">💡 Novel Ideas</h3>
                <p className="text-muted-foreground">
                  We're looking for truly innovative solutions that address real problems in unique ways.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🎯 Market Potential</h3>
                <p className="text-muted-foreground">
                  Your innovation should have clear market demand and scalability potential.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🚀 Execution Capability</h3>
                <p className="text-muted-foreground">
                  Show us you have the drive, skills, and commitment to bring your idea to life.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🌍 Impact Focus</h3>
                <p className="text-muted-foreground">
                  We prioritize innovations that create positive impact for users and society.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="bg-muted/30 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Success Stories</h2>
            <blockquote className="border-l-4 border-primary pl-6 py-2 mb-4">
              <p className="text-lg mb-2">
                "This platform gave us the connections and funding we needed to go from prototype to product launch in just 6 months."
              </p>
              <footer className="text-muted-foreground">— Sarah Chen, Founder of TechVision AI</footer>
            </blockquote>
            <blockquote className="border-l-4 border-primary pl-6 py-2">
              <p className="text-lg mb-2">
                "The mentorship I received was invaluable. My mentor helped me avoid costly mistakes and accelerate my growth."
              </p>
              <footer className="text-muted-foreground">— Marcus Rodriguez, CEO of EcoSolutions</footer>
            </blockquote>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Bring Your Innovation to Life?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Apply now and join our community of successful innovators.
            </p>
            <Link to="/apply">
              <Button size="lg" className="text-lg px-12">
                Apply as Innovator
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InnovatorsPage;
