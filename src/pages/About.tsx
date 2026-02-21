import { Shield, Award, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import shopExterior from "@/assets/shop-exterior.jpeg";
import shopInterior from "@/assets/shop-interior.jpeg";

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
            About <span className="text-gold-gradient">Premier Polishing</span>
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
                Our <span className="text-gold-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Premier Polishing of Memphis was founded with a simple mission: to provide 
                  luxury vehicle owners with detailing services that match their standards of excellence.
                </p>
                <p>
                  We understand that your vehicle is more than just transportation—it's a statement. 
                  That's why we approach every detail with the precision and care that luxury cars deserve.
                </p>
                <p>
                  From our state-of-the-art facility on Whitten Road to our mobile detailing service 
                  that comes to you, we're committed to delivering showroom-quality results that 
                  exceed expectations.
                </p>
                <p className="text-primary font-semibold italic text-lg">
                  "Detailing to Enhance the Elite"
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={shopInterior}
                alt="Premier Polishing facility"
                className="rounded-lg shadow-xl w-full"
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
              What Sets Us <span className="text-gold-gradient">Apart</span>
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

      {/* Facility */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gold-gradient">Facility</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our climate-controlled detailing bay features professional-grade lighting 
              and equipment to ensure every inch of your vehicle receives proper attention.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src={shopInterior}
              alt="Detailing bay with LED lighting"
              className="rounded-lg w-full h-80 object-cover"
            />
            <img
              src={shopExterior}
              alt="Premier Polishing exterior"
              className="rounded-lg w-full h-80 object-cover"
            />
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
            Schedule your detail today and see why Memphis chooses Premier Polishing.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <a href="tel:901-650-8824">Call (901) 650-8824</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
