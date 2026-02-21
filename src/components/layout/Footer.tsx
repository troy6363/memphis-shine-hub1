import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gold-gradient mb-2">
              Premier Polishing
            </h3>
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">
              of Memphis
            </p>
            <p className="text-sm text-muted-foreground italic">
              "Detailing to Enhance the Elite"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:901-650-8824"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                (901) 650-8824
              </a>
              <a
                href="https://maps.google.com/?q=1920+Whitten+Rd+Memphis+TN+38133"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>1920 Whitten Rd<br />Memphis, TN 38133</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Mon-Sat: 8AM - 6PM<br />Sun: By Appointment</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <a
              href="https://facebook.com/premierpolishingofmemphis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Premier Polishing of Memphis. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/80 mt-2">
            Powered by <a href="https://smartwebmemphis.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">SmartWeb Memphis</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
