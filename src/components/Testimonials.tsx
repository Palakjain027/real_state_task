import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Shannon Smith",
      role: "CEO, Remson Co.",
      content:
        "I was very excited to find a talented realtor who truly understood the needs of my family. They made the entire process seamless and professional.",
      rating: 5,
    },
    {
      name: "Shigna Kayak",
      role: "IT Architect",
      content:
        "A highly dedicated professional who has a passion for real estate marketing and design. I would recommend their services to everyone looking to sell.",
      rating: 5,
    },
    {
      name: "John Lazarro",
      role: "CFO, Innovation Co.",
      content:
        "Fantastic service! Our home was sold in three weeks for a price well above our expectations. Very professional team.",
      rating: 5,
    },
    {
      name: "Marcy Freeman",
      role: "Marketing Manager, Mirth",
      content:
        "I really appreciated the attention to detail and responsiveness. They guided me through every step of the process. Highly recommend!",
      rating: 5,
    },
    {
      name: "Lucy",
      role: "Marketing, Promus",
      content:
        "Outstanding service from start to finish. The team was attentive, professional, and delivered results beyond our expectations.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-muted/30 relative">
      {/* Decorative Elements */}
      <div className="decorative-dot top-20 left-16" />
      <div className="decorative-dot-accent bottom-24 right-1/4" />

      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Happy Clients
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-hover transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              {/* Content */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {testimonial.content}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
