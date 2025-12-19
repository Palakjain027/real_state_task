const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-muted/30 relative">
      {/* Decorative Elements */}
      <div className="decorative-dot top-16 left-1/4" />
      <div className="decorative-dot-accent bottom-20 right-1/3" />

      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            About Us
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Fifteen years of experience in real estate, excellent customer service and a
            commitment to work hard, listen and follow through. We provide quality services to
            build relationships with clients and more importantly, maintain those relationships
            by communicating effectively.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
