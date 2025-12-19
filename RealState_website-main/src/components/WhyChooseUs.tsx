import { Home, Palette, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Potential ROI",
      description:
        "Whether you're staying for 10+ years or trying to sell quickly your current home in a year, we'll walk you through your highest potential sale value process.",
    },
    {
      icon: Palette,
      title: "Design",
      description:
        "No changes will be made without consulting you and we'll put together your design choices and work closely to execute it on time and perfectly.",
    },
    {
      icon: Home,
      title: "Marketing",
      description:
        "Using our MLS platform, we send listing comments and digital market mailers to real estate agents to let them know your newly renovated property.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted/30 relative">
      {/* Decorative Elements */}
      <div className="decorative-dot top-16 right-1/3" />
      <div className="decorative-dot-accent bottom-20 left-1/4" />

      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive real estate services to help you achieve your property goals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
