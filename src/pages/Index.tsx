import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Star, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import HeroScrollAnimation from "@/components/HeroScrollAnimation";
import PricingSection5 from "@/components/ui/pricing";
import { SparklesText } from "@/components/ui/sparkles-text";
import shopInterior from "@/assets/shop-interior.jpeg";
import camaroImage from "@/assets/camaro-detail.jpeg";
import audiImage from "@/assets/audi-mobile.jpeg";
import bmwImage from "@/assets/bmw-interior.jpeg";
import ramTruck from "@/assets/ram-truck.jpeg";
import toyotaAvalon from "@/assets/toyota-avalon.jpeg";
import sprinterShop from "@/assets/sprinter-shop.jpeg";
import ram2500White from "@/assets/ram-2500-white.jpeg";
import shopExterior from "@/assets/shop-exterior.jpeg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    name: "Exterior Wash",
    carPrice: "$30",
    truckPrice: "$40-$50",
    description: "Hand wash, wheels, tires, and windows",
  },
  {
    name: "Touch Up",
    carPrice: "$60-$80",
    truckPrice: "$80-$100",
    description: "Interior vacuum, wipe down, and exterior wash",
  },
  {
    name: "Full Detail",
    carPrice: "$250+",
    truckPrice: "$300+",
    description: "Complete interior & exterior restoration",
  },
  {
    name: "Premier Package",
    carPrice: "$700+",
    truckPrice: "$850+",
    description: "Ultimate detailing with ceramic coating",
  },
];

const testimonials = [
  {
    name: "Marcus J.",
    text: "Best detail I've ever had on my Corvette. These guys treat your car like it's their own. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah T.",
    text: "The Premier Package was worth every penny. My SUV looks brand new inside and out. Professional service!",
    rating: 5,
  },
  {
    name: "David M.",
    text: "They came to my office and detailed my BMW while I worked. Convenient and exceptional quality.",
    rating: 5,
  },
];

const trustBadges = [
  { icon: Shield, text: "Fully Insured" },
  { icon: Award, text: "Premium Products" },
  { icon: Clock, text: "Flexible Scheduling" },
  { icon: Star, text: "5-Star Rated" },
];

const galleryImages = [
  { type: "image", src: camaroImage, alt: "Camaro SS Detailing" },
  { type: "image", src: audiImage, alt: "Audi Mobile Service" },
  { type: "image", src: bmwImage, alt: "BMW Interior Detail" },
  { type: "image", src: shopInterior, alt: "Shop Interior" },
  { type: "video", src: "/assets/premierpolishing1.mp4?v=3", alt: "Premier Polishing Process" },
  { type: "image", src: toyotaAvalon, alt: "Toyota Avalon Detail" },
  { type: "image", src: sprinterShop, alt: "Sprinter Van in Shop" },
  { type: "image", src: ram2500White, alt: "White Ram 2500 Detail" },
  { type: "image", src: shopExterior, alt: "Shop Exterior" },
];

const Index = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = galleryRef.current?.querySelectorAll('.gallery-item');
      if (items) {
        gsap.fromTo(
          items,
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      {/* Hero Section with Scroll Animation */}
      <HeroScrollAnimation>
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <p className="text-primary font-semibold tracking-widest uppercase mb-4">
              Memphis' Premier Auto Detailing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Detailing to{" "}
              <motion.span
                className="text-gold-gradient inline-block"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3.5,
                  ease: "easeInOut",
                  delay: 3,
                }}
              >
                {"Enhance the Elite".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.1,
                      ease: "easeInOut"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Professional auto detailing for luxury vehicles. We bring showroom quality
              to your car with meticulous attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg font-semibold px-8">
                <a href="tel:901-650-8824">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (901) 650-8824
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg font-semibold px-8">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </HeroScrollAnimation>

      {/* Trust Badges */}
      <section className="bg-card border-y border-border py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={badge.text}
                className="flex items-center justify-center gap-3"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              >
                <badge.icon className="h-8 w-8 text-primary" />
                <span className="font-medium text-foreground">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-light">
        <PricingSection5 />
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gold-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the Premier Polishing difference. Every vehicle receives meticulous attention to detail.
            </p>
          </div>
          <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((item, i) => (
              <div
                key={i}
                className="gallery-item relative overflow-hidden rounded-lg group"
              >
                {item.type === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    ref={(el) => {
                      if (el) el.playbackRate = 0.7;
                    }}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Video Background */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Video - Aligned with Cards */}
        <div className="absolute inset-y-0 left-0 right-0 mx-auto w-[94%] max-w-[1400px] z-0">
          <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl relative">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              ref={(el) => {
                if (el) el.playbackRate = 0.8;
              }}
            >
              <source src="/assets/premierpolishing.mp4" type="video/mp4" />
            </video>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our <span className="text-gold-gradient">Clients Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((review) => (
              <Card key={review.name} className="bg-black/40 border-gold/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-white mb-4 italic">"{review.text}"</p>
                  <p className="text-primary font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-card to-background border-t border-border relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <SparklesText
              text="Ready for the Ultimate Detail?"
              colors={{ first: '#FFD700', second: '#FFA500' }}
              className="text-3xl md:text-4xl font-bold text-primary"
            />
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the Premier Polishing difference.
            Mobile service available throughout Memphis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg font-semibold px-8 shadow-lg shadow-primary/20"
            >
              <a href="tel:901-650-8824">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg font-semibold px-8 hover:bg-primary/10 border-primary/20 hover:text-primary"
            >
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
