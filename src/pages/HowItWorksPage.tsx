import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ClipboardList, Users, Rocket, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HowItWorksPage = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "1. Submit Your Application",
      description: "Tell us about your innovation, project, or investment interests. Our streamlined application process makes it easy to get started."
    },
    {
      icon: Users,
      title: "2. Connect & Collaborate",
      description: "Get matched with the right partners based on your goals, skills, and needs. Build meaningful relationships with like-minded innovators."
    },
    {
      icon: Rocket,
      title: "3. Launch & Grow",
      description: "Access resources, mentorship, and funding to bring your ideas to life. Our platform supports you every step of the way."
    },
    {
      icon: Award,
      title: "4. Achieve Success",
      description: "Turn your innovation into impact. Celebrate milestones and continue growing with ongoing support from our community."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-muted-foreground">
            Our platform makes it simple to connect, collaborate, and create. Here's how we help you succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <step.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">{step.title}</CardTitle>
                <CardDescription className="text-base">
                  {step.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">What Makes Us Different?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">🎯 Smart Matching</h3>
                <p className="text-muted-foreground">
                  Our AI-powered algorithm connects you with the perfect collaborators based on skills, interests, and goals.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">💼 Comprehensive Resources</h3>
                <p className="text-muted-foreground">
                  Access mentorship, funding opportunities, tools, and educational content to accelerate your journey.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🌍 Global Community</h3>
                <p className="text-muted-foreground">
                  Join a diverse network of innovators, creators, and investors from around the world.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🚀 Proven Track Record</h3>
                <p className="text-muted-foreground">
                  We've helped hundreds of projects raise funding and launch successfully.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our platform today and start your innovation journey.
          </p>
          <Link to="/apply">
            <Button size="lg" className="text-lg px-12">
              Apply Now
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
