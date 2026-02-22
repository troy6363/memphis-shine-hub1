import { Shield, Award, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import shopExterior from "@/assets/shop-exterior.jpeg";
import { useRef, useEffect } from "react";

const values = [
  {
    icon: Shield,
    title: "Quality Products",
    description: "We use only premium detailing products trusted by professionals worldwide.",
  },
  {
    icon: Award,
    title: "Expert Techniques",
    description: "Years of experience and continuous training ensure exceptional results.",
  },
  {
    icon: Heart,
    title: "Passion for Cars",
    description: "We treat every vehicle like it's our own, with care and attention to detail.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. We don't stop until you're impressed.",
  },
];

const About = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set playback speed to 75% (slower)
    video.playbackRate = 0.75;

    const handleTimeUpdate = () => {
      const fadePoint = video.duration - 0.5; // Start fade 0.5s before end
      if (video.currentTime >= fadePoint) {
        const fadeProgress = (video.currentTime - fadePoint) / 0.5;
        video.style.opacity = String(1 - (fadeProgress * 0.3)); // Fade to 70% opacity
      } else if (video.currentTime < 0.5) {
        // Fade in at start
        video.style.opacity = String(0.7 + (video.currentTime / 0.5) * 0.3);
      } else {
        video.style.opacity = '1';
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${shopExterior})` }}
        >
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-red-gradient">Top Wash Approved</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Memphis' trusted destination for luxury auto detailing since day one.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-red-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  <strong className="text-foreground text-xl block mb-2">Meet Clement Jackson, Founder of Top Wash Approved.</strong>
                  Our daily mission is simple: to earn a loyal, satisfied customer every single day. Combining unique, high-quality products with expert detailing techniques, we are dedicated to meeting your vehicle's every need.
                </p>
                <p>
                  Beyond personal vehicles, we proudly offer contract detailing for Mobile Express Transportation services, including church vans, daycare buses, medical transport, and public transit vehicles—all at highly competitive rates.
                </p>
                <p>
                  For your convenience, we operate a dedicated location where you can drop off your vehicle and we'll notify you the moment it's ready for pick up. Keep an eye out for our upcoming Full Pick-Up & Drop-Off Service!
                </p>
                <p className="text-primary font-bold italic text-xl pt-4">
                  "Thank you for choosing Top Wash Approved."
                </p>
              </div>
            </div>
            <div className="relative">
              <video
                ref={videoRef}
                src="/assets/about top wash.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg shadow-xl w-full transition-opacity duration-300"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold">
                Professional Facility
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Sets Us <span className="text-red-gradient">Apart</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="bg-background border-border text-center">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Experience the Premier Difference
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Schedule your detail today and see why Memphis chooses Top Wash Approved.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <a href="tel:901-677-4116">Call (901) 650-8824</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
