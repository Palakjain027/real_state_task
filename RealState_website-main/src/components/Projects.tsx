import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";

const Projects = () => {
  const projects = [
    {
      image: property1,
      title: "Consultation",
      location: "Project Name - San Mateo",
    },
    {
      image: property2,
      title: "Design",
      location: "Project Name - San Mateo",
    },
    {
      image: property3,
      title: "Marketing & Design",
      location: "Project Name - San Mateo",
    },
    {
      image: property4,
      title: "Consultation & Marketing",
      location: "Project Name - San Mateo",
    },
    {
      image: property5,
      title: "Consultation",
      location: "Project Name - San Mateo",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Our Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We know what buyers are looking for and suggest projects that will bring
            clients top dollar for the sale of their homes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Sold Badge (for some items) */}
                {index === 3 && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    SOLD
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-foreground mb-1 text-sm">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs mb-3">
                  {project.location}
                </p>
                <button className="w-full py-2 bg-accent text-accent-foreground text-xs font-semibold rounded-lg hover:bg-accent/90 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
