import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              InnovatePlatform
            </h3>
            <p className="text-sm text-muted-foreground">
              Connecting innovators, creators, and investors to build the future together.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/apply" className="text-sm text-muted-foreground hover:text-primary transition-colors">Apply Now</Link></li>
              <li><Link to="/learn-more" className="text-sm text-muted-foreground hover:text-primary transition-colors">Learn More</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Users</h4>
            <ul className="space-y-2">
              <li><Link to="/innovators" className="text-sm text-muted-foreground hover:text-primary transition-colors">Innovators</Link></li>
              <li><Link to="/creators" className="text-sm text-muted-foreground hover:text-primary transition-colors">Creators</Link></li>
              <li><Link to="/investors" className="text-sm text-muted-foreground hover:text-primary transition-colors">Investors</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} InnovatePlatform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
