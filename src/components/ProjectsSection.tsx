import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Clipit",
    description:
      "An AI-powered web app that identifies any movie from a YouTube clip. Users can paste any YouTube link (full video, Short, or embed) and Clipit analyzes the video to determine which movie it is from. It provides the best match plus close guesses.",
    link: "https://official-clipit.netlify.app",
    tags: ["AI", "React", "YouTube API"],
  },
  {
    title: "Task Management App",
    description:
      "A productivity app for managing tasks with drag-and-drop functionality and real-time updates.",
    link: "#",
    tags: ["React", "TypeScript", "Firebase"],
  },
  {
    title: "Portfolio Template",
    description:
      "A customizable portfolio template for developers and designers with dark mode support.",
    link: "#",
    tags: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather app with location-based forecasts, interactive maps, and animations.",
    link: "#",
    tags: ["JavaScript", "API", "CSS"],
  },
  {
    title: "Social Media Clone",
    description:
      "A full-featured social platform with posts, comments, likes, and real-time notifications.",
    link: "#",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Crypto Tracker",
    description:
      "Real-time cryptocurrency tracking with price alerts, charts, and portfolio management.",
    link: "#",
    tags: ["React", "Chart.js", "API"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary mb-4">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 rounded-2xl group transition-all duration-300 hover:border-primary/50 flex flex-col"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-bg text-primary-foreground font-semibold text-sm transition-all duration-300 hover:scale-105 w-fit"
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
