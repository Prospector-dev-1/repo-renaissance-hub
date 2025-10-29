import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, HelpCircle, Mail, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LearnMorePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <BookOpen className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn More</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our platform and how it works.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">About InnovatePlatform</h2>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <p className="text-lg">
                  InnovatePlatform is a comprehensive ecosystem designed to connect innovators, creators, and investors. 
                  Our mission is to accelerate the development and deployment of breakthrough innovations that solve 
                  real-world problems.
                </p>
                <p className="text-lg">
                  We believe that great ideas can come from anywhere, and that collaboration is the key to turning 
                  those ideas into reality. Our platform removes barriers and creates opportunities for talented 
                  individuals and forward-thinking investors to work together.
                </p>
                <p className="text-lg">
                  Since our founding, we've helped hundreds of projects secure funding, build teams, and launch 
                  successful products that are making a difference in the world.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does the application process work?</AccordionTrigger>
                <AccordionContent>
                  After submitting your application, our team reviews it within 2-3 business days. We evaluate 
                  based on your background, goals, and how well you align with our community values. If approved, 
                  you'll receive an invitation to join and access to our platform features.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Is there a cost to join?</AccordionTrigger>
                <AccordionContent>
                  Joining InnovatePlatform is completely free for all members. We take a small success fee only 
                  when projects successfully secure funding through our platform. This aligns our incentives with 
                  your success.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What kind of support do you provide?</AccordionTrigger>
                <AccordionContent>
                  We provide comprehensive support including mentorship matching, educational resources, networking 
                  events, funding introductions, and access to our community of experts. The level of support 
                  varies based on your needs and stage of development.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Can I join as both an innovator and investor?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! Many of our members wear multiple hats. You can participate in different capacities 
                  based on your interests and resources. Just indicate all relevant roles when you apply.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What industries do you focus on?</AccordionTrigger>
                <AccordionContent>
                  We're industry-agnostic and welcome innovations across all sectors including technology, 
                  healthcare, education, sustainability, consumer products, and more. What matters most is the 
                  quality of the idea and the team behind it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>How do you protect intellectual property?</AccordionTrigger>
                <AccordionContent>
                  We take IP protection seriously. All members sign NDAs, and we have secure systems for sharing 
                  sensitive information. We recommend filing for IP protection before sharing detailed technical 
                  information, and we can connect you with IP attorneys if needed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Mail className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Email Support</CardTitle>
                <CardDescription>
                  Get in touch with our team via email
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="mailto:support@innovateplatform.com" className="text-primary hover:underline">
                  support@innovateplatform.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <MessageCircle className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Community Forum</CardTitle>
                <CardDescription>
                  Join discussions with other members
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">Visit Forum</Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardHeader>
              <HelpCircle className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-2xl">Still Have Questions?</CardTitle>
              <CardDescription className="text-base">
                We're here to help! Reach out to our team and we'll get back to you promptly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply" className="flex-1">
                  <Button size="lg" className="w-full">
                    Apply Now
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="flex-1">
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LearnMorePage;
