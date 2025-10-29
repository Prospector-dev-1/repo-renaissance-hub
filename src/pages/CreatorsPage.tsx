import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Palette, Code, Video, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CreatorsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Palette className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">For Creators</h1>
            <p className="text-xl text-muted-foreground">
              Turn your creative vision into impactful products. Connect with innovators and investors who value your unique talents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Code className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Development Projects</CardTitle>
                <CardDescription>
                  Work on cutting-edge projects that push the boundaries of what's possible with technology.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Palette className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Design Opportunities</CardTitle>
                <CardDescription>
                  Create stunning user experiences and visual identities for innovative products.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Video className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Content Creation</CardTitle>
                <CardDescription>
                  Produce engaging content that tells compelling stories about groundbreaking innovations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Sparkles className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Creative Freedom</CardTitle>
                <CardDescription>
                  Work with teams that value your creative input and give you the freedom to innovate.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="mb-12 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Why Creators Choose Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">🎨 Meaningful Work</h3>
                <p className="text-muted-foreground">
                  Create work that matters. Every project on our platform is designed to make a real impact.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">💰 Fair Compensation</h3>
                <p className="text-muted-foreground">
                  Get paid what you're worth. Connect with projects that value quality creative work.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🤝 Collaborative Environment</h3>
                <p className="text-muted-foreground">
                  Work alongside passionate innovators and fellow creators in a supportive community.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">📈 Portfolio Building</h3>
                <p className="text-muted-foreground">
                  Build an impressive portfolio working on innovative projects that showcase your skills.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-3xl text-primary">500+</CardTitle>
                <CardDescription className="text-center">Active Creator Projects</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-3xl text-primary">$2M+</CardTitle>
                <CardDescription className="text-center">Paid to Creators</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-3xl text-primary">4.9/5</CardTitle>
                <CardDescription className="text-center">Creator Satisfaction</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Creator Testimonials</h2>
            <blockquote className="border-l-4 border-primary pl-6 py-2 mb-4">
              <p className="text-lg mb-2">
                "I've worked on more meaningful projects here than in my entire career. The quality of work and collaboration is exceptional."
              </p>
              <footer className="text-muted-foreground">— Alex Kim, UX Designer</footer>
            </blockquote>
            <blockquote className="border-l-4 border-primary pl-6 py-2">
              <p className="text-lg mb-2">
                "This platform connected me with innovators who truly value creative work. I'm building the portfolio of my dreams."
              </p>
              <footer className="text-muted-foreground">— Jordan Taylor, Full-Stack Developer</footer>
            </blockquote>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Impact?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our community and start working on projects that matter.
            </p>
            <Link to="/apply">
              <Button size="lg" className="text-lg px-12">
                Apply as Creator
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreatorsPage;
