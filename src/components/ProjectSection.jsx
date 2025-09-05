import { ExternalLink, ArrowRight } from "react-feather";
const projects = [
  {
    id: 2,
    title: "Book Store website",
    description:
      "A multilingual bookstore application built with Spring Boot. It features user authentication, a book catalog, shopping cart, and order management. The app supports English and French, uses an H2 in-memory database for easy setup, and comes with a clean Bootstrap-based UI.",
    image: "/Projects/bookstore.png",
    tags: ["Spring Boot", "Thymeleaf", "Bootstrap", "H2 Database","Maven"],
    demoUrl: "https://github.com/HickoDev/Book-Store-website",
  },
  {
    id: 3,
    title: "Resource & Workforce Optimization Desktop App",
    description:
      "Two-module desktop application: resource distribution (water, electricity) optimized by distance, availability, and customer satisfaction; and workforce allocation optimized by salary, geo preferences, labor laws, and added value. Tech: Python (Gurobi), Flask API, Electron UI.",
    image: "/Projects/optimization.png",
    tags: ["Python", "Gurobi", "Flask", "Electron"],
    demoUrl: "https://github.com/Nova-VI/Operations-research",
  },
  {
    id: 1,
    title: "Video Game Development with Unity",
    description:
      "Four Unity games: Demon Watch (interactive adventure with branching endings), Ninja Clown (precision platformer), Space Runner (endless runner with color-matching), and an Overcooked-style clone built in 24 hours for the French Culture  Game Jam.",
    image: "/Projects/game.webp",
    tags: ["Unity", "C#", "Game Design", "2D/3D"],
  demoUrl: "https://hickodev.itch.io/",
  videoUrl: "https://www.youtube.com/watch?v=g-_Ll_7BZVA"
  },
  {
    id: 4,
    title: "RecOS — Cisco Device Compliance Dashboard",
    description:
      "Cisco device monitoring dashboard (FastAPI backend + Vue.js frontend) tracking OS versions, CVEs, and End-of-Life status for compliance. Automated data collection with Ansible (IOS/NXOS), Cisco APIs, and web scraping to recommend versions. Modular pipeline for CVE checks, lifecycle analysis, and historical snapshots with email notifications. Jenkins jobs schedule runs, archive results, and automate reporting. Containerized with Docker; centralized logs, history, and inventory in a unified dashboard.",
    image: "/Projects/recos.png",
    tags: ["FastAPI", "Vue.js", "Ansible", "Jenkins", "Docker", "Python", "Selenium", "Bash", "SMTP"],
    demoUrl: "https://github.com/HickoDev/Recos",
  },
  {
    id: -2,
    title: "Task Management Web Application",
    description:
      "Web app for task creation, management (CRUD), and search with two roles (User/Admin) and role-based access. Admins can view, edit, and delete all tasks. Includes user feedback to improve UX and password hashing for security. Built with HTML, CSS, JavaScript, PHP, and a hosted SQL database.",
    image: "/Projects/trello.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    demoUrl: "#",
  },
];

export const ProjectsSection = () => {
  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sortedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={`tag-${project.id}-${idx}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                  {project.videoUrl && (
                    <>
                      {" "}
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="underline text-primary"
                      >
                        Watch the Overcooked clone video
                      </a>
                    </>
                  )}
                </p>

                <div className="mt-auto">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/HickoDev"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};