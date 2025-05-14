import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Classification of Weedy Rice Seeds",
    description:
      "A computer vision Project which uses ResNet50 and VGG16 algorithms that enables to see data and predict the class types of rice seeds whether it is cultivated or weedy rice using Pytorch and Streamlit as its main tools.",
    image: "/projects/project1.png",
    tags: ["Machine Learning", "Pytorch", "Streamlit", "Computer Vision"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Email Notification Automation",
    description: "Auto Email Notification from Google Sheets",
    image: "/projects/project2.png",
    tags: ["N8N", "Automation", "API"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Smart Device Monitoring Dashboard",
    description:
      "Implemented an interactive IoT dashboard using ThingsBoard to monitor and visualize real-time data from simulated smart devices.",
    image: "/projects/project3.png",
    tags: ["Thingsboard", "IoT", "Data Analysis"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                {/* Centered Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-1 text-center">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-center">
                  {project.description}
                </p>

                {/* Pinned Bottom: Demo + GitHub */}
                <div className="mt-auto flex justify-center items-center space-x-4 pt-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/HeroineX02"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
