import { ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const ImageGallery = () => {
  return (
    <section className="section-padding bg-background relative">
      <div className="container-custom">
        <div className="relative">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Main Large Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-card group">
              <img
                src={gallery1}
                alt="Real estate consultation"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Second Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-card group">
              <img
                src={gallery2}
                alt="Happy clients"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Third Image with Arrow */}
            <div className="relative rounded-2xl overflow-hidden shadow-card group">
              <img
                src={gallery3}
                alt="Our office"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Arrow Button */}
              <button className="absolute bottom-4 right-4 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-accent/90 transition-all hover:scale-110">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Decorative Frame Elements */}
          <div className="hidden md:block absolute -top-4 left-1/2 w-24 h-24 border-2 border-primary/20 rounded-lg -z-10" />
          <div className="hidden md:block absolute -bottom-4 right-1/4 w-16 h-16 border-2 border-accent/20 rounded-lg -z-10" />
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
