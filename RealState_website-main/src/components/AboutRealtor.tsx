import realtorImage from "@/assets/realtor-meeting.jpg";

const AboutRealtor = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="decorative-dot top-20 left-10" />
      <div className="decorative-dot-accent bottom-32 right-20" />

      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Not Your Average Realtor
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We'll sell your house like you're going with exceptional
              consultation, design, and effective marketing to get
              top buyers into your door. We have experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team combines decades of real estate expertise with modern marketing
              strategies to ensure your property gets the attention it deserves.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src={realtorImage}
                  alt="Professional real estate consultation"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
              <div className="decorative-dot-accent top-4 right-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRealtor;
