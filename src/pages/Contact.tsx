import { useState } from "react";
import { Phone, MapPin, Clock, Facebook, Send, CheckCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact <span className="text-red-gradient">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to book your detail? Have questions? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                <Card className="bg-card border-border">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call or Text</p>
                      <a
                        href="tel:901-677-4116"
                        className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        (901) 677-4116
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:info@topwashapproved.com"
                        className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        info@topwashapproved.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Shop Location</p>
                      <a
                        href="https://maps.google.com/?q=318+Adams+Avenue,+Memphis,+TN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        318 Adams Avenue, Memphis, TN
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Business Hours</p>
                      <p className="font-semibold text-foreground">Mon-Sun: 8AM - 8PM</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Facebook className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Follow Us</p>
                      <a
                        href="https://facebook.com/topwashapproved"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        Facebook
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">Request a Quote</h2>

              {submitted ? (
                <Card className="bg-card border-border">
                  <CardContent className="p-12 text-center">
                    <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Name *
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Phone *
                          </label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="(901) 555-0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Vehicle (Year, Make, Model)
                        </label>
                        <Input
                          name="vehicle"
                          value={formData.vehicle}
                          onChange={handleChange}
                          placeholder="2024 Chevrolet Corvette"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Service Interested In
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select a service</option>
                          <option value="exterior">Exterior Wash</option>
                          <option value="touchup">Touch Up</option>
                          <option value="full">Full Detail</option>
                          <option value="premier">Premier Package</option>
                          <option value="ceramic">Ceramic Coating</option>
                          <option value="other">Other / Not Sure</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Additional Details
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your vehicle's condition or any specific concerns..."
                          rows={4}
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Send className="h-4 w-4 mr-2" />
                        Send Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://maps.google.com/maps?q=318+Adams+Avenue,+Memphis,+TN&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Top Wash Approved Location"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
