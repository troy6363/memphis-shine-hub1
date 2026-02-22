import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center text-center">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/assets/logo transparent.png"
                alt="Top Wash Approved"
                className="h-32 md:h-40 w-auto transition-transform hover:scale-105 rounded-2xl"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
              />
            </Link>
            <p className="text-sm text-muted-foreground italic">
              "Experience The Top Wash Difference"
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
                href="tel:901-677-4116"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                (901) 677-4116
              </a>
              <a
                href="mailto:info@topwashapproved.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                info@topwashapproved.com
              </a>
              <a
                href="https://maps.google.com/?q=318+Adams+Avenue,+Memphis,+TN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>318 Adams Avenue<br />Memphis, TN</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Mon-Sun: 8AM - 8PM</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <a
              href="https://facebook.com/topwashapproved"
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
            © {new Date().getFullYear()} Top Wash Approved. All rights reserved.
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
