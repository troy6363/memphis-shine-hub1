import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Specials", path: "/specials" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
      isScrolled
        ? "bg-background/60 backdrop-blur-xl border-border/50"
        : "bg-background border-border"
    )}>
      {/* Top bar with phone */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-center md:justify-end">
          <a
            href="tel:901-677-4116"
            className="flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity"
          >
            <Phone className="h-4 w-4" />
            <span>Call Now: (901) 677-4116</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Text */}
          <Link to="/" className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              Top Wash <span className="text-red-gradient">Approved</span>
            </span>
            <span className="text-xs md:text-sm text-muted-foreground font-medium tracking-wide">
              Memphis Auto Detailing
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors rounded-md",
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button asChild className="font-semibold">
              <a href="tel:901-677-4116">
                <Phone className="h-4 w-4 mr-2" />
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-3 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 pb-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 text-base font-medium transition-colors rounded-md",
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-4 font-semibold">
              <a href="tel:901-677-4116">
                <Phone className="h-4 w-4 mr-2" />
                Call (901) 677-4116
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
