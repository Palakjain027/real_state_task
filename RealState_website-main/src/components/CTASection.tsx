const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-custom relative">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
            Learn more about our listing process, as well as our
            additional staging and design work.
          </h2>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-8 bg-accent text-accent-foreground rounded-lg font-semibold shadow-lg hover:bg-accent/90 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 mt-6"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
