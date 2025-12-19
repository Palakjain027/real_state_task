import { useState } from "react";
import heroImage from "@/assets/hero-consultation.jpg";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="home" className="relative min-h-screen pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Real estate consultation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40" />
      </div>

      {/* Decorative Dots */}
      <div className="decorative-dot top-32 right-1/4 bg-accent/30" />
      <div className="decorative-dot bottom-40 left-16 bg-primary-foreground/30" />

      {/* Content */}
      <div className="relative container-custom flex items-center min-h-[calc(100vh-5rem)]">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full py-12">
          {/* Left Content */}
          <div className="text-primary-foreground animate-fade-up">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Consultation,
              <br />
              Design,
              <br />
              <span className="text-accent">&amp; Marketing</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-md">
              We help you find your dream home with expert guidance, innovative design solutions, and strategic marketing.
            </p>
          </div>

          {/* Consultation Form */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card rounded-2xl shadow-hover p-6 md:p-8 max-w-md ml-auto">
              <h2 className="font-heading font-semibold text-xl text-foreground mb-6">
                Get a Free Consultation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <input
                  type="text"
                  placeholder="Any City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <button
                  type="submit"
                  className="w-full h-12 bg-primary text-primary-foreground rounded-lg font-semibold shadow-soft hover:shadow-hover hover:bg-primary/90 transition-all duration-300"
                >
                  Get Quick Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
